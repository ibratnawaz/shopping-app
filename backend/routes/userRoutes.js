import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  logoutAll,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { admin, protect, verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/register').post(registerUser)
router
  .route('/profile')
  .get([protect, verifyToken], getUserProfile)
  .put([protect, verifyToken], updateUserProfile)
router.route('/logout').get([protect, verifyToken], logoutUser)
router.route('/logoutAll').get([protect, verifyToken], logoutAll)
router
  .route('/:id')
  .delete([protect, admin], deleteUser)
  .get([protect, verifyToken, admin], getUserById)
  .put([protect, verifyToken, admin], updateUser)
router.route('/').get([protect, verifyToken, admin], getUsers)

export default router
