const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stateSchema = new Schema({
    stateName: {
        type: String,
        required: true,
    },
    countryName: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    capitalCity: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("states",stateSchema)