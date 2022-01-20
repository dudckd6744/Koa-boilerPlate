import jwt from "jsonwebtoken";
import BadRequestException from "../exception/badRequestException";
import commonException from "../exception/commonException";
import InvalidAuthorizedTokenError from "../exception/invalidAuthorizedTokenException";

export const verify = async (token) => {
  try {
    return jwt.verify(token, "test");
  } catch (error) {
    const message = error.message;

    return message;
  }
};
export const refreshVerify = (token) => {
  try {
    return jwt.verify(token, "test");
  } catch (error) {
    const message = error.message;
    return message;
  }
};
export const sign = (payload) =>
  jwt.sign(payload, "test", {
    algorithm: "HS256",
    expiresIn: "10s",
  });
export const refreshTokenSign = (payload) =>
  jwt.sign({}, "test", {
    algorithm: "HS256",
    expiresIn: "10d",
  });
