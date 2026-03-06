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
    const savedState = await stateSchema.create(req.body)
    if(savedState){
        res.status(201).json({
            message:"data saved successfully..",
            data:savedState
        })
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

module.exports = {
    getAllState,
    deleteState,
    getStateById,
    addState
}