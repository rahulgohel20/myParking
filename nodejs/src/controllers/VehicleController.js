const vehicleModel = require("../models/VehicleModel")

const addVehicle = async(req,res)=>{
    try{
        const savedVehicle = await vehicleModel.create(req.body)
        res.status(201).json({
            message:"Vehicle added..",
            data:savedVehicle
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
    addVehicle,getAllVehicle,getVehicleById,getVehicleByUserId
}