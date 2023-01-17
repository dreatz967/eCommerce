import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
const Product from '../models/productModel'

//@desc  Fetch all products
//@route  GET /api/products
//@access public

router.get('/', 
asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})
)

//@desc  Fetch a single product
//@route  GET /api/products
//@access public

router.get('/:id', 
asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message: ' Product not found'})
    }
    
    res.json(product)
})
)

export default Router