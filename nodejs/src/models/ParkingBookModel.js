const mongoose = require("mongoose")
const Schema = mongoose.Schema

const parkingBookSchema = Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users"
        
    },
    parkingSlotId:{
        type:Schema.Types.ObjectId,
        ref:"parkingslots"
    },
    parkingLotId:{
        type:Schema.Types.ObjectId,
        ref:"parkinglots"
    },
    vehicleId:{
        type:Schema.Types.ObjectId,
        ref:"vehicles"
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
    date:{
        type:Date
        
    },
    startTime:{
        type:String
    },
    endTime:{
        type:String
    },
    price:{
        type:Number
    },
    paymentStatus:{
        type:String,
        enum:["Pending","Completed","Failed"],
        default:"Pending"
        
    },
    amountPaid:{
        type:Number
    },
    paymentMethod:{
        type:String
    },
    securityAmountPaid:{
        type:Number
    },
    

})

module.exports = mongoose.model("parkingBook",parkingBookSchema)