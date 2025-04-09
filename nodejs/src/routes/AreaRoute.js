const routes = require("express").Router()
const areaController = require("../controllers/AreaController")

routes.post("/addarea",areaController.addArea)
routes.get("/allarea",areaController.getAllArea)
routes.get("/getareabycity/:cityId",areaController.getAreaByCityId)

module.exports = routes