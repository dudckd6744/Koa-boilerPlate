const dao = require('./dao')

exports.getToDo = (ctx) => {
  console.log("serv");
  return dao.test(ctx)
};

