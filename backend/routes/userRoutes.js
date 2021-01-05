import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  logoutAll,
} from '../controllers/userController.js';
import { protect, verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/register').post(registerUser);
router
  .route('/profile')
  .get([protect, verifyToken], getUserProfile)
  .put([protect, verifyToken], updateUserProfile);
router.route('/logout').get([protect, verifyToken], logoutUser);
router.route('/logoutAll').get([protect, verifyToken], logoutAll);

export default router;
