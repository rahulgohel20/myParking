const routes = require("express").Router()
const adminController = require("../controllers/AdminController")

routes.post("/admin/login",adminController.adminLogin)


module.exports = routes