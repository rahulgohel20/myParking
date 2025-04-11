const routes = require("express").Router()
const securityController = require("../controllers/SecurityController")

routes.post("/joinsecurity",securityController.joinSecurity)
routes.get("/security",securityController.getAllSecuirty)
routes.get("/security/:id",securityController.getSecurityById)
routes.get("/getvehicles/:userId",securityController.getVehicleByUserId)

module.exports = routes