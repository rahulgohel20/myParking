import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export const UpdateSecurity = () => {

    const id =useParams().id
    const [security, setsecurity] = useState([])
    const { register, handleSubmit,formState:{errors}, setValue} = useForm();
    const navigate = useNavigate()


    const validationSchema = {
    nameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            }
        },
        contactValidator:{
          required:{
                value:true,
                message:"Mobile number is required*"
            },  
          //regex
            pattern:{
                //8
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact is not valid*"
            }

        },
        ageValidator:{
            required:{
                value:true,
                message:"Age is required*"
            },
            min:{
                value:18,
                message:"min age 18*"
            },
            max:{
                value:60,
                message:"max age 60*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            }
        }

  }

  const getSecurity = async()=>{

    const res = await axios.get("/security/" + id)
    console.log(res.data)
    const sec = res.data.data
    
    setValue("name",sec.name)
    setValue("email",sec.email)
    setValue("age",sec.age)
    setValue("mobile",sec.mobile)
     


  }

useEffect(()=>{
    getSecurity()
})

const submitHandler = async (data) => {
    
    console.log(data)
    const res = await axios.put("/updatesecurity/" + id, data);
    // localStorage.setItem("parkingLotId",res.data.data._id)
    console.log(res.data);
    
    if(res.status===201){
          
        Swal.fire({
          title: "Security Updated!",
          icon: "success",
          
        });
          
        navigate("/adminpanel/viewsecurity"); // Redirect to Login Page
      
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Update Security</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder='Full Name...' {...register("name",validationSchema.nameValidator)} />
                <span style={{color:"red"}}>{errors.name?.message}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="textarea" className="form-control" placeholder='Email...' {...register("email",validationSchema.emailValidator)} />
                <span style={{color:"red"}}>{errors.email?.message}</span>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="tel" className="form-control" maxLength={10} placeholder='Mobile...' {...register("mobile",validationSchema.contactValidator)} />
                <span style={{color:"red"}}>{errors.mobile?.message}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="tel" className="form-control" placeholder='Age' {...register("age",validationSchema.ageValidator)} />
                <span style={{color:"red"}}>{errors.age?.message}</span>
              </div>
              <div className='text-center'>
                <input type="submit" className="btn btn-success w-50" value="Send"/>
                
              </div>      
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
