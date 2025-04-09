const express = require("express") //express....
const mongoose = require("mongoose")
const cors = require("cors")
//express object..
const app = express()
app.use(cors())
app.use(express.json()) //to accept json

//import role routes

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

//import user routes

const userRoutes = require("./src/routes/UserRoute")
app.use(userRoutes)

const parkingBookRoutes = require("./src/routes/ParkingBookRoute")
app.use(parkingBookRoutes)

const cityRoutes = require("./src/routes/CityRoute")
app.use("/city",cityRoutes)

const stateRoutes = require("./src/routes/StateRoute")
app.use("/state",stateRoutes)

const areaRoutes = require("./src/routes/AreaRoute")
app.use("/area",areaRoutes)

const vehicleRoutes = require("./src/routes/VehicleRoute")
app.use(vehicleRoutes)

const parkingLotRoutes = require("./src/routes/ParkingLotRoute")
app.use(parkingLotRoutes)

const parkingSlotRoutes = require("./src/routes/ParkingSlotRoute")
app.use(parkingSlotRoutes)

const contactUsRoute = require("./src/routes/ContactUsRoute")
app.use(contactUsRoute)

const securityRoute = require("./src/routes/SecurityRoute")
app.use(securityRoute)

const adminRoute = require("./src/routes/AdminRoute")
app.use(adminRoute)

mongoose.connect("mongodb://127.0.0.1:27017/myParking").then(()=>{
    console.log("database connected....")
})


//server creation...
const PORT = 2008
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})