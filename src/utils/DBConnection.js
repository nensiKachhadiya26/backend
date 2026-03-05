const mongoose = require("mongoose")

const dbConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/26_mern").then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("database not connted..",err)
    })
}

module.exports = dbConnection