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
    try{
        const savedCategory = await categorySchema.create(req.body)
        res.status(201).json({
            message:"data can saved successfully..",
            data:savedCategory
        })
    }catch(err){
        res.status(500).json({
        message:"error while creating product",
        err:err
    });
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
const updateCategory = async(req,res)=>{
    const updateObj = await categorySchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        message:"data updated..",
        data:updateObj
    })
}


module.exports = {
    getAllCategory,
    deleteCategory,
    addCategory,
    getCategoryById,
    updateCategory

}