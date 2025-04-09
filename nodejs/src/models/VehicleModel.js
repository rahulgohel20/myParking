const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vehicleSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    registrationNum:{
        type:String,
        unique:true,
        required:true
    },
    vehicleType:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("vehicles",vehicleSchema)