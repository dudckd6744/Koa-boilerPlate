import BadRequestException from "../exception/badRequestException";
import InvalidAuthorizedTokenError from "../exception/invalidAuthorizedTokenException";
import { redisClient } from "../libs/database";
const bypassPathList = ["/login", "/", "/api/user/me", "/api/user/post"];
import { verify, sign, refreshTokenSign, refreshVerify } from "../libs/jwt";

export const verifyJWT = async (ctx, next) => {
  const bearerToken = ctx.request.headers["x-access-token"];
  const refreshBearerToken = ctx.request.headers["cookie"] || "";
  try {
    if (bearerToken) {
      const token = bearerToken.replace(/^Bearer /, "");
      const refreshCookie = refreshBearerToken.replace("refresh-token=", "");
      // NOTE: verify 시 복호화 값 or jwt expired 값만 return 되게 만들었습니다.
      const user = await verify(token);

      const refreshToken = refreshVerify(refreshCookie);

      // NOTE: AccessToken 만료 && RefreshToken 유효할때
      if (user == "jwt expired" && refreshToken) {
        if (refreshToken != "jwt expired") {
          const UUID = await redisClient.get(refreshCookie);
          const token = signing(UUID);
          ctx.token = token;
          return next();
          // NOTE: AccessToken 만료 && RefreshToken 만료
        } else {
          return next().then((err) => {
            throw new BadRequestException(user || "Invalid Bearer Token");
          });
        }
        // NOTE: AccessToken 유효 && RefreshToken 만료
      } else {
        if (user != "jwt expired") {
          const refreshExpire = await redisClient.KEYS(user.UUID);
          if (user.UUID && !refreshExpire[0]) {
            const NewRefreshToken = reFreshsigning();
            const time = 60 * 60 * 24 * 14;
            redisClient.set(NewRefreshToken, user.UUID);
            redisClient.set(user.UUID, "");
            redisClient.expire(NewRefreshToken, time);
            redisClient.expire(user.UUID, time);
            // NOTE: 배포시에 secure && httpOnly 적용
            ctx.cookies.set("refresh-token", NewRefreshToken);
            ctx.user = user;
            return next();
          } else if (user.UUID && refreshExpire[0]) {
            ctx.user = user;
            return next();
          } else {
            return next().then((err) => {
              throw new BadRequestException(user || "Invalid Bearer Token");
            });
          }
        }
      }
    } else {
      const { path } = ctx;
      const found = bypassPathList.find((p) => p === path);

      if (!found) {
        return new Error();
      }
    }
    next();
  } catch (err) {
    next().then((error) => {
      new InvalidAuthorizedTokenError(err.message || "Invalid Bearer Token");
    });
  }
};
export const signing = (UUID) => sign({ UUID });
export const reFreshsigning = () => refreshTokenSign({});
