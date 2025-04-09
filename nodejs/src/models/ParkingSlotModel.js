const mongoose = require("mongoose")
const Schema = mongoose.Schema
const parkingSlotSchema = new Schema({

    parkingLotId:{
        type:Schema.Types.ObjectId,
        ref:"parkinglots"
    },
    floor:{
        type:String,
        required:true
    },
    parkingTag:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    },
    minParkingMin:{
        type:Number,
        required:true
    },
    suvSuported:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("parkingSlots",parkingSlotSchema)