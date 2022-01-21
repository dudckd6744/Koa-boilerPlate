const Router = require("koa-router");

const router = new Router();

function UserController() {
  //   ttete();
  return function ttete() {
    const route = new Router();
    const path = "/user";

    route.get("/").get("/test", test1).get("/test2");

    router.use(path, route.routes());

    function test1() {
      return console.log("test2");
    }
  };
  //   const test = (ctx) => {
  //     console.log("G");
  //     ctx.body = "ok";
  //   };
}
const test = new UserController();
console.log(test);
module.exports = { UserController };
