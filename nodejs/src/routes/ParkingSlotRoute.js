const routes = require("express").Router()
const parkingSlotController = require("../controllers/ParkingSlotController")

routes.post("/addparkingslot",parkingSlotController.addParkingSlot)
routes.get("/parkingslots",parkingSlotController.getAllParkingSlot)
routes.get("/parkingslots/:id",parkingSlotController.getParkingSlotById)

module.exports = routes