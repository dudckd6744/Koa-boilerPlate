const successWrapper = (handler) => async (ctx, next) => {
  console.log("1");
    const response = await handler("ctx");
  console.log("2");
  ctx.body = ({
      success: true,
      response,
      error: null,
    });
};

module.exports ={successWrapper}