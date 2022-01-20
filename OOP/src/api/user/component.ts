import Router from "koa-router";
import BadRequestException from "../../exception/badRequestException";
import InvalidAuthorizedTokenError from "../../exception/invalidAuthorizedTokenException";
import { successWrapper } from "../../libs/success";
import { reFreshsigning, signing } from "../../middleware/auth";

export default class UserComponent {
  router = new Router();

  constructor() {
    this.initializeRouter();
  }
  initializeRouter() {
    const router = new Router();
    const path = "/user";
    router
      .get("/me", successWrapper(this.test))
      .post("/post", successWrapper(this.postTest))
      .post("/access", successWrapper(this.refreshToken));

    this.router.use(path, router.routes());
  }
  test = (ctx) => {
    const test = signing("test");
    const test2 = reFreshsigning();

    return { test, test2 };
  };
  postTest = (ctx) => {
    console.log(ctx.request.body);

    if (ctx.request.body.test == "@") {
      return ctx.request.body;
    } else {
      throw new BadRequestException("인증이필요합");
    }
  };

  refreshToken = (ctx) => {
    const token = ctx.token;
    console.log("token");

    return { token };
  };
}
