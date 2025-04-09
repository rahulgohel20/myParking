const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("admin",adminSchema)