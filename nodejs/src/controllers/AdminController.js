const adminModel = require("../models/AdminModel")
const bcrypt = require("bcrypt")




const adminLogin = async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const foundUserFromRole = await adminModel.findOne({role: role})
    const foundUserFromEmail = await adminModel.findOne({email: email}).populate("roleId")
    console.log(foundUserFromRole)
    console.log(foundUserFromEmail)
        
    // if(foundUserFromRole!=null){
        if(foundUserFromEmail!=null){
        const isMatch = bcrypt.compareSync(password,foundUserFromEmail.password)
        
        if(isMatch==true){
            res.status(201).json({
                message:"login successfully",
                data:foundUserFromEmail
            })
        }
        else{
            res.status(500).json({
                message:"Invalid password"
            })
        }
        
    }
    else{
        res.status(500).json({
            message:"Invalid email"
        })
    }

}

module.exports = {
    adminLogin
}