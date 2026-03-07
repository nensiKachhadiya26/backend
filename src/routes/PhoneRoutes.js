const router = require("express").Router()
const phoneController = require("../controllers/PhoneController")

router.get("/phones",phoneController.getAllPhone)
router.get("/phone/:id",phoneController.getPhoneById)
router.post("/phone",phoneController.addPhone)
router.delete("/phone/:id",phoneController.deletePhone)
router.put("/phone/:id",phoneController.updatePhone)
module.exports = router