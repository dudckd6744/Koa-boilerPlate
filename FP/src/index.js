const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { asClass, createContainer, asValue } = require("awilix");
const { loadControllers, scopePerRequest } = require("awilix-koa");
const exception = require("./middleware/exception");

const app = new koa();

function createApp() {
  app.use(bodyParser());
  app.use(exception);

  // NOTE: 라우터 관리
  const container = createContainer().register({}); // register 에 의존성주입 해야되는것같다.
  app.use(scopePerRequest(container));
  app.use(loadControllers("api/**/*.{ts,js}", { cwd: __dirname }));

  app.listen(2000, () => console.log(`listening to port ${2000}`));
}

module.exports = { createApp };
