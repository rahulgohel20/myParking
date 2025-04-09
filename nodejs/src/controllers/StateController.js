const stateModel = require("../models/StateModel")

const addState = async(req,res)=>{
    try{
        const savedState = await stateModel.create(req.body)
        res.status(201).json({
            message:"State added..",
            data:savedState
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllState = async(req,res)=>{
    try{
        const allState = await stateModel.find()
        res.status(201).json({
            message:"All state found",
            data:allState
        })
        
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addState,getAllState
}