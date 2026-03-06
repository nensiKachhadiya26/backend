const router = require("express").Router()
const movieController = require("../controllers/MovieController")


router.get("/movies",movieController.getAllMovie)
router.get("/movie/:id",movieController.movieGetById)
router.post("/movie",movieController.addMovie)
router.delete("/movie/:id",movieController.deleteMovie)


module.exports = router





