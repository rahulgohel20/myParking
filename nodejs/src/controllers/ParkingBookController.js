const parkingBookModel = require("../models/ParkingBookModel")

const parkingBook = async(req,res)=>{
    
    const parkingBooked = await parkingBookModel.create(req.body)

    res.json({
        message:"Parking Booked",
        data:parkingBooked
    })
}

const deleteParkingBook = async(req,res)=>{
    const deletedBooked = await parkingBookModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"Data deleted successfully",
        data:deletedBooked
    })
}

const getParkingBookById = async(req,res)=>{
    const foundBooked = await parkingBookModel.findById(req.params.id).populate("userId").populate("parkingLotId").populate("vehicleId")

    res.json({
        message:"Data found...",
        data:foundBooked
    })
}


const getParkingBook = async(req,res)=>{
    const parkingLotId = req.params.parkingLotId
    const foundBooked = await parkingBookModel.find({parkingLotId:parkingLotId}).populate("userId").populate("parkingLotId").populate("vehicleId")

    res.json({
        message:"Data found...",
        data:foundBooked
    })
}

const getAllParkingBook= async(req,res)=>{

    const allBookeds = await parkingBookModel.find({}).populate("userId").populate("parkingLotId").populate("vehicleId")

    console.log(allBookeds)
    res.json({
        message:"parking booked fetched successfully",
        data: allBookeds
    })
}

const updatePaymentStatus = async(req,res)=>{
    try{

        const PaymentStatus = await parkingBookModel.findByIdAndUpdate(req.params.id,{paymentStatus:"Completed"},{new:true})
        res.status(201).json({
            message:"Payment Status changed..",
            data:PaymentStatus
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
}

const updateCheckout = async(req,res)=>{
    try{

        const checkout = await parkingBookModel.findByIdAndUpdate(req.params.id,{checkout:true},{new:true})
        res.status(201).json({
            message:"checked out..",
            data:checkout
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
}
// const updatePaymentStatus = async (req, res) => {
//   //update tablename set  ? where id = ?
//   //update new data -->req.body
//   //id -->req.params.id

//   try {
//     const updatedPaymentStatus = await parkingBookModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json({
//       message: "Parking lot updated successfully",
//       data: updatedPaymentStatus,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "error while update parking lot",
//       err: err,
//     });
//   }
// };


const getParkingSlotBookedByStateCityAreaLotId =async (req,res)=>{
    try{
        const stateId = req.params.stateId
        const cityId = req.params.cityId
        const areaId = req.params.areaId
        const lotId = req.params.parkingLotId
        const foundLot = await parkingBookModel.find({stateId:stateId,cityId:cityId,areaId:areaId,parkingLotId:lotId}).populate("parkingLotId").populate("vehicleId").populate("userId")

        res.status(201).json({
            message:"Lot found..",
            data:foundLot
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const totalSlotBooked = async(req,res)=>{
    try{
        const slotBooked = await parkingBookModel.countDocuments();
        res.status(201).json({
            message:"total Slot Booked fetched..",
            data:slotBooked
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}


module.exports = {
    parkingBook,deleteParkingBook,getAllParkingBook,getParkingBook,getParkingSlotBookedByStateCityAreaLotId,updatePaymentStatus,updateCheckout,getParkingBookById,totalSlotBooked
}