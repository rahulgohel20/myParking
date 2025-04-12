import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ViewSlotBooked = () => {
    
    const [slots, setslots] = useState([])
    const navigate = useNavigate()


    const getAllSlotBooked = async () => {
    const sec = await axios.get("/getsecurity/"+localStorage.getItem("id"))
    console.log(sec.data.data[0].securityId._id)
    // localStorage.setItem("parkingLotId",sec.data.data.parkingLotId)
    const res = await axios.get("/parkingbook/"+localStorage.getItem("parkingLotId"));
    console.log(res.data)
    setslots(res.data.data);
  };

  const changePaymentStatus = async(id)=>{
    const res = await axios.post("/updatepaymentstatus/"+id)
    console.log(res.data)
     if(res.status===201){
                  Swal.fire({
                    title: "Payment Suucessfully!",
                    icon: "success",
                    
                  });
        
                  
                }
  }

  const checkout = async(id)=>{
    console.log(id)
    const bookeddata = await axios.get("/parkingbookbyid/"+id)
    console.log(bookeddata.data)
    if(bookeddata.data.data.vehicleId.vehicleType==="2 Wheeler"){

      const slot = bookeddata.data.data.parkingLotId.totalCapacityOfTwoWheeler + 1
      console.log(slot)
      const slotupdate = await axios.post("/increaseparkingtwoslot/"+localStorage.getItem("parkingLotId")+"/"+slot)
      console.log(slotupdate.data)
    }

    if(bookeddata.data.data.vehicleId.vehicleType==="4 Wheeler"){

      const slot = bookeddata.data.data.parkingLotId.totalCapacityOfFourWheeler + 1
      console.log(slot)
      const slotupdate = await axios.post("/increaseparkingfourslot/"+localStorage.getItem("parkingLotId")+"/"+slot)
      console.log(slotupdate.data)
    }

    const res = await axios.post("/updatecheckout/"+id)
    console.log(res.data)

     if(res.status===201){
                  Swal.fire({
                    title: "Checked Out Successfully!",
                    icon: "success",
                    
                  });
        
                  navigate("/security/viewslotbooked")
                }
  }

  useEffect(() => {
    getAllSlotBooked();
  }, []);

// const updatePaymentStatus=async(id,status)=>{
//     setStatus=status
//     const res = await axios.put("/updatepaymentstatus/"+id,Status)
// }


  

  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Parking Slot Booked</h2>
            
            <div>
              <table className='table'>
                <thead className='table-dark text-center'>
                  <tr>
                    <th>Name</th>
                    <th>Vehicle Name</th>
                    <th>Vehicle Type</th>
                    <th>Vehicle No</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount Pay</th>
                    <th>Payment Method</th>
                    <th colSpan="2">Payment Status</th>
                    <th>Action</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    slots.map((slot)=>
                      // if(ownerId==lot.ownerId){
                        slot.checkout==false? (
                        <tr className='text-center'>
                        <td>{slot.parkingLotId.name}</td>
                        <td>{slot.vehicleId.name}</td>
                        <td>{slot.vehicleId.vehicleType}</td>
                        <td>{slot.vehicleId.registrationNum}</td>
                        <td>{slot.date}</td>
                        <td>{slot.startTime}</td>
                        <td>{slot.endTime}</td>
                        <td>{slot.price}</td>
                        <td>{slot.paymentMethod}</td>
                        <td><Link><button type='submit' onClick={()=>{changePaymentStatus(slot._id)}} className='btn btn-success' value="Completed">Completed</button></Link></td>
                        <td><Link><button type='submit' className='btn btn-warning'>Pending</button></Link></td>
                        <td><Link><button type='submit' onClick={()=>{checkout(slot._id)}} className='btn btn-danger'>CheckOut</button></Link></td>
                        
                      </tr>):null
                      // }
                    
                      
                      
        
                      
                    )
                    
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}

    </div>
  )
}
