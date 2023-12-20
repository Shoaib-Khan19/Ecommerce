const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Products = require("../model/productModel");

exports.createProduct = catchAsyncErrors(async (req, res) => {
    // console.log(req.body);
    const createdProduct = await Products.create(req.body);
    res.status(201).json({ success: true, createdProduct });

});

//Receiving all data from Product server 

exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const getProducts = await Products.find();
    res.status(200).json({ success: true, getProducts });
});


//Receiving single data by Id or other like ProductTitle from Product server 

exports.singleProduct = catchAsyncErrors(async (req, res) => {
    // console.log(req.params.id);
    console.log(req.params);
    // without id
    // const singleProduct = await Products.find({"ProductTitle": "Object Detection"});

    //By id
    const { productid } = req.params;
    const singleProduct = await Products.findById(productid);
    res.status(200).json({ success: true, singleProduct });

});


// Updating the Product

exports.updateProduct = catchAsyncErrors(async (req, res) => {
    // const {projectTitle,projectDescription,projectPrice} =req.body;
    const { productid } = req.params;

    const updatedProduct = Products.findById({ productid })

    if (!updatedProduct) {
        console.log("Product not Found");
        res.status(404).json({ success: false, message: "Product not Found" });
    }

    await Products.findByIdAndUpdate(productid, req.body);
    res.status(201).json({ success: true });

});

// Delete Product by id

exports.deleteProduct = catchAsyncErrors(async (req, res) => {
    const { productid } = req.params;
    // console.log(req.params.id);
    const deletedProduct = await Product.deleteOne({ _id: productid })
    res.status(204).json({ success: true });

});

