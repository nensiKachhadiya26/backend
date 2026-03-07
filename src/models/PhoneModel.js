const mongoose = require("mongoose")
const Schema = mongoose.Schema

const phoneSchema = new Schema({
        phoneName: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        color: {
            type: String
        },
        storage: {
            type: String
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
})

module.exports = mongoose.model("phones",phoneSchema)