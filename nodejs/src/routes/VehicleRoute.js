const routes = require("express").Router()
const vehicleController = require("../controllers/VehicleController")

routes.post("/addvehicle",vehicleController.addVehicle)
routes.get("/vehicles",vehicleController.getAllVehicle)
routes.get("/vehicles/:id",vehicleController.getVehicleById)
routes.get("/getvehicles/:userId",vehicleController.getVehicleByUserId)

module.exports = routes