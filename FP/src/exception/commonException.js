module.exports = class extends Error {
  status;
  constructor(status = 500, message = "Unknown Error") {
    super(message);
    this.status = status;
    this.message = message;
  }
};
