const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const citySchema = new Schema({
    cityName:{
        type:String,
        required:true,
    },
    stateName:{
        type:String,
        required:true,
    },
    population:{
        type:String,
        required:true,
    },
    famousFor:{
        type:String,
    },
});

module.exports = mongoose.model("cities",citySchema);