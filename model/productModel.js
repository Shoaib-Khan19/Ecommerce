const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Product Name"]
    },
    description: {
        type: String,
        required: [true, "Please enter your Product Description"]
    },
    Category: {
        type: String,
        required: [true, "Please enter your Product Category"]
    },
    tags: {
        type: String,
    },
    originalPrice: {
        type: Number,
        required: [true, "Please enter Product's Original Price"]
    },
    discountedPrice: {
        type: Number,
        // required : [true, "Please enter Product's Discounted Price"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter Product's Stock Number"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    reviews:[
        {
            name:{
                type:Object,
            },
            comment:{
                type: String,
            },
            productID:{
                type: String,
            },
            createdAt:{
                type: Date,
                default: Date.now()
            },
        },
    ],
    ratings:{
        type:Number,
    },
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type:Object,
        required:true,
    },
    sold_out:{
        type:Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
module.exports = mongoose.model("Products", productSchema);