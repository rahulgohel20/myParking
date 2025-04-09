const routes = require("express").Router()
const stateController = require("../controllers/StateController")

routes.post("/addstate",stateController.addState)
routes.get("/allstate",stateController.getAllState)

module.exports = routes