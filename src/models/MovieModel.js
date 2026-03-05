const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema =  new Schema({
    movieName: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("movies",movieSchema)