const { createController } = require("awilix-koa");
const { BadRequestException } = require("../../exception");
const { successWrapper } = require("../../lib/success");

const { test } = require("./service");

const API = () => ({
  test: (ctx) =>{
    return "ok"
  },
  getTodo: (ctx) => {
    console.log("sd");
    return  test(ctx);
  },
  createTodo: async (ctx) => {
    throw new InvalidAuthorizedTokenException("gdgd");
  },
});

module.exports = createController(API)
  .prefix("/api")
  .get("","getTodo",{before:[successWrapper(test)]})
  .post("/test", "createTodo"); // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
