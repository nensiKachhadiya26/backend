const router = require("express").Router()
const stateController = require("../controllers/StateController")

router.get("/states",stateController.getAllState)
router.get("/state/:id",stateController.getStateById)
router.post("/state",stateController.addState)
router.delete("/state/:id",stateController.deleteState)

module.exports = router