import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./coomonCSS/Registration.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faMobile,faLock, faCheck, faUser, faUserTie, faPersonHalfDress } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Swal from 'sweetalert2'
export const Registration = () => {

    
    // const [verify, setverify] = useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate()
  //   const [states, setstates] = useState([]);
  // const [cities, setcities] = useState([]);
  // const [areas, setareas] = useState([]);
  
  // const getAllStates = async () => {
  //   const res = await axios.get("/state/allstate");
  //   console.log(res.data);
  //   setstates(res.data.data);
  // };

  // const getCityByStateId = async (id) => {
  //   //api...
  //   const res = await axios.get("/city/getcitybystate/" + id);
  //   console.log("city response...", res.data);
  //   setcities(res.data.data);
  // };

  // const getAreaByCityId = async (id) => {
  //   //alert(id)
  //   const res = await axios.get("/area/getareabycity/" + id);
  //   setareas(res.data.data);
  // };

  // useEffect(() => {
  //   getAllStates();
  // }, []);
    const submitHandler=async(data)=>{
        // console.log(data.data.password)
        // console.log(data.data.cpassword)
        
        if(data.password != data.cpassword){
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
            title: "Password do not matched!"
          });
        }

        // console.log(data.image[0])
        

        // const formData = new FormData();
        // formData.append("name",data.name);
        // formData.append("email",data.email);
        // formData.append("password",data.password);
        // formData.append("cpassword",data.cpassword);
        // formData.append("mobile",data.mobile);
        // formData.append("stateId",data.stateId);
        // formData.append("cityId",data.cityId);
        // formData.append("areaId",data.areaId);
        // formData.append("image",data.image[0]);
        // formData.append("role",data.role);
        const res = await axios.post("/users",data)
        console.log(res)
        console.log(res.data)
        data.roleId = res.data.data._id
        // if(res.data.data.password != res.data.data.cpassword){
        //   alert("Password is not matched")
        // }
        if(res.status===500){
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
            title: "User already exists!"
          });
          navigate("/login")
        }
        if(res.status===201){
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
            icon: "success",
            title: "Registration Successfully"
          });
          navigate("/login");
        }
        
        console.log(data.cpassword)
        
    }
    
   
    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required"
            },
        },
        mobileValidator:{
            required:{
                value:true,
                message:"mobile number is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"mobile number is not valid"
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
            <img src='/registration.svg' alt="login" className='img-fluid' width={900}></img>
            
          </div>
          <h3>Welcome to My Parking</h3>
          <small>Join and get good experience in this platform</small>
        </div>
        <div className="col-md-6 right-box px-4">
          <div className="row align-items-center py-5">
            <div className='header-text mb-4 text-center'>
              <h1>Registration</h1>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
                
            <div className="input-group mb-3">
                
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-md' icon={faUser} /></span><input type="text" {...register("name",validationSchema.nameValidator)} className='form-control form-control-lg bg-light fs-6' id='name' placeholder='Full name'/>
              
              
                
            </div>              
            <div className='text-danger'>
              <p>
                {
                      errors.name?.message
                  }
              </p>
              
            </div>
            <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faEnvelope} /></span><input type="email" {...register("email",validationSchema.emailValidator)} className='form-control form-control-lg bg-light fs-6 ' id='email' placeholder='Email address'/>
                 
            </div>
            <div className='text-danger'>
              <p>
                {
                      errors.email?.message
                  }
              </p>
              
            </div>
            
              {/* <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label class="form-check-label" for="flexRadioDefault2">
                 Female
                </label>
              </div> */}
            <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faUserTie} /></span>
              <select {...register("role")} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                  <option value="select" >Select Role</option>
                    <option value="Customer">Customer</option>
                    <option value="Security">Security</option>
                    <option value="Parking Owner">Parking Owner</option>
              </select>
                 
            </div>
            <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faPersonHalfDress} /></span>
              <select {...register("gender")} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                  <option value="select" >Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
              </select>
                 
            </div>
            {/* <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faUserTie} /></span>
              <select {...register("stateId")}
                onChange={(event) => {
                  getCityByStateId(event.target.value);
                }} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                    <option value="select" >Select State</option>
                    {states?.map((state) => {
                        return <option value={state._id}>{state.name}</option>;
                      })}
              </select>
                 
            </div> */}
            {/* <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faUserTie} /></span>
              <select {...register("cityId")}
                onChange={(event) => {
                  getAreaByCityId(event.target.value);
                }} className='form-select form-select-lg bg-light fs-6 ' id='role'>
                    <option value="select" >Select City</option>
                    {cities?.map((city) => {
                        return <option value={city._id}>{city.name}</option>;
                      })}
              </select>
                 
            </div> */}
            {/* <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faUserTie} /></span>
              <select {...register("areaId")}
                className='form-select form-select-lg bg-light fs-6 ' id='role'>
                    <option value="select" >Select Area</option>
                    {areas?.map((area) => {
                        return <option value={area._id}>{area.name}</option>;
                      })}
              </select>
                 
            </div> */}
            <div className="input-group mb-3">
    
                <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faMobile} /></span><input type="tel" {...register("mobile",validationSchema.mobileValidator)} className='form-control form-control-lg bg-light fs-6 ' id='mobile' placeholder='Mobile number' maxLength="10"/>
                 
            </div>
            <div className='text-danger'>
              <p>
                {
                      errors.mobile?.message
                  }
              </p>
              
            </div>
            <div className="input-group mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faLock} /></span><input type="password" {...register("password",validationSchema.passwordValidator)} className='form-control form-control-lg bg-light fs-6' id='password' placeholder='Create password '/>
                
            </div>
            <div className='text-danger'>
              <p>
                {
                    errors.password?.message
                }
              </p>
              
            </div>
            <div className="input-group mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faCheck} /></span><input type="password" {...register("cpassword",validationSchema.passwordValidator)} className='form-control form-control-lg bg-light fs-6' id='cpassword' placeholder='Confirm password '/>
                
            </div>
            <div className='text-danger'>
              <p>
             
                      {errors.cpassword?.message
                  }
              </p>
              
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className='form-check-input' id='form-check'/>
                <label for="form-check" className='form-check-label'><small>Remember Me</small></label>
              </div>

            </div>
            {/* <div className="input-group w-100 mb-3">
    
              <span className='input-group-text'><FontAwesomeIcon className='m-2 fa-lg' icon={faEnvelope} /></span><input type="file" {...register("image")} className='form-control form-control-lg bg-light fs-6 ' id='file'/>
                 
            </div> */}
            <div className="input-group mb-3">
              <input type="submit" className='btn btn-success w-100 fs-6' value="Register"/>
            </div> 
            {/* <div className="input-group mb-2">
              <button className='btn bg-light btn-dark text-dark w-100'><FontAwesomeIcon icon={faGoogle} /> Sign in with google</button>
            </div>   */}
            <div className="row">
              <small>Already have an account? <Link to="/login">Sign In</Link></small>
            </div>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
      
    </div>
  )
}
