const router = require("express").Router()
const cityController = require("../controllers/CityController")

router.get("/cities",cityController.getAllCities)
router.get("/city/:id",cityController.getCityById)
router.post("/city",cityController.addCity)
router.delete("/city/:id",cityController.deleteCity)
router.put("/city/:id",cityController.updateCity)
module.exports = router
