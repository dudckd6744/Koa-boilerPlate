export const successWrapper = (handler) => async (ctx, next) => {
    const response = await handler(ctx);
    ctx.body = ({
      success: true,
      response,
      error: null,
    });
};

