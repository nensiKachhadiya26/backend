const router = require("express").Router()
const employeeController = require("../controllers/EmployeeController")
router.get("/employees",employeeController.getEmployees)
router.get("/employee/:id",employeeController.getEmpById)
router.put("/employee/:id",employeeController.updateEmp)
module.exports = router