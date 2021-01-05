import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = await user.generateToken();
    return res.json({ user, token });
  }
  res.status(401);
  throw new Error('Invalid email or password');
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = await user.generateToken();

  if (user) {
    res.status(201).json({ user, token });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const { user } = req;

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { user, body } = req;

  const updates = Object.keys(body);
  updates.forEach((update) => (user[update] = body[update]));
  await user.save();
  res.json(user);
});

// @route     GET /api/users/logout
// @desc      Logout a user
// @access    Private
const logoutUser = asyncHandler(async (req, res) => {
  const { user, authToken } = req;
  user.tokens = user.tokens.filter((token) => {
    return token.token !== authToken;
  });
  await user.save();
  res.json('Logout successfully');
});

// @route     GET /api/users/logoutAll
// @desc      Logout a user from all devices
// @access    Private
const logoutAll = asyncHandler(async (req, res) => {
  const { user } = req;
  user.tokens = [];
  await user.save();
  res.json('Logged out from All devices');
});

export {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  logoutAll,
  updateUserProfile,
};
