import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ViewParkingOwner = () => {
    const [parkingOwner, setparkingOwner] = useState([])
      
        const getAllParkingOwners = async () => {
        const res = await axios.get("/userbyparkingowner");
        console.log(res.data.data)
      
        setparkingOwner(res.data.data);
        console.log(parkingOwner)
    
      }
    
      const deleteLot =async(id)=>{
        Swal.fire({
          title: "Are you sure to delete this Parking Owner?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if(result.isConfirmed) {
            const del = await axios.delete("/deleteparkinglot/" + id)
            console.log(del.data)
            getAllLots()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
        
      }
      useEffect(() => {
        getAllParkingOwners();
      }, []);
  return (
    <div className=" ">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Parking Owner</h2>
            <div>
              <table className=' table table-light table-striped table-hover '>
                <thead className=' text-center'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    
                    <th colSpan="2">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    parkingOwner.map((owner)=>{
                      // if(ownerId==lot.ownerId){
                        return <tr className='text-center'>
                        <td>{owner.name}</td>
                        <td>{owner.email}</td>
                        <td>{owner.gender}</td>
                        <td>{owner.password}</td>
                        <td>{owner.mobile}</td>
                        
                        
                        <td><Link to={`/parkingowner/updateparkinglot/${owner._id}`}><input type='submit' className='btn btn-warning' value="Update"/></Link></td>
                        <td><Link className="btn btn-danger" onClick={()=>{deleteLot(owner._id)}}>Delete</Link></td>

                      </tr>
                      // }
                    
                      
                      
        
                      
                    })
                    
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
