const routes = require("express").Router()
const parkingBookController = require("../controllers/ParkingBookController")

routes.post("/parkingbook",parkingBookController.parkingBook)
routes.get("/parkingbook/:id",parkingBookController.getParkingBook)
routes.get("/parkingbook",parkingBookController.getAllParkingBook)
routes.delete("/parkingbook/:id",parkingBookController.deleteParkingBook)
routes.get("/showparkingbooked/:stateId/:cityId/:areaId/:parkingLotId",parkingBookController.getParkingSlotBookedByStateCityAreaLotId)


module.exports = routes