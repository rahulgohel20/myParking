const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")
const mailUtil = require("../utils/MailUtil")
// const path = require("path")
// const multer = require("multer")
// const cloudinaryUtil = require("../utils/CloudinaryUtil")
const jwt = require("jsonwebtoken")
const secret = "secret"
const adminModel = require("../models/AdminModel")



// const storage = multer.diskStorage({
//   destination: "./uploads",
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// //multer object....

// const upload = multer({
//   storage: storage,
//   //fileFilter:
// }).single("image");


const signUp = async(req,res)=>{
    if(req.body.password === req.body.cpassword){
        try{
        
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(req.body.password,salt)
            const hashedPassword1 = bcrypt.hashSync(req.body.cpassword,salt)

            req.body.password = hashedPassword
            req.body.cpassword = hashedPassword1
            const userCreated = await userModel.create(req.body)
            
            const mailContent = `<html>
                                <h6>Thank you for Registration in My Parking</h6>
                                <p>Booked Your Slot and Safe your vehicle</p><br/>
                                <p>Thank You :)</p>
                            </html>`
            const emailmsg=await mailUtil.sendingMail(userCreated.email,"welcome to MyParking ",mailContent)
            
            console.log(emailmsg)
            res.status(201).json({
                message:"User created...",
                data:userCreated
            })
        
        
        }
        catch(err){
            console.log(err)
            res.status(500).json({
                message:"error",
                data:err
            })
        }
    }
    
}

const userLogin = async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const foundUserFromRole = await userModel.findOne({role: role})
    const foundUserFromEmail = await userModel.findOne({email: email}).populate("roleId")
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
    // }
    
    else{
        res.status(500).json({
            message:"Invalid email"
        })
    }
}


const addUser = async(req,res)=>{
    const savedUser = await userModel.create(req.body)

    res.json({
        message:"Data added...",
        data:savedUser
    })
}

const deleteUser = async(req,res)=>{
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"Data deleted successfully",
        data:deletedUser
    })
}

const getUser = async(req,res)=>{
    const foundUser = await userModel.findById(req.params.id)

    res.json({
        message:"Data found...",
        data:foundUser
    })
}

const getAllUsers= async(req,res)=>{

    const users = await userModel.find().populate("roleId");
    res.json({
        message:"role fetched successfully",
        data: users
    })
}

const getUserByCustomer = async(req,res)=>{
    const users = await userModel.find({role:"Customer"}).populate("roleId")
    res.json({
        message:"users fetched successfully",
        data: users
    })
}

const getUserByParkingOwner = async(req,res)=>{
    const users = await userModel.find({role:"Parking Owner"}).populate("roleId")
    res.json({
        message:"users fetched successfully",
        data: users
    })
}

const getUserBySecurity = async(req,res)=>{
    const users = await userModel.find({role:"Security"}).populate("roleId")
    res.json({
        message:"users fetched successfully",
        data: users
    })
}

const updateJobActive = async(req,res)=>{
    try{

        const changeStatus = await userModel.findByIdAndUpdate(req.params.id,{jobActive:true},{new:true})
        res.status(201).json({
            message:"Security active status changed..",
            data:changeStatus
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
}

// const addUserWithFile = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       res.status(500).json({
//         message: err.message,
//       });
//     } else {
//       // database data store
//       //cloundinary

//       const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
//       console.log(cloundinaryResponse);
//       console.log(req.body);

//       //store data in database
//       req.body.FileURL = cloundinaryResponse.secure_url
//       const savedUser = await userModel.create(req.body);

//       res.status(200).json({
//         message: "User saved successfully",
//         data: savedUser
//       });
//     }
//   });
// };


const forgotPassword = async(req,res)=>{
    const email = req.body.email
    const foundUser = await userModel.findOne({email:email})

    if(foundUser){
        const token = jwt.sign(foundUser.toObject(),secret)
        console.log(token)
        const url = `http://localhost:5173/resetpassword/${token}`
        const mailContent = `<html>
                                <p>Click <a href="${url}">Reset</a> to "reset your password"</p>
                            </html>`

        await mailUtil.sendingMail(foundUser.email,"Reset Password",mailContent)
        res.status(201).json({
                message:"Reset link sent to mail...",
                
        })
        
    }
    else{
        res.json({
            message:"user not found register require" 
        })
        }
}

const resetPassword = async(req,res)=>{
    const token = req.body.token
    const newPassword = req.body.password

    const userFromToken = jwt.verify(token,secret)
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword,salt);
    const hashedPassword1 = bcrypt.hashSync(req.body.cpassword,salt)

    req.body.password = hashedPassword
    req.body.cpassword = hashedPassword1

    const updatedUser = await userModel.findByIdAndUpdate(userFromToken._id, {
        password: hashedPassword,hashedPassword1
    });
     res.status(201).json({
                message:"Updated successfully",
                data:updatedUser
    })
}


module.exports = {
    addUser,deleteUser,getAllUsers,getUser,signUp,userLogin,forgotPassword,resetPassword,getUserByCustomer,getUserByParkingOwner,getUserBySecurity,updateJobActive
}