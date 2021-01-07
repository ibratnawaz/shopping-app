import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, verifyToken, admin } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post([protect, verifyToken], addOrderItems)
  .get([protect, verifyToken, admin], getOrders)
router.route('/myorders').get([protect, verifyToken], getMyOrders)
router.route('/:id').get([protect, verifyToken], getOrderById)
router.route('/:id/pay').put([protect, verifyToken], updateOrderToPaid)
router
  .route('/:id/deliver')
  .put([protect, verifyToken, admin], updateOrderToDelivered)

export default router
