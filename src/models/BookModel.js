const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
});

module.exports = mongoose.model("books",bookSchema)