const CommonException = require("./commonException");

module.exports = class BadRequestException extends CommonException {
  constructor(message) {
    super(400, message);
  }
};
