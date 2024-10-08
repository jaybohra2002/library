const BaseError = require("./base.error");

class ConflictError extends BaseError {
    constructor(message) {
      super(message);
      this.name = 'ConflictError';
      this.statusCode = 409;
    }
  }
  
  module.exports = ConflictError;
  