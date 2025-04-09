const routes = require("express").Router()
const securityController = require("../controllers/SecurityController")

routes.post("/joinsecurity",securityController.joinSecurity)
routes.get("/vehicles",securityController.getAllVehicle)
routes.get("/vehicles/:id",securityController.getVehicleById)
routes.get("/getvehicles/:userId",securityController.getVehicleByUserId)

module.exports = routes