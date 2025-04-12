import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const SuccessedBooked = () => {

    const [slots, setslots] = useState([])
    const getAllSlotBooked = async () => {
    const res = await axios.get("/parkingbook/"+localStorage.getItem("parkingLotId"));
    console.log(res.data)
    setslots(res.data.data);
  };
  useEffect(() => {
      getAllSlotBooked();
    }, []);
  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Successed Slot Booked</h2>
            
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
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    slots.map((slot)=>
                      // if(ownerId==lot.ownerId){
                        slot.paymentStatus==="Completed"? (
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
