const categorySchema = require("../models/CategoryModel")

const getAllCategory = async(req,res)=>{
    const allCategory = await categorySchema.find()
    res.json({
        message:"all category are display..",
        data:allCategory
    })
}

const getCategoryById = async(req,res)=>{
    const foundCategory = await categorySchema.findById(req.params.id)
    if(foundCategory){
        res.json({
            message:"category can founded..",
            data:foundCategory,
        })
    }else{
        res.json({
            message:"category can no found.."
        })
    }
}

const addCategory = async(req,res)=>{
    const savedCategory = await categorySchema.create(req.body)
    if(savedCategory){
        res.status(201).json({
            message:"data can saved successfully..",
            data:savedCategory
        })
    }
}

const deleteCategory = async(req,res)=>{
    const deleteCategoryObj = await categorySchema.findByIdAndUpdate(req.params.id)
    if(deleteCategoryObj){
        res.status(200).json({
            message:"category can delete ..",
            data:deleteCategoryObj
        })
    }else{
        res.status(200).json({
            message:"category can not delete ..",
        })
    }

}


module.exports = {
    getAllCategory,
    deleteCategory,
    addCategory,
    getCategoryById

}