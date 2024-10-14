const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(propertyName, details) {
        super("BadRequest", StatusCodes.BAD_REQUEST, `Invalid credentials for ${propertyName} provided`, details);
    }
}

module.exports = BadRequest;