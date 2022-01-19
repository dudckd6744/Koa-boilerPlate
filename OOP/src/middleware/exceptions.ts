const exceptions = async (ctx, next) => {
    console.log("err");
    
  try {
    await next();
  } catch (err) {
    const status = err.status || 500;
    const message = err.message;
    const error = {
      status,
      message,
    };
    ctx.status = status;
    ctx.body = {
      success: false,
      response: null,
      error,
    };
  }
};
export default exceptions;
