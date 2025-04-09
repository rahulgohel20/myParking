import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ResetPassword = () => {
    const token = useParams().token
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const submitHandler = async(data)=>{
        //resetpasseord api..
        const obj = {
            token:token,
            password:data.password,
            cpassword:data.cpassword
        }
        console.log(obj);
        
        const res = await axios.post("/user/resetpassword",obj)
        console.log(res.data)
        if(res.status===201){
          toast.success('Password Reset Successfully!', {
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
            navigate("/login"); // Redirect to Login Page
      }, 2000);
        }
        
            

    }
  return (
    
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100'>
      <div className="row border rounded-5 bg-white shadow box-area">
        <div className="rounded-5 p-5 d-flex justify-content-center align-items-center flex-column left-box" style={{background:"#E8ECD7"}}>
          <div>
            <h3>Reset Password</h3>
          </div>
          <div className='container w-50'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='input-group mb-3'>
                    <label className='fs-5 mb-2' htmlFor='npass'>New Password</label>
                    <input type='text' className='form-control w-100' id='npass' placeholder='Enter email' {...register("password")}/>
                </div>
                <div className='input-group mb-3'>
                    <label className='fs-5 mb-2' htmlFor='cpass'>Confirm Password</label>
                    <input type='text' className='form-control w-100' id='cpass' placeholder='Enter email' {...register("cpassword")}/>
                </div>
                <div className=' w-100 input-group'>
                    <input type='submit' className='btn btn-success w-100' value="Reset"/>
                </div>
            </form>
          </div>
          
        </div>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )} 
