const areaModel = require("../models/AreaModel")

const addArea = async (req,res)=>{
    try{
        const savedArea = await areaModel.create(req.body)
        res.status(201).json({
            message:"Area added..",
            data:savedArea
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
        
    }
}

const getAllArea = async(req,res)=>{
    try{
        const allarea =  await areaModel.find().populate("cityId").populate("stateId")
        res.status(201).json({
            message:"All area found",
            data:allarea
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}
const getAreaByCityId = async (req, res) => {
  try {
    const areas = await areaModel.find({ cityId: req.params.cityId });
    res.status(200).json({
      message: "area found",
      data: areas,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
}



module.exports = {
    addArea,getAllArea,getAreaByCityId
}