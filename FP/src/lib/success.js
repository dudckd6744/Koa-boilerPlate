const successWrapper = (handler) => async (ctx, next) => {
  console.log("@");
    const response = await handler(ctx);
    console.log("12");
    ctx.body = ({
      success: true,
      response,
      error: null,
    });
};

module.exports ={successWrapper}