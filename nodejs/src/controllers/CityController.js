const cityModel = require("../models/CityModel")

const addCity = async(req,res)=>{
    try{
        const savedCity = await cityModel.create(req.body)
        res.status(201).json({
            message:"City Added...",
            data:savedCity
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllCity = async (req,res)=>{
    try{
        const allCity = await cityModel.find().populate("stateId")
        res.status(201).json({
            message:"All cities found",
            data : allCity
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}
const getCityByStateId = async (req, res) => {
  try {
    const cities = await cityModel.find({ stateId: req.params.stateId });
    res.status(200).json({
      message: "city found",
      data: cities,
    });
  } catch (err) {
    res.status(500).json({
      message: "city  not found",
    });
  }
};
module.exports = {
    addCity,getAllCity,getCityByStateId
}