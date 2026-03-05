const getUser = (req,res)=>{
    console.log("get user called..")
    res.send("get api called..")
}

const userData = [
    {id:1,name:"ram",age:23},
    {id:2,name:"sita",age:22},
    {id:3,name:"gita",age:25},
]

const getUsers = (req,res)=>{
    res.json({
        message:"all user data",
        data:userData
    })
}

const getUserById = (req,res)=>{
    console.log(req.params.id)
    const foundUser = userData.find((user) => user.id == req.params.id);
    if(foundUser){
        res.json({
        message:"user can found..",
        data:foundUser
        })
    }else{
        res.json({
            message:"user can not found.."
        })
    }
}



module.exports = {
    getUser,
    getUsers,
    getUserById

}