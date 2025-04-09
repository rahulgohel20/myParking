import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";


export const UpdateParkingLot = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);


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
  

  const { register, handleSubmit, setValue} = useForm();
  const navigate = useNavigate()
  const id = useParams().id
//   const [getLot, setgetLot] = useState([])

useEffect(() => {
    getAllStates(),getParkingLot();
  }, []);
  const getParkingLot = async()=>{

    const getlot = await axios.get("/displayparkinglot/" + id)
    const lot = getlot.data.data
    
    setValue("name",lot.name)
    setValue("title",lot.title)
    setValue("totalCapacityOfTwoWheeler",lot.totalCapacityOfTwoWheeler)
    setValue("totalCapacityOfFourWheeler",lot.totalCapacityOfFourWheeler)
    setValue("otherInfo",lot.otherInfo)
    setValue("parkingType",lot.parkingType)
    setValue("HourlyChargeTwoWheeler",lot.HourlyChargeTwoWheeler)
    setValue("HourlyChargeFourWheeler",lot.HourlyChargeFourWheeler)
    setValue("latitude",lot.latitude)
    setValue("longitude",lot.longitude) 


  }

  const submitHandler = async (data) => {
    data.ownerId = localStorage.getItem("id");
    console.log(data)
    const res = await axios.put("/updateparkinglot/" + id, data);
    // localStorage.setItem("parkingLotId",res.data.data._id)
    console.log(res.data);
    
    if(res.status===201){
          
        Swal.fire({
          title: "Parking Lot Updated!",
          icon: "success",
          
        });
          
        navigate("/parkingowner/viewlots"); // Redirect to Login Page
      
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Update Parking Lot</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="textarea" className="form-control" {...register("title")} />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Total Capacity of Two Wheeler</label>
                <input type="tel" className="form-control" {...register("totalCapacityOfTwoWheeler")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Total Capacity of Four Wheeler</label>
                <input type="tel" className="form-control" {...register("totalCapacityOfFourWheeler")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Other Information</label>
                <input type="textarea" className="form-control" {...register("otherInfo")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Hourly Charge Two Wheeler</label>
                <input type="tel" className="form-control" {...register("HourlyChargeTwoWheeler")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Hourly Charge Four Wheeler</label>
                <input type="tel" className="form-control" {...register("HourlyChargeFourWheeler")} />
              </div>
              <div className="mb-3">
                
                <label className="form-label">Parking Type</label>
                <select {...register("parkingType")} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                  <option value="select" >Parking Type</option>
                  <option value="Road">Road</option>
                  <option value="Ground">Ground</option>
                  <option value="Building">Building</option>
                </select>
                               
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
                <label className="form-label">Select Area</label>
                <select className="form-select" {...register("areaId")}>
                  <option>SELECT AREA</option>
                  {areas?.map((area) => (
                    <option key={area._id} value={area._id}>{area.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Latitude</label>
                <input type="tel" className="form-control" {...register("latitude")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Longitude</label>
                <input type="tel" className="form-control" {...register("longitude")} />
              </div>
              <input type="submit" className="btn btn-success w-100" value="Update"/>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};