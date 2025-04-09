const routes = require("express").Router()
const parkingLotController = require("../controllers/ParkingLotController")

routes.post("/addparkinglot",parkingLotController.addParkingLot)
routes.get("/parkinglot",parkingLotController.getAllParkingLot)
routes.get("/parkinglot/:ownerId",parkingLotController.getParkingLotById)
routes.get("/searchparkinglot/:stateId/:cityId/:areaId",parkingLotController.getParkingLotByStateCity)
routes.get("/displayparkinglot/:id",parkingLotController.getParkingLotByLotId)
routes.post("/updateparkingtwoslot/:id",parkingLotController.updateTwoSlotById)
routes.post("/updateparkingfourslot/:id",parkingLotController.updateFourSlotById)
routes.get("/getlotbyarea/:areaId",parkingLotController.getLotByAreaId)
routes.put("/updateparkinglot/:id",parkingLotController.updateParkingLot)
routes.delete("/deleteparkinglot/:id",parkingLotController.deleteParkingLot)

module.exports = routes