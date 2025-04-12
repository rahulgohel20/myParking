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



const getAllSecuirty = async(req,res)=>{
    try{
        const foundAllSecurity = await securityModel.find().populate("securityId").populate("parkingLotId")
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
    
        const foundSecurity = await securityModel.findById(req.params.id).populate("securityId").populate("parkingLotId")
        res.status(201).json({
            message:"security found by id..",
            data:foundSecurity
        })
        
    
    
}

const getSecurityByUserId = async(req,res)=>{
    try{

        const foundsecurity = await securityModel.find({securityId:req.params.securityId}).populate("securityId").populate("parkingLotId")
        res.status(201).json({
            message:"security found..",
            data:foundsecurity
        })
    }
    catch (err) {
    res.status(500).json({
      message: "error while update parking lot",
      err: err,
    });
        
}
    
}

const updateSecurity = async (req, res) => {
  //update tablename set  ? where id = ?
  //update new data -->req.body
  //id -->req.params.id

  try {
    const security = await securityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({
      message: "Security updated successfully",
      data: security,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while update parking lot",
      err: err,
    });
  }
};

const deleteSecurity = async(req,res)=>{
    try{
        const deleted = await securityModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "Security deleted successfully",
      data: deleted,
    });
    }
    catch(err){
        res.status(500).json({
      message: "error while delete parking lot",
      err: err,
    });
    }
}


const totalSecuirty = async(req,res)=>{
    try{
        const totalsecurity = await securityModel.countDocuments();
        res.status(201).json({
            message:"total security fetched..",
            data:totalsecurity
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    joinSecurity,getAllSecuirty,getSecurityById,getSecurityByUserId,totalSecuirty,updateSecurity,deleteSecurity
}