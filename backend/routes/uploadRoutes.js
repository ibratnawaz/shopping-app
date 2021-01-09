import path from 'path'
import express from 'express'
import multer from 'multer'
import asyncHandler from 'express-async-handler'
import { admin, protect, verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb(new Error('Please upload an image only!'))
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
  limits: {
    fileSize: 5242880,
  },
})

router.post(
  '/',
  [protect, verifyToken, admin],
  upload.single('image'),
  asyncHandler((req, res) => {
    res.send(`/${req.file.path}`)
  })
)

export default router
