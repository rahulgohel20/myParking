const securityModel = require("../models/AddSecurity")

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

const getAllVehicle = async(req,res)=>{
    try{
        const foundAllVehicle = await vehicleModel.find().populate("userId")
        res.status(201).json({
            message:"Vehicle found..",
            data:foundAllVehicle
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getVehicleById = async(req,res)=>{
    
        const foundVehicle = await vehicleModel.findById(req.params.id).populate("userId")
        res.status(201).json({
            message:"Vehicle found..",
            data:foundVehicle
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
    joinSecurity,getAllVehicle,getVehicleById,getVehicleByUserId
}