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
    const savedMovie = await movieSchema.create(req.body)
    res.status(201).json({
        message:"data saved successfully..",
        data:savedMovie
    })
}

const deleteMovie = async(req,res)=>{
    const deleteMovieObj = await movieSchema.findByIdAndDelete(req.params.id)
    if(deleteMovieObj){
        res.status(201).json({
            message:"movie can deleted..",
            data:deleteMovieObj
        })
    }else{
        res.status(201).json({
            message:"movie can not delete.."
        })
    }
}



module.exports = {
    getAllMovie,
    deleteMovie,
    addMovie,
    movieGetById
}