import Router from "koa-router";
import BadRequestException from "../../exception/badRequestException";
import InvalidAuthorizedTokenError from "../../exception/invalidAuthorizedTokenException";
import {successWrapper} from "../../libs/success";


export default class UserComponent {
  router = new Router();

  constructor() {
    this.initializeRouter();
  }
  initializeRouter() {
    const router = new Router();
    const path = "/user";
    router.get("/", successWrapper(this.test)).post("/post", successWrapper(this.postTest));

    this.router.use(path, router.routes());
  }
  test = (ctx) => {
    return "ok1";
  };
  postTest = (ctx) => {
    console.log(ctx.request.body);

    if (ctx.request.body.test == "@") {
      return ctx.request.body;
    } else {
      throw new BadRequestException("인증이필요합");
    }
  };
}
