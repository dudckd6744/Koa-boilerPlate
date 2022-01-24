const { createController } = require("awilix-koa");
const { BadRequestException } = require("../../exception");
const { test } = require("./service");

const API = () => ({
  getTodo: (ctx) => {
    console.log("3");
    ctx.body = test();
  },
  createTodo: async (ctx) => {
    throw new InvalidAuthorizedTokenException("gdgd");
  },
});

module.exports = createController(API)
  .prefix("/api")
  .get("", "getTodo")
  .post("/test", "createTodo"); // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
