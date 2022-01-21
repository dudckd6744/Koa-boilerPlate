const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");

const app = new koa();
const router = new Router();
function createApp(controllers) {
  app.use(bodyParser());
  app.use(router.routes());

  app.listen(2000, () => console.log(`listening to port ${2000}`));

  const route = new Router();
  console.log(controllers);
  controllers.forEach((router) => {
    console.log(router);
    route.use(router);
  });
  router.use("/api", route.routes());
}

module.exports = { createApp };
