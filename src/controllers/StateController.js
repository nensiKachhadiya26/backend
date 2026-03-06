const stateSchema = require("../models/StateModel")

const getAllState = async(req,res)=>{
    const allState = await stateSchema.find()
    res.json({
        message:"All State..",
        data:allState
    });
};

const getStateById = async(req,res)=>{
    const foundState = await stateSchema.findById(req.params.id)
    if(foundState){
        res.json({
            message:"state can found..",
            data:foundState
        });
    }else{
        res.json({
            message:"state can not found.."
        })
    }
}

const addState = async(req,res)=>{
    try{
        const savedState = await stateSchema.create(req.body)
        res.status(201).json({
            message:"data saved successfully..",
            data:savedState
        })
    }catch(err){
        res.status(500).json({
        message:"error while creating product",
        err:err
    });
}   
}

const deleteState = async(req,res)=>{
    const deleteStateObj = await stateSchema.findByIdAndDelete(req.params.id)
    if(deleteStateObj){
        res.status(200).json({
            message:"delete record successfully..",
            data:deleteStateObj
        })
    }else{
        res.status(200).json({
            message:"data can not delete.."
        })
    }
}
const updateState = async(req,res)=>{
    const updateObj = await stateSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        message:"data updated...",
        data:updateObj
    })
}

module.exports = {
    getAllState,
    deleteState,
    getStateById,
    addState,
    updateState
}