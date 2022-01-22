const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { asClass, createContainer} = require("awilix")
const {loadControllers, scopePerRequest, createController} = require("awilix-koa")
// const Router = require("koa-router");

const app = new koa();
// const router = new Router();
function createApp(controllers) {


const container = createContainer().register({
  // userService: asClass(/*...*/"tet"),
  todoService: asClass(createController)
})
app.use(scopePerRequest(container))
  app.use(bodyParser());
  // app.use(router.routes());
  app.use(loadControllers('/api/**/*.{ts,js}', { cwd: __dirname }))

  app.listen(2000, () => console.log(`listening to port ${2000}`));

  // const route = new Router();

  // controllers.forEach((router) => {
  //   console.log(router);
  //   route.use(router);
  // });
  // router.use("/api", route.routes());
}

module.exports = { createApp };
