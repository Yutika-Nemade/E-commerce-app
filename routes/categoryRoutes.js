import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { CreateCategoryController, UpdateCategoryController, categoryController, deleteCategoryController, singleCategoryController } from '../controllers/categoryController.js'

const router = express.Router()

router.post('/create-category', requireSignIn, isAdmin, CreateCategoryController)

router.put('/update-category/:id', requireSignIn, isAdmin, UpdateCategoryController)

router.get('/get-category', categoryController)

router.get('/single-category/:slug', singleCategoryController)

router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router