const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({
    //fileds /// get
    name:{
        type:String
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"states"
    }
})

module.exports = mongoose.model("cities",citySchema)
