const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ParkingLotSchema = new Schema({

    name:{
        type:String
    },
    ownerId:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String
    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"areas",
        // required:true
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"cities",
        required:true
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"states",
        required:true
    },
    totalCapacityOfTwoWheeler:{
        type:Number,
        required:true
    },
    totalCapacityOfFourWheeler:{
        type:Number,
        required:true
    },
    otherInfo:{
        type:String
    },
    active:{
        type:Boolean,
        default:false
    },
    HourlyChargeTwoWheeler:{
        type:Number
    },
    HourlyChargeFourWheeler:{
        type:Number
    },
    parkingType:{
        type:String
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    }

})

module.exports = mongoose.model("parkinglots",ParkingLotSchema)