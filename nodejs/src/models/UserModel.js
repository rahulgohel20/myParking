const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    gender:{
        type:String
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    mobile:{
        type:Number
    },
    role:{
        type:String
    },
    // areaId:{
    //     type:Schema.Types.ObjectId,
    //     ref:"areas",
    //     // required:true
    // },
    // cityId:{
    //     type:Schema.Types.ObjectId,
    //     ref:"cities",
    //     required:true
    // },
    // stateId:{
    //     type:Schema.Types.ObjectId,
    //     ref:"states",
    //     required:true
    // },
    // FileURL:{
    //     type:String,
    //     required: true
    // }
})

module.exports = mongoose.model("users",userSchema)