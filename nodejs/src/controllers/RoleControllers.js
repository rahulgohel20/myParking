const roleModel = require("../models/RoleModels")

const addRole = async(req,res)=>{
     try{
            const savedRole = await roleModel.create(req.body)
            res.status(201).json({
                message:"role added..",
                data:savedRole
            })
        }
    catch(err){
        res.status(500).json({
            message:err
        })
        
    }
}

const allRole = async(req,res)=>{
    try{
            const foundAllRole = await roleModel.find()
            res.status(201).json({
                message:"role found..",
                data:foundAllRole
            })
        }
    catch(err){
        res.status(500).json({
            message:err
        })
        
    }
}

const getRoleById = async(req,res)=>{
     try{
        foundRole = await roleModel.findById(req.param.id)
        res.status(201).json({
            message:"role found..",
            data:foundRole
        })
        }
    catch(err){
        res.status(500).json({
            message:err
        })
        
    }
}



module.exports = {
    addRole,allRole,getRoleById
}