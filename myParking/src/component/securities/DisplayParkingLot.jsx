import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export const DisplayParkingLot = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [lots, setlots] = useState([])
    const {register,handleSubmit} = useForm()
     const navigate = useNavigate()

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

    const res = await axios.get("/searchparkinglot/"+stateId+"/"+cityId+"/"+areaId)
    console.log(res.data)
    setlots(res.data.data)
  }

//   const validationSchema = {
//     ageValidator:{
//         required:{
//             value:true,
//             message:"age is required"
//         },
//         min:{
//             value:18,
//             message:"minimum age is 18"
//         },
//         max:{
//             value:60,
//             message:"maximum age is 60"
//         },
//         pattern:{
//             value:/[0-9]/,
//             message:"please enter in valid format"
//         }
                
//     },
//     contactValidator:{
//             required:{
//                 value:true,
//                 message:"contact is required"
//             },
//             pattern:{
//                 value:/[6-9]{1}[0-9]{9}/,
//                 message:"please enter in valid format"
//             },
//             maxLength:{
//                 value:10,
//                 message:"max is 10"
//             }
//         }
//   }

  

  return (
    <div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col">
                <div className="card p-4 shadow">
                    <h2 className="text-center mb-4">Search and Get Parking Lot</h2>
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
                                        >
                                        <option>SELECT AREA</option>
                                        {areas?.map((area) => (
                                            <option key={area._id} value={area._id}>{area.name}</option>
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
                            <th>Lot Name</th>
                            <th>Title</th>
                            <th>Owner Name</th>
                            <th>Mobile No</th>
                            <th>Capacity Of Bike</th>
                            <th>Capacity of Car</th>
                            <th>Information</th>
                            <th>Hourly Charge for Bike</th>
                            <th>Hourly Charge for Car</th>
                            <th>Parking Type</th>
                            <th></th>
                            
                            
                        </tr>
                        </thead>
                        <tbody>
                        {
                            lots.map((lot)=>{
                            // if(ownerId==lot.ownerId){
                                
                                return <tr className='text-center'>
                                <td>{lot.name}</td>
                                <td>{lot.title}</td>
                                <td>{lot.ownerId.name}</td>
                                <td>{lot.ownerId.mobile}</td>
                                <td>{lot.totalCapacityOfTwoWheeler}</td>
                                <td>{lot.totalCapacityOfFourWheeler}</td>
                                <td>{lot.otherInfo}</td>
                                <td>{lot.HourlyChargeTwoWheeler}</td>
                                <td>{lot.HourlyChargeFourWheeler}</td>
                                <td>{lot.parkingType}</td>
                                <td><Link to={`/security/addsecurity/${lot._id}`}><button type='submit' className='btn btn-success py-1 p-3' data-toggle="modal" data-target="#joinParkingSecurity" value="Join">Join</button></Link></td>
                                
                                
                                
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
      {/* <div className="modal fade" id="joinParkingSecurity" tabindex="-1" role="dialog" aria-labelledby="Join" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Join as Security</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <div>
                    <form></form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="tel" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Join From</label>
                        <input type="date" className="form-control"  />
                    </div>
                </div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
            </div>
        </div>
        </div> */}
    </div>


   

  )
}
