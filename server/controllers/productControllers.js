import Product from "../models/Product"

//here we are getting all products in controllers so we can call it in router


exports.products = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        })
    }

};


//here we are getting a single product in controllers so we can call it in router
exports.product = async (req, res) => {
    let productId = req.params.id;
    try {
        let products = await Product.findById(productId);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        })
    }
}


//here we are creating a product so we call it in router
exports.createProduct = async (req, res) => {
    let newProduct = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        releaseyear: req.body.releaseyear,
        info: req.body.info
    };
    //whenever we try to create a product always check if the product already exists
    try {
        let product = await Product.findOne({ name: newProduct.name });
        if (product) {
            return res.status(400).json({
                msg: "Product already exists"
            });

        }
        // if the product does not exists then save it to database  
        product = new Product(newProduct);
        product = await product.save();

        res.status(201).json({
            result: "Successfully created product",
            product: product
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        })
    }
};


//here we are updating a product so we call it in router
exports.updateProduct = async (req, res) => {
    let productId = req.params.id;
    let updateProduct = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        releaseyear: req.body.releaseyear,
        info: req.body.info
    };
    try {

        let product = await Product.findById(productId);
        if (!product) 
        {
            return res.status(400).json({
                msg: "Unfortunately Product does not exists"
            });

        }
        // if the product does not exists then update it to database  
        product = await Product.findByIdAndUpdate(productId,
            {
                $set: updateProduct
            },
            { new: true }
        );

        res.status(201).json({
            result: "Product is successfully updated",
            product: product
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        })
    }
};


//here we are deleting a product so we call it in router
exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    try {

        let product = await Product.findById(productId);
        if (!product) {
            return res.status(400).json({
                msg: "Unfortunately Product does not exists"
            });

        }
        // if the product does not exists then delete it from database  
        product = await Product.findByIdAndDelete(productId);

        res.status(200).json({
            result: "Product is successfully deleted",
            productId: productId
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        })
    }
};


