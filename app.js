const express = require("express")
const app = express()
app.use(express.json())
const dbConnection = require("./src/utils/DBConnection")
dbConnection() 

const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes) 

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/emp",employeeRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
app.use("/prod",productRoutes)

const bookRoutes = require("./src/routes/BookRoutes")
app.use("/bookApi",bookRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/cityApi",cityRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/stateApi",stateRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/categoryApi",categoryRoutes)

const movieRoutes = require("./src/routes/MovieRoutes")
app.use("/movieApi",movieRoutes)


const PORT = 7102;
app.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`)
})
