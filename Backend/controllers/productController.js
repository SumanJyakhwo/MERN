import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";


//POST /api/products/create
export const createProduct = asyncHandler (async (req, res) => {
    const {name, price, description, image, category, countInStock} = req.body;
    if(!name || !price || !description || !image || !category || !countInStock){
        res.status(400);
        throw new Error('All fields are required');

    }
    const productExists = await Product.findOne({name});
    if(productExists){
        res.status(400);
        throw new Error('Product with this name already exists');
      }

    const product = await Product.create({name, price, description, image, category, countInStock});
    res.status(201).json({
        success:true, message: "Product created successfully", data: product
    });
})


//GET /api/products
export const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find();
    if(products.length === 0){
        res.status(404);
        throw new Error('No products in database');
    }

    res.status(200).json({
        success:true, message: "Products fetched successfully", data: products
    });
});


