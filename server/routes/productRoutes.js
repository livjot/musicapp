import express, { Router } from 'express';
const router = express.Router();

const {products,product,createProduct,updateProduct,deleteProduct} = require ('../controllers/productControllers');


//here we are getting all products in router
router.get("/products",products);

//here we are getting single product in router
router.get("/products/:id",product);

//here we are creating a product
router.post("/products",createProduct);

//here we are updating a product
router.put("/products/:id",updateProduct);

//here we are deleteing a product in router
router.delete("/products/:id",deleteProduct);


export default router;