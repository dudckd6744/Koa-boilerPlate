const Router = require("koa-router");
const { createController } = require('awilix-koa')

// function UserController() {
//   //   ttete();
//   return function ttete() {
//     const route = new Router();
//     const path = "/user";

//     route.get("/").get("/test", test1).get("/test2");

//     router.use(path, route.routes());

//     function test1() {
//       return console.log("test2");
//     }
//   };
//   //   const test = (ctx) => {
//   //     console.log("G");
//   //     ctx.body = "ok";
//   //   };
// }

const API = ({ todoService }) => ({
  getTodo: async ctx => {(ctx.body = await todoService.get("ctx.params.id")),console.log("sds")},
  createTodo: async ctx =>
    (ctx.body = await todoService.create(ctx.request.body))
})

module.exports = createController(API)

  .prefix('/user') // Prefix all endpoints with `/todo`
  .get('/', 'getTodo') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`

// module.exports={createController}