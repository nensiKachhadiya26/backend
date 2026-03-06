const empSchema = require("../models/EmployeeModel")



const getEmployees = async(req,res) =>{
    const allEmp = await empSchema.find()
    res.json({
        message:"employee can found",
        data:allEmp
    })
}
const getEmpById = async(req,res)=>{
    const foundEmp = await empSchema.findById(req.params.id)
    if(foundEmp){
        res.json({
            message:"emp found..",
            data:foundEmp
        }) 
    }else{
        res.json({
            message:"emp can not found..."
        })
    }  
}

const updateEmp = async(req,res)=>{
    const updateObj = await empSchema.findByIdAndUpdate(req.param.id,req.body,{new:true})
    res.status(200).json({
        message:"data updated..",
        data:updateObj
    })
}

module.exports ={
    getEmployees,
    getEmpById,
    updateEmp
}