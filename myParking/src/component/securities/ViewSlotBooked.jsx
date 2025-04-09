import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const ViewSlotBooked = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [lots, setlots] = useState([])
    const [slots, setslots] = useState([])
    const [Status, setStatus] = useState("")
    const {register,handleSubmit} = useForm()


    const getAllStates = async () => {
    const res = await axios.get("/state/allstate");
    console.log(res.data)
    setStates(res.data.data);
  };

  const getCityByStateId = async (id) => {
    const res = await axios.get("/city/getcitybystate/" + id);
    setCities(res.data.data);
  };

  const getAreaByCityId = async (id) => {
    const res = await axios.get("/area/getareabycity/" + id);
    setAreas(res.data.data);
  };

  const getLotByAreaId = async (id) => {
    const res = await axios.get("/getlotbyarea/" + id);
    setlots(res.data.data);
  };

  useEffect(() => {
    getAllStates();
  }, []);

// const updatePaymentStatus=async(id,status)=>{
//     setStatus=status
//     const res = await axios.put("/updatepaymentstatus/"+id,Status)
// }

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

    const res = await axios.get("/showparkingbooked/"+stateId+"/"+cityId+"/"+areaId+"/"+lotId)
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
                        
                        <div className='row mb-3'>
                            <div className='col mb-3'>
                                <label className="form-label">Select State</label>
                                    <select
                                    className="form-select"
                                    {...register("stateId")}
                                    onChange={(event) => getCityByStateId(event.target.value)}
                                    >
                                    <option>SELECT STATE</option>
                                    {states?.map((state) => (
                                        <option key={state._id} value={state._id}>{state.name}</option>
                                    ))}
                                    </select>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Select City</label>
                                <select
                                className="form-select"
                                {...register("cityId")}
                                onChange={(event) => getAreaByCityId(event.target.value)}
                                >
                                <option>SELECT CITY</option>
                                {cities?.map((city) => (
                                    <option key={city._id} value={city._id}>{city.name}</option>
                                ))}
                                </select>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Select Area</label>
                                <select className="form-select" {...register("areaId")}
                                onChange={(event) => getLotByAreaId(event.target.value)}>
                                <option>SELECT AREA</option>
                                {areas?.map((area) => (
                                    <option key={area._id} value={area._id}>{area.name}</option>
                                ))}
                                </select>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Select Lot</label>
                                <select className="form-select" {...register("parkingLotId")}>
                                <option>SELECT LOT</option>
                                {lots?.map((lot) => (
                                    <option key={lot._id} value={lot._id}>{lot.name}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className='text-center w-100'>
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
                    <th colSpan="3">Payment Status</th>
                    
                    
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
                        <td><Link><button type='submit' className='btn btn-success' value="Completed">Completed</button></Link></td>
                        <td><Link><button type='submit' className='btn btn-warning'>Pending</button></Link></td>
                        <td><Link><button type='submit' className='btn btn-danger'>Failed</button></Link></td>

                        
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
