const mongoose = require("mongoose")
const Schema = mongoose.Schema

const empSchema = new Schema({
    empName:{
        type:String
    },
    empSalary:{
        type:Number
    }
})

module.exports = mongoose.model("employees",empSchema)