const router = require("express").Router()
const userController = require("../controllers/UserController")
router.get("/user",userController.getUser)
router.get("/users",userController.getUsers)
router.get("/getuser/:id",userController.getUserById)

module.exports = router