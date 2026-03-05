const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema  = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model("categories",categorySchema)