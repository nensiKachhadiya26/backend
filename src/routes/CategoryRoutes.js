const router = require("express").Router()
const categoryController = require("../controllers/CategoryController")

router.get("/categories",categoryController.getAllCategory)
router.get("/category/:id",categoryController.getCategoryById)
router.post("/category",categoryController.addCategory)
router.delete("/category/:id",categoryController.deleteCategory)
router.put("/category/:id",categoryController.updateCategory)

module.exports = router