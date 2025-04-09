import React, { useEffect, useState } from 'react'
import { Footer } from '../../layouts/Footer'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Vehicle = () => {
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const [getVehicle, setgetVehicle] = useState([])

    const submitHandler=async(data)=>{
        data.userId = localStorage.getItem("id")
        const res = await axios.post("/addvehicle",data)
        localStorage.setItem("vehicleId",res.data.data._id)
        console.log(res.data)

        if(res.status===201){
          toast.success('Vehicle Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          setTimeout(() => {
            navigate("/user/displayslot/parkingbook"); // Redirect to Login Page
      }, 2000);
        }
    }
    const getvehicleById = async()=>{
        const res = await axios.get("/getvehicles/"+localStorage.getItem("id"))
        console.log(res.data.data)
        setgetVehicle(res.data.data)
      }
      const bookSlot=(id,type)=>{
        localStorage.setItem("vehicleId",id)
        localStorage.setItem("vehicleType",type)
        navigate("/user/displayslot/parkingbook")
      }
    useEffect(()=>{
      
      getvehicleById()
    })

  return (
<div className=' mt-5'>
  <div className='container w-50 rounded p-5'style={{backgroundColor:"#E8ECD7"}}>
    <div className='text-center mb-5' style={{fontFamily:"Gill Sans Extrabold, sans-serif"}}>
        <h1>Add Your Vehicle</h1>

    </div>
    <div className='container w-100'>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
                <label className="form-label">Vehicle Name</label>
                <input type="text" className="form-control w-100" {...register("name")} placeholder='Vehicle name'/>
              </div>
            <div className="mb-3">
                <label className="form-label">Registration No</label>
                <input type="text" className="form-control" {...register("registrationNum")} placeholder='Registration no' />
              </div>
            <div className="w-100 mb-3">
                
                <label className="form-label">Vehicle Type</label>

                <select className='form-select form-select-lg bg-light fs-6 ' {...register("vehicleType")} id='vehicle-type'>
                    <option value="select" >Select Role</option>
                    <option value="2 Wheeler">2 Wheeler</option>
                    <option value="4 Wheeler">4 Wheeler</option>
                    <option value="SUV">SUV</option>
                </select>
                    
            </div>
            <div>
                <input type="submit" className='btn btn-success w-100 mt-3' value="Add"/>
            </div>
        </form>
    </div>
    <ToastContainer></ToastContainer>
  </div>
  <div className='mt-5'>
    <div style={{textAlign:"center"}}>
      <h1>Use Can Also Choose From Your Privous Added Vehicle</h1>
    </div>
    <div className='mt-5'>
      <table className='container p-5 text-center table table-light table-striped'>
        <thead>
          <tr>
            <th>Vehicle Name</th>
            <th>Registration No.</th>
            <th>Vehicle Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
             getVehicle.map((veh)=>{
              return <tr>
                <td>{veh.name}</td>
                <td>{veh.registrationNum}</td>
                <td>{veh.vehicleType}</td>
                <td><button type='submit' className='btn btn-success' onClick={()=>{bookSlot(veh._id,veh.vehicleType)}}>Book</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  <Footer></Footer>
</div>
  )
}
