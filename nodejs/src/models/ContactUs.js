const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactUsSchema = new Schema({
    //fileds /// get
    fullname:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    mobile:{
        type:Number,

    },
    message:{
        type:String
    },
    email:{
        type:String,
        unique:true
    }
})

module.exports = mongoose.model("contacts",contactUsSchema)