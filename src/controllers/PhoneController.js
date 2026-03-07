const phoneSchema = require("../models/PhoneModel")

const getAllPhone = async(req,res)=>{
    const allPhone = await phoneSchema.find()
    res.json({
        message:"all phone data found",
        data:allPhone
    })
}
const getPhoneById = async(req,res)=>{
        const foundPhone = await phoneSchema.findById(req.params.id)
        if(foundPhone){
            res.json({
                message:"data found..",
                data:foundPhone
            })
        }else{
            res.json({
                message:"data not found..",
            })
        }
}
const addPhone = async(req,res)=>{
    try{
        const savedPhone = await phoneSchema.create(req.body);
        res.status(201).json({
            message:"data saved successfully..",
            data:savedPhone,
        })
    }catch(err){
        res.status(500).json({
            message:"data can not saved..",
            err:err
        })
    }
}
const deletePhone = async(req,res)=>{
    const deleteObj = await phoneSchema.findByIdAndDelete(req.params.id)
    if(deleteObj){
        res.status(200).json({
            message:"data deleted..",
            data:deleteObj
        })
    }else{
        res.status(200).json({
            message:"data can not delete.."
        })
    }
}
const updatePhone = async(req,res)=>{
    const updateObj = await phoneSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        message:"data updated...",
        data:updateObj
    })
}

module.exports = {
    getAllPhone,
    getPhoneById,
    addPhone,
    deletePhone,
    updatePhone
}