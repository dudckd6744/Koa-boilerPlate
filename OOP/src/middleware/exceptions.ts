const exceptions = async (err, ctx, next) => {
    // TODO 공통 Exception 코드를 작성 해주세요
    // console.log(err)
    try {
     next()
        
    } catch (err) {
        console.log(err)
    const status = err.status || 500;
    const message = err.message;
    const error = {
      status,
      message,
    };
    ctx.status = 400
    ctx.body = error
    }

  
  };
  export default exceptions;