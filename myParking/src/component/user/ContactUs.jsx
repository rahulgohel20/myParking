import React from 'react'
import { Footer } from '../../layouts/Footer'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ContactUs = () => {
    const {register,handleSubmit} = useForm()
    const navigate=useNavigate()
    const submitHandler=async(data)=>{
        const res = await axios.post("/addcontactus",data)
        console.log(res.data.data)
        if(res.status===201){
            Swal.fire({
                title: "Mesaage Sent successfully :)",
                text: "Thank You For Connection",
                icon: "success"
            });
            navigate("/user/contactus")
        }
    }
  return (
    <div className='container-fluid w-100' >
        <div className='container-fluid w-100 h-50 text-center'>
            <img src="/contactus2.jpg"  width={900} height={500} alt="contactus" />
        </div>
        <div style={{textAlign:"center"}}>
            <h1>Get Touch With Us!</h1>

        </div>
        <div className='container mt-5 p-5 rounded'style={{backgroundColor:"#E8ECD7"}}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control w-100" {...register("fullname")} placeholder='Full name'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" {...register("email")}  placeholder='Email' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile No</label>
                    <input type="tel" className="form-control" maxLength={10} {...register("mobile")}  placeholder='Mobile number' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Messages</label>
                    <textarea class="form-control" aria-label="With textarea" {...register("message")} placeholder='Messages...'></textarea>
                    
                </div>
                <div className='text-center'>
                    <input type="submit" className='btn btn-success w-50 mt-3' value="Send"/>
                </div>
            </form>
        </div>
    <Footer></Footer>
    </div>
  )
}
