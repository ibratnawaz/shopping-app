import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { protect, verifyToken, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(getProducts)
  .post([protect, verifyToken, admin], createProduct)

router
  .route('/:id')
  .get(getProductById)
  .put([protect, verifyToken, admin], updateProduct)
  .delete([protect, verifyToken, admin], deleteProduct)

export default router
