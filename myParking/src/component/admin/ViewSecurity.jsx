import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ViewSecurity = () => {
    const [security, setsecurity] = useState([])
      
        const getAllSecurity = async () => {
        const res = await axios.get("/security");
        console.log(res.data.data)
      
        setsecurity(res.data.data);
        console.log(security)
    
      }
    
      const deleteLot =async(id)=>{
        Swal.fire({
          title: "Are you sure to delete this Security?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if(result.isConfirmed) {
            const del = await axios.delete("/deletesecurity/" + id)
            console.log(del.data)
            getAllSecurity()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
        
      }
      useEffect(() => {
        getAllSecurity();
      }, []);
  return (
    <div className=" ">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Security</h2>
            <div>
              <table className=' table table-light table-striped table-hover '>
                <thead className=' text-center'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th colSpan="2">Action</th>

                    
                  </tr>
                </thead>
                <tbody>
                  {
                    security.map((security)=>{
                      // if(ownerId==lot.ownerId){
                        return <tr className='text-center'>
                        <td>{security.name}</td>
                        <td>{security.email}</td>
                        <td>{security.gender}</td>
                        <td>{security.mobile}</td>
                        <td><Link to={`/adminpanel/updatesecurity/${security._id}`}><input type='submit' className='btn btn-warning' value="Update"/></Link></td>
                        <td><Link className="btn btn-danger" onClick={()=>{deleteLot(security._id)}}>Delete</Link></td>

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
