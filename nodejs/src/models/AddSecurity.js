const mongoose = require("mongoose")
const Schema = mongoose.Schema

const securitySchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    lotId:{
        type:Schema.Types.ObjectId,
        ref:"parkinglots"
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("securities",securitySchema)