const routes = require("express").Router()
const userController = require("../controllers/UserController")

routes.get("/users",userController.getAllUsers)
// routes.post("/user",userController.addUser)
routes.delete("/users/:id",userController.deleteUser)
routes.get("/users/:id",userController.getUser)
routes.post("/users",userController.signUp)
routes.post("/users/login",userController.userLogin)
routes.post("/user/forgotpassword",userController.forgotPassword)
routes.post("/user/resetpassword",userController.resetPassword)
routes.get("/userbycustomer",userController.getUserByCustomer)
routes.get("/userbyparkingowner",userController.getUserByParkingOwner)
routes.get("/userbysecurity",userController.getUserBySecurity)
routes.post("/updatejobactive/:id",userController.updateJobActive)
routes.get("/totaluser",userController.totalUser)


// routes.post("/user/add",userController.addUserWithFile)

module.exports = routes