export default class extends Error {
    status: number;
    constructor(status = 500, message = 'Unknown Error') {
      super(message);
      this.status = status;
      this.message = message;
    }
  }