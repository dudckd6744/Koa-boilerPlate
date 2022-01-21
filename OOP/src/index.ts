import koa from "koa";
import Route from "koa-router";
import bodyParser from "koa-bodyparser";
import exceptions from "./middleware/exceptions";
import InvalidAuthorizedTokenError from "./exception/invalidAuthorizedTokenException";
import { verifyJWT } from "./middleware/auth";

class App {
  app;
  router;
  constructor(controller) {
    this.router = new Route();
    this.app = new koa();
    this.initializeBodyParser();
    this.initializeErrHandling();
    this.initializeAuth();
    this.initializeControllers(controller);
  }

  listen() {
    // this.app = koa()
    this.app.listen(8000, () => {
      console.log("Example app listening at http://localhost:3000");
    });
  }

  initializeBodyParser() {
    this.app.use(bodyParser());
  }

  initializeErrHandling() {
    // exception
    this.app.use(exceptions);
    // this.app.use(async (ctx, next) => {
    //   console.log(1);
    //   const started = new Date();
    //   next();
    //   console.log(3);
    // });

    // this.app.use((ctx) => {
    //   console.log(2);
    // });
  }

  initializeAuth() {
    // 인증 미들웨어
    this.app.use(verifyJWT);
  }

  initializeControllers(controller) {
    this.app.use(this.router.routes());

    const route = new Route();

    // this.router.get("/", (ctx) => {
    //   ctx.body = "ok";
    // });
    console.log(controller);

    controller.forEach((router) => {
      route.use(router);
    });
    this.router.use("/api", route.routes());
  }
}

export default App;
