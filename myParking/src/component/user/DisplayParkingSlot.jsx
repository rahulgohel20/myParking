import React, { useEffect, useState } from 'react'
import { Footer } from '../../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const DisplayParkingSlot = () => {
    const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [slots, setslots] = useState([])


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

  const { register, handleSubmit } = useForm();

  const lotIdHandler=(id)=>{
    
    localStorage.removeItem("parkingLotId")
    localStorage.setItem("parkingLotId",id)
  }
  

  const submitHandler=async(data)=>{
    console.log(data)
    const stateId=data.stateId
    const cityId=data.cityId
    const areaId=data.areaId
    const res = await axios.get("/searchparkinglot/"+stateId+"/"+cityId+"/"+areaId)
    localStorage.setItem("stateId",stateId)
    localStorage.setItem("cityId",cityId)
    localStorage.setItem("areaId",areaId)
    console.log(res.data)
    setslots(res.data.data)
  }

  return (
    <div className='container-fluid'>
        <div className='row p-3 d-flex justify-content-center align-items-center'>
            <div className='col'>
                <img src="/displayslot-img.jpg" width={800} height={600} alt="slot-img" />
            </div>
            <div className='col me-5 '>
                <div>
                    <div className='mb-5'>
                            <img src="/location.png" alt="location-img" width={100} className='me-5' /><span className='fs-2'>Choose Location And Find Slot</span>
                        </div>
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
                                <select className="form-select" {...register("areaId")}>
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
            </div>
        </div>
        <div>
            <div className='row mx-1 gap-5 d-flex justify-content-center align-items-center'>
            {
                slots.map((slot)=>{
                    return <div className=" shadow-lg rounded px-3 py-3" style={{width:"20rem"}}>
                        <div className="col">
                            <img src="/parkinglot.jpg" className='p-3' alt="parkinglot" width={300} />
                            <h5 className="card-title fw-bold">{slot.name}</h5><br/>
                            <h6 className="card-title text-muted">{slot.title}</h6><br/><br/>
                            <p className="card-text">2 Wheeler Slot Available : <span className='fw-bold'>{slot.totalCapacityOfTwoWheeler} <span className='text-success'>Avl</span></span></p>
                            <p className="card-text">4 Wheeler Slot Available : <span className='fw-bold'>{slot.totalCapacityOfFourWheeler} <span className='text-success'>Avl</span></span></p>

                            <Link to="vehicle" className="card-link btn btn-success float-end" onClick={()=>{lotIdHandler(slot._id)}}>Book</Link>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
        
        <Footer></Footer>
    </div>
  )
}
