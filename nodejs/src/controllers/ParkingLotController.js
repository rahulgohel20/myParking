const { default: mongoose } = require("mongoose")
const parkingLotModel = require("../models/ParkingLotModel")
const userModel = require("../models/UserModel")
const ParkingLotModel = require("../models/ParkingLotModel")

const addParkingLot = async(req,res)=>{
    try{
        const savedParkingLot = await parkingLotModel.create(req.body)
        res.status(201).json({
            message:"Parking Lot added..",
            data:savedParkingLot
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllParkingLot = async(req,res)=>{
    try{
        const foundAllParkingLot = await parkingLotModel.find().populate("ownerId")
        console.log(foundAllParkingLot)
        res.status(201).json({
            message:"Parking Lots found..",
            data:foundAllParkingLot
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getParkingLotById = async(req,res)=>{
    try{
        const ownerId = req.params.ownerId
        const foundParkingLot = await parkingLotModel.find({ownerId:ownerId}).populate("ownerId")
        res.status(201).json({
            message:"Parking Lot found..",
            data:foundParkingLot
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
    
}
const getParkingLotByLotId = async(req,res)=>{
    try{
        const foundParkingLot = await parkingLotModel.findById(req.params.id).populate("ownerId")
        res.status(201).json({
            message:"Parking Lot found..",
            data:foundParkingLot
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
    
}

const updateParkingLot = async (req, res) => {
  //update tablename set  ? where id = ?
  //update new data -->req.body
  //id -->req.params.id

  try {
    const updatedParkingLot = await parkingLotModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({
      message: "Parking lot updated successfully",
      data: updatedParkingLot,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while update parking lot",
      err: err,
    });
  }
};

const deleteParkingLot = async(req,res)=>{
    try{
        const deletedParkingLot = await parkingLotModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "Parking lot deleted successfully",
      data: deletedParkingLot,
    });
    }
    catch(err){
        res.status(500).json({
      message: "error while delete parking lot",
      err: err,
    });
    }
}

const getLotByAreaId = async (req, res) => {
  try {
    const areas = await parkingLotModel.find({ areaId: req.params.areaId });
    res.status(200).json({
      message: "Lot found",
      data: areas,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
}



const getParkingLotByStateCity =async (req,res)=>{
    try{
        const stateId = req.params.stateId
        const cityId = req.params.cityId
        const areaId = req.params.areaId
        const foundLot = await parkingLotModel.find({stateId:stateId,cityId:cityId,areaId:areaId}).populate("ownerId")

        res.status(201).json({
            message:"Lot found..",
            data:foundLot
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}



const updateTwoSlotById = async(req,res)=>{
    try{
        var slotAvl = req.body.totalCapacityOfTwoWheeler
        const UpdatedSlot = await parkingLotModel.findByIdAndUpdate(req.params.id,{totalCapacityOfTwoWheeler:slotAvl})
        res.status(201).json({
            message:"Updated...",
            data:UpdatedSlot
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const updateFourSlotById = async(req,res)=>{
    try{
        var slotAvl = req.body.totalCapacityOfFourWheeler
        const UpdatedSlot = await parkingLotModel.findByIdAndUpdate(req.params.id,{totalCapacityOfFourWheeler:slotAvl})
        res.status(201).json({
            message:"Updated...",
            data:UpdatedSlot
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addParkingLot,getAllParkingLot,getParkingLotById,getParkingLotByStateCity,getParkingLotByLotId,updateTwoSlotById,updateFourSlotById,getLotByAreaId,updateParkingLot,deleteParkingLot
}