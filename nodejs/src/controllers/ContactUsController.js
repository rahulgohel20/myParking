const contactUsModel = require("../models/ContactUs")

const addContactUs = async(req,res)=>{
    try{
        const savedContactUs = await contactUsModel.create(req.body)
        res.status(201).json({
            message:"Contact us Added...",
            data:savedContactUs
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllContactUs = async (req,res)=>{
    try{
        const allContactUs = await contactUsModel.find().populate("userId")
        res.status(201).json({
            message:"All contact us found",
            data : allContactUs
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addContactUs,getAllContactUs
}