const routes = require("express").Router()
const parkingBookController = require("../controllers/ParkingBookController")

routes.post("/parkingbook",parkingBookController.parkingBook)
routes.get("/parkingbook/:parkingLotId",parkingBookController.getParkingBook)
routes.get("/parkingbookbyid/:id",parkingBookController.getParkingBookById)

routes.get("/parkingbook",parkingBookController.getAllParkingBook)
routes.delete("/parkingbook/:id",parkingBookController.deleteParkingBook)
routes.get("/showparkingbooked/:stateId/:cityId/:areaId/:parkingLotId",parkingBookController.getParkingSlotBookedByStateCityAreaLotId)
routes.post("/updatepaymentstatus/:id",parkingBookController.updatePaymentStatus)
routes.post("/updatecheckout/:id",parkingBookController.updateCheckout)


module.exports = routes