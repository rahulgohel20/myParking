import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

export const DisplaySlotBooked = () => {
    const [lot, setlot] = useState([]);
    const [slots, setslots] = useState([])
    const {register,handleSubmit} = useForm()


    

  const getAllLot = async ()=>{
    const res = await axios.get("/parkinglot/"+localStorage.getItem("id"))
    console.log(res.data)
    setlot(res.data.data)
  }

  useEffect(() => {
    getAllLot();
  }, []);

const deleteSlot=async()=>{

}

const submitHandler=async(data)=>{
    console.log(data)
    const stateId=data.stateId
    console.log(stateId)
    const cityId=data.cityId
    console.log(cityId)

    const areaId=data.areaId
        console.log(areaId)

    const lotId = data.parkingLotId
        console.log(lotId)

    const res = await axios.get("/parkingbook/"+lotId)
    console.log(res.data)
    setslots(res.data.data)
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Parking Slot Booked</h2>
            <div className='mb-5'>
                <form onSubmit={handleSubmit(submitHandler)}>
                        
                        <div className='container w-50 d-flex justify-content-center align-items-center  mb-3'>
                              <div className="col mb-3">
                                <select className="form-select" {...register("parkingLotId")}>
                                <option>SELECT LOT</option>
                                {lot?.map((lot) => (
                                    <option key={lot._id} value={lot._id}>{lot.name}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className='text-center container w-50 d-flex justify-content-center align-items-center'>
                            <input type="submit" value="Search" className='btn btn-success w-50'/>
                        </div>
                    </form>
            </div>
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
                    <th>Payment Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                   
                    slots.map((slot)=>{
                      // if(ownerId==lot.ownerId){
                        
                        return <tr className='text-center'>
                        <td>{slot.parkingLotId.name}</td>
                        <td>{slot.vehicleId.name}</td>
                        <td>{slot.vehicleId.vehicleType}</td>
                        <td>{slot.vehicleId.registrationNum}</td>
                        <td>{slot.date}</td>
                        <td>{slot.startTime}</td>
                        <td>{slot.endTime}</td>
                        <td>{slot.price}</td>
                        <td>{slot.paymentMethod}</td>
                        <td>{slot.paymentStatus}</td>
                      </tr>
                      // }
                      
                      
                      
        
                      
                    })
                    
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
