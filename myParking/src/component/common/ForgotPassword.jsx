import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ForgotPassword = () => {

    const {register,handleSubmit} = useForm()
    const submitHandler=async(data)=>{
        const res = await axios.post("/user/forgotpassword",data)
        console.log(res.data)
        if(res.status===201){
          toast.success('Reset link Sent Successfully!', {
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
        }
    }
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className="border rounded-5 bg-white shadow box-area">
        <div className="rounded-5 p-5 d-flex justify-content-center align-items-center flex-column left-box" style={{background:"#E8ECD7"}}>
          
          
          <div className='mb-5'>
            <h3>Forgot Password</h3>
          </div>
          <div className='mb-5'>
            <img src="/forgot-password.svg" alt="forgot" />
          </div>
          <div className='container w-50'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='input-group mb-3'>
                    <p>Forgot your password? Type in your email address in the form below to reset your password.</p>
                    <label className='fs-5 mb-2' htmlFor='email'>Email</label>
                    <input type='email' className='form-control w-100' id='email' placeholder='Enter email' {...register("email")}/>
                </div>
                <div className=' w-100 input-group'>
                    <input type='submit' className='btn btn-success w-100' value="Submit"/>
                </div>
            </form>
          </div>
          
        </div>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}
