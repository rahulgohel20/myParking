import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCheckCircle, FaShoppingCart, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUsers } from 'react-icons/fa';

export const AdminHome = () => {
    const [totaluser, settotaluser] = useState()
    const [totalbooked, settotalbooked] = useState()
    const [totallot, settotallot] = useState()
    const [totalsecurity, settotalsecurity] = useState()

    const totalUsers = async()=>{
        const res = await axios.get("/totaluser")
        console.log(res.data)
        settotaluser(res.data.data)
    }
    const totalSlotBooked = async()=>{
        const res = await axios.get("/totalslotbooked")
        console.log(res.data)
        settotalbooked(res.data.data)
    }
    const totalParkingLots = async()=>{
        const res = await axios.get("/totalparkinglot")
        console.log(res.data)
        settotallot(res.data.data)
    }
    const totalSecurity = async()=>{
        const res = await axios.get("/totalsecurity")
        console.log(res.data)
        settotalsecurity(res.data.data)
    }
    useEffect(()=>{
        totalUsers(),totalSlotBooked(),totalParkingLots(),totalSecurity()
    })
  return (
     <div className="container mt-4">
        <div className='text-center mb-5'>
            <h1>Welcome Back, <span className='text-danger'>Admin</span></h1>
        </div>
      <div className="row mb-5 g-4 d-flex justify-content-center align-items-center">

        {/* Visitors Card */}
        <div className='col-md-3'>

          <div className="card shadow-sm border-0 d-flex flex-row align-items-center p-3">
            <div className="bg-primary text-white rounded p-3 d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
              <FaUsers size={28} />
            </div>
            <div className="ms-3">
              <small className="text-muted">Users</small>
              <h5 className="mb-0">{totaluser}</h5>
            </div>
          </div>
        </div>
    </div>
        
    <div className='row g-4 d-flex justify-content-center align-items-center'>
        
    
        {/* Subscribers Card */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 d-flex flex-row align-items-center p-3">
            <div className="bg-info text-white rounded p-3 d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
              <FaUserCheck size={28} />
            </div>
            <div className="ms-3">
              <small className="text-muted">Parking Lots</small>
              <h5 className="mb-0">{totallot}</h5>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 d-flex flex-row align-items-center p-3">
            <div className="bg-success text-white rounded p-3 d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
              <FaShoppingCart size={28} />
            </div>
            <div className="ms-3">
              <small className="text-muted">Total Slot Booked</small>
              <h5 className="mb-0">{totalbooked}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 d-flex flex-row align-items-center p-3">
            <div className="bg-success text-white rounded p-3 d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
              <FaUserCircle size={28} />
            </div>
            <div className="ms-3">
              <small className="text-muted">Security</small>
              <h5 className="mb-0">{totalsecurity}</h5>
            </div>
          </div>
        </div>
        

        {/* Order Card */}
        
    </div>
      </div>

  )
}
