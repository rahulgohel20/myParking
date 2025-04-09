const routes = require("express").Router()
const roleControllers = require("../controllers/RoleControllers")

routes.get("/roles",roleControllers.allRole)
// routes.post("/roles",roleControllers.addRole)
// routes.delete("/roles/:id",roleControllers.deleteRole)
routes.get("/roles/:id",roleControllers.getRoleById)
routes.post("/roles",roleControllers.addRole)
module.exports = routes

