import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./coomonCSS/Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'


export const Login = () => {

  const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm()

  const submitHandler= async(data)=>{
    const res = await axios.post("/users/login",data)

    console.log(res)
    console.log(res.data.data.name)
    
    if(res.status===500){
        toast.error('Invalid password or email', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                  });
      }
    if(res.status === 201){
      localStorage.setItem("role",res.data.data.role)
      localStorage.setItem("id",res.data.data._id)
      
      // console.log(localStorage.getItem("role"))
      if(data.role === localStorage.getItem("role")){
        if(localStorage.getItem("role")==="Customer"){
          localStorage.setItem("id",res.data.data._id)
          localStorage.setItem("role",res.data.data.role) 
          Swal.fire({
            title: "Login successfully :)",
            text: "Welcome to My Parking",
            icon: "success"
          });
          navigate("/user"); // Redirect to Login Page
        
        }
        if(localStorage.getItem("role")==="Parking Owner"){
          localStorage.setItem("id",res.data.data._id)
          localStorage.setItem("ownerId",res.data.data._id)
          localStorage.setItem("role",res.data.data.role)
          Swal.fire({
            title: "Login successfully :)",
            text: "Welcome to Parking Owner Panel",
            icon: "success"
          });
          navigate("/parkingowner"); // Redirect to parking owner Page
      
        }
        if(localStorage.getItem("role")==="Security"){

          localStorage.setItem("id",res.data.data._id)
          localStorage.setItem("securityId",res.data.data._id)

          localStorage.setItem("role",res.data.data.role)
          Swal.fire({
            title: "Login successfully :)",
            text: "Welcome to Security Panel",
            icon: "success"
          });
          
          navigate("/security"); // Redirect to security Page
      
        }
        if(localStorage.getItem("role")==="Admin"){
          localStorage.setItem("id",res.data.data._id)
          Swal.fire({
            title: "Login successfully :)",
            text: "Welcome Admin Panel",
            icon: "success"
          });
            navigate("/adminpanel"); // Redirect to admin Page
      
        }
      }
      if(data.role!=localStorage.getItem("role")){
        const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Invalid Role!",
                    text:"Please Enter correct role!"
                  });
      }
  }
  
      
  }

  
  const validationSchema={
    emailValidator:{
        required:{
            value:true,
            message:"email is required"
        }
    },
    passwordValidator:{
        required:{
            value:true,
            message:"password is required"
        }
    }

  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100 p-5'>
      <div className="row border rounded-5 bg-white shadow box-area">
        <div className="col-md-6 rounded-5 p-3 d-flex justify-content-center align-items-center flex-column left-box" style={{background:"#E8ECD7"}}>
          <div className="featured-image">
            <img src='/login.svg' alt="login" className='img-fluid' width={900}></img>
            
          </div>
          <h3>Be Verified</h3>
          <small>Join and get good experience in this platform</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center py-5">
            <div className='header-text mb-4 text-center'>
              <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="input-group w-100 mb-3">
                  
                
                <select {...register("role")} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                    <option value="select" disabled>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                    <option value="Security">Security</option>
                    <option value="Parking Owner">Parking Owner</option>
                </select>
                    
              </div>
              <div className="input-group mb-3">
      
                <input type="email" className='form-control form-control-lg bg-light fs-6 ' {...register("email",validationSchema.emailValidator)} id='email' placeholder='Email address'/>
              </div>
              <div className='text-danger'>
                <p>
                  {
                        errors.email?.message
                    }
                </p>
              
              </div>
              <div className="input-group mb-2">
      
                <input type="password" className='form-control form-control-lg bg-light fs-6' {...register("password",validationSchema.passwordValidator)} id='password' placeholder='Password '/>
              </div>
              <div className='text-danger'>
                <p>
                  {
                        errors.password?.message
                    }
                </p>
              
            </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className='form-check-input' id='form-check'/>
                  <label for="form-check" className='form-check-label'><small>Remember Me</small></label>
                </div>
                <div className="forgot">
                  <small><Link to="/forgotpassword">Forgot password?</Link></small>
                </div>
              </div>
              <div className="input-group mb-2">
                <input type="submit"  className='btn btn-success w-100 fs-6' value="Login"/>
              </div> 
              <div className="input-group mb-2">
                <button className='btn bg-light btn-dark text-dark w-100'><FontAwesomeIcon icon={faGoogle} /> Sign in with google</button>
              </div>  
              <div className="row">
                <small>Don't have a account? <Link to="/">Sign up</Link></small>
              </div>
            </form>
            <ToastContainer/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
