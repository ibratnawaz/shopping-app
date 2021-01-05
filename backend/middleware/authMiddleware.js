import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.authToken = token;
      req.user = await User.findById(decoded._id);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const verifyToken = (req, res, next) => {
  const { user, authToken } = req;
  if (user) {
    const check = user.tokens.filter((token) => {
      return token.token === authToken;
    });

    if (check.length === 0) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
    next();
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

export { protect, verifyToken };
