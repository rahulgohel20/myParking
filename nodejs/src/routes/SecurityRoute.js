const routes = require("express").Router()
const securityController = require("../controllers/SecurityController")

routes.post("/joinsecurity",securityController.joinSecurity)
routes.get("/security",securityController.getAllSecuirty)
routes.get("/security/:id",securityController.getSecurityById)
routes.get("/getsecurity/:securityId",securityController.getSecurityByUserId)
routes.get("/totalsecurity",securityController.totalSecuirty)
routes.put("/updatesecurity/:id",securityController.updateSecurity)
routes.delete("/deletesecurity/:id",securityController.deleteSecurity)

module.exports = routes