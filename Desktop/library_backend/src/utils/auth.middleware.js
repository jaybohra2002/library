const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/server.config');
const { StatusCodes } = require('http-status-codes');
const { UnauthorizedError } = require('../Errors');

async function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedError('token missing');
    }

    
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    next();
    
  }
}


function authorizeRole(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Access denied.' });
    }
    next();
  };
}

module.exports = { authenticate, authorizeRole };
