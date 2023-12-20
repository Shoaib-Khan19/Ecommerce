const express = require('express');

//importing Project all data controller from descriptionController
const {createProduct,getAllProducts,singleProduct,deleteProduct,updateProduct} = require('../controller/productController');


const router = express.Router();

//sending data to server using createProduct controller

router.post('/createProduct', createProduct);

//Receiving all data from Product server 

router.get('/getAllProducts', getAllProducts);

//Receiving single Product by Id from Product server 
router.get('/singleProduct/:productid', singleProduct);


//Delete single data by Id from Product server 
router.delete('/deleteProduct/:productid', deleteProduct);

// update Product by Id passing updating values in the body
router.put('/updateProduct/:productid', updateProduct);


// //Receiving single data from Project server 
// router.get("/api/v1/singleProject", singleProject);

//Receiving single Blog by Category from Blog server 
// router.get("/getBlogCategory/:Category", getBlogCategory);


module.exports = router