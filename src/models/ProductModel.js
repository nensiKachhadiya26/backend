const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productColor:[{
        type:String
    }],
    productSize:{
        enum:["S","M","L","XL","XXL"],
        type:String
    }
})
module.exports = mongoose.model("products",productSchema)