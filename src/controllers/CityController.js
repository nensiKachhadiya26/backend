const citySchema = require("../models/CityModel");

const getAllCities = async(req,res)=>{
    const allCities = await citySchema.find()
    res.json({
        message:"all cities...",
        data:allCities
    });
};

const getCityById = async(req,res)=>{
    const foundCity = await citySchema.findById(req.params.id)
    if(foundCity){
        res.json({
            message:"city founded..",
            data:foundCity,
        })
    }else{
        res.json({
            message:"city can not found..",
        })
    }
}

const addCity = async(req,res)=>{
    try{
        const savedCity = await citySchema.create(req.body)
        res.status(201).json({
            message:"Data Saved..",
            data:savedCity,
        });
    }catch(err){
        res.status(500).json({
        message:"error while creating city",
        err:err
    });
}
}

const deleteCity = async(req,res)=>{
    const deleteCityObj = await citySchema.findByIdAndDelete(req.params.id)
    if(deleteCityObj){
        res.status(200).json({
            message:"delete city successFully..",
            data:deleteCityObj
        });
    }else{
        res.status(200).json({
            message:"record can not delete..."
        })
    }
}
const updateCity = async(req,res)=>{
    const updateObj = await citySchema.findByIdAndUpdate(req.params.id,req.body,{new:true  })
        res.status(200).json({
            message:"data updated..",
            data:updateObj
      
    })
}


module.exports = {
    getAllCities,
    getCityById,
    addCity,
    deleteCity,
    updateCity
}