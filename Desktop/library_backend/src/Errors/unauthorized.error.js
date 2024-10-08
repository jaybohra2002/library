const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const BaseError=require('./base.error');
class UnauthorizedError extends BaseError {
    constructor(message) {
        const errorMessage = (message) ? message : 'Invalid login credentials passed, please try again with correct credentials!';
        super(errorMessage);
        this.statusCode = StatusCodes.UNAUTHORIZED;
        this.reason = ReasonPhrases.UNAUTHORIZED;
        this.errorMessage = errorMessage;
        this.name = "UnauthorizedError";
    }
}

module.exports = UnauthorizedError;