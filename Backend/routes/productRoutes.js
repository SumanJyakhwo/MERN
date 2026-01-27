import express from "express";
import { body } from "express-validator";
import { createProduct, getProducts } from "../controllers/productController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";


const productRoutes = express.Router();

const validateProduct = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('image').isURL().withMessage('Image must be a valid URL'),
    body('category').notEmpty().withMessage('Category is required'),
    body('countInStock').isInt({ min: 0 }).withMessage('Stock count must be a non-negative integer'),
]
//POST /api/products/create
productRoutes.post("/create", protect, admin, validateProduct,  createProduct);

productRoutes.get("/", protect, admin, getProducts);

export default productRoutes;