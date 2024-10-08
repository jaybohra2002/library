

const BadRequest = require('./badrequest.error');
const InternalServerError = require('./internalServer.error');
const NotFound = require('./not.found.error');
const UnauthorizedError = require('./unauthorized.error');
const ConflictError=require('./error.conflict.error')

module.exports = {
    BadRequest,
    InternalServerError,
    NotFound,
    UnauthorizedError,
    ConflictError
};
