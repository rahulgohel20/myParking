const securityModel = require("../models/AddSecurity")
const userModel = require("../models/UserModel")


const joinSecurity = async(req,res)=>{
    try{
        const savedSecurity = await securityModel.create(req.body)
        res.status(201).json({
            message:"Security joined..",
            data:savedSecurity
        })
        
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}



const getAllSecuirty = async(req,res)=>{
    try{
        const foundAllSecurity = await securityModel.find().populate("securityId")
        res.status(201).json({
            message:"Security found..",
            data:foundAllSecurity
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getSecurityById = async(req,res)=>{
    
        const foundSecurity = await securityModel.findById(req.params.id)
        res.status(201).json({
            message:"security found by id..",
            data:foundSecurity
        })
        
    
    
}

const getVehicleByUserId = async(req,res)=>{
    
        const foundVehicle = await vehicleModel.find({userId:req.params.userId}).populate("userId")
        res.status(201).json({
            message:"Vehicle found..",
            data:foundVehicle
        })
        
    
    
}

module.exports = {
    joinSecurity,getAllSecuirty,getSecurityById,getVehicleByUserId
}