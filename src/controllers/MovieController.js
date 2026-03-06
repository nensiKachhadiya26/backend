const movieSchema = require("../models/MovieModel")

const getAllMovie = async(req,res)=>{
    const allMovie = await movieSchema.find()
    res.json({
        message:"all movies are display..",
        data:allMovie
    });
}

const movieGetById = async(req,res)=>{
    const foundMovie = await movieSchema.findById(req.params.id)
    if(foundMovie){
        res.json({
            message:"Movie found..",
            data:foundMovie
        })
    }else{
        res.json({
            message:"movie can not found..",
        })
    }
}

const addMovie = async(req,res)=>{
    try{
        const savedMovie = await movieSchema.create(req.body)
        res.status(201).json({
            message:"data saved successfully..",
            data:savedMovie
        })
    }catch(err){
        res.status(500).json({
        message:"error while creating product",
        err:err
    });
}
}

const deleteMovie = async(req,res)=>{
    const deleteMovieObj = await movieSchema.findByIdAndDelete(req.params.id)
    if(deleteMovieObj){
        res.status(200).json({
            message:"movie can deleted..",
            data:deleteMovieObj
        })
    }else{
        res.status(200).json({
            message:"movie can not delete.."
        })
    }
}
const updateMovie = async(req,res)=>{
    const updateObj = await movieSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        message:"data updated..",
        data:updateObj
    })
}



module.exports = {
    getAllMovie,
    deleteMovie,
    addMovie,
    movieGetById,
    updateMovie
}