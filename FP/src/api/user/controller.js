const { createController } = require("awilix-koa");
const { BadRequestException } = require("../../exception");
const { successWrapper } = require("../../lib/success");

const service = require("./service");

const API = () => ({
  getTodo: (ctx)=> {
    console.log("con");
    return  service.getToDo("ss");
  },
  // createTodo: async (ctx)  {
  //   throw new InvalidAuthorizedTokenException("gdgd");
  // },
});

module.exports = createController(API)
  .prefix("/api")
  .get("","getTodo",{before:[successWrapper(API().getTodo)]})
  // .post("/test", "createTodo"); // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
