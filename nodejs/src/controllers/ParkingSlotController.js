const parkingSlotModel = require("../models/ParkingSlotModel")

const addParkingSlot = async (req,res)=>{
    try{
        const savedParkingSlot = await parkingSlotModel.create(req.body)
        res.status(201).json({
            message:"slot added..",
            data:savedParkingSlot
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
        
    }
}

const getAllParkingSlot = async(req,res)=>{
    try{
        const allParkingSlot =  await parkingSlotModel.find().populate("parkingLotId")
        res.status(201).json({
            message:"All Slot found",
            data:allParkingSlot
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getParkingSlotById = async (req, res) => {
  try {
    const parkingSlot = await parkingSlotModel.find(req.params.parkingLotId);
    res.status(200).json({
      message: "Slot found",
      data: parkingSlot,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
}

module.exports = {
    addParkingSlot,getAllParkingSlot,getParkingSlotById
}