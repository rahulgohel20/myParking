import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ViewCustomers = () => {
    const [customers, setcustomers] = useState([])
      
        const getAllCustomers = async () => {
        const res = await axios.get("/userbycustomer");
        console.log(res.data.data)
      
        setcustomers(res.data.data);
        console.log(customers)
    
      }
    
      const deleteLot =async(id)=>{
        Swal.fire({
          title: "Are you sure to delete this Parking Lot?",
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
        getAllCustomers();
      }, []);
  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Customers</h2>
            <div>
              <table className=' table table-light table-striped table-hover '>
                <thead className=' text-center'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    customers.map((cust)=>{
                      // if(ownerId==lot.ownerId){
                        return <tr className='text-center'>
                        <td>{cust.name}</td>
                        <td>{cust.email}</td>
                        <td>{cust.gender}</td>
                        <td>{cust.mobile}</td>
                        
                        

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
