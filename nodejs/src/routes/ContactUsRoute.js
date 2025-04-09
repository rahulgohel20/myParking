const routes = require("express").Router()
const contactUsController = require("../controllers/ContactUsController")

routes.post("/addcontactus",contactUsController.addContactUs)
routes.get("/allcontactus",contactUsController.getAllContactUs)
module.exports = routes