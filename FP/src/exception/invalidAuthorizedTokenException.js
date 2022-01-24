const CommonException = require("./commonException");

module.exports = class InvalidAuthorizedTokenError extends CommonException {
  constructor(message) {
    super(401, message);
  }
};
