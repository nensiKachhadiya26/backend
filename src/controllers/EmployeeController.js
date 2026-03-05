const employees = [
    {id:1001,name:"hir",salary:23000},
    {id:1002,name:"git",salary:13000},
    {id:1003,name:"mit",salary:32000},
]

const getEmployees = (req,res) =>{
    res.json({
        message:"employee can found",
        data:employees
    })
}
module.exports ={
    getEmployees
}