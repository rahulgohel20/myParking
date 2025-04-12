import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ViewParkingLots = () => {
    const [lots, setlots] = useState([])
    const navigate = useNavigate()
  
    const getAllLots = async () => {
    const id = localStorage.getItem("id")
    const res = await axios.get("/parkinglot");
    console.log(res.data.data)
  
    setlots(res.data.data);
    console.log(lots)

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
    getAllLots();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Parking Lots</h2>
            <div>
              <table className='table'>
                <thead className='table-dark text-center'>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>4 Wheeler Capacity</th>
                    <th>2 Wheeler Capacity</th>
                    <th>Parking Type</th>
                    <th>Other Info</th>
                    <th>Hourly Charge 2 Wheeler</th>
                    <th>Hourly Charge 4 Wheeler</th>
                    <th colSpan="2">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    lots.map((lot)=>{
                      // if(ownerId==lot.ownerId){
                        return <tr className='text-center'>
                        <td>{lot.name}</td>
                        <td>{lot.title}</td>
                        <td>{lot.totalCapacityOfFourWheeler}</td>
                        <td>{lot.totalCapacityOfTwoWheeler}</td>
                        <td>{lot.parkingType}</td>
                        <td>{lot.otherInfo}</td>
                        <td>{lot.HourlyChargeTwoWheeler}</td>
                        <td>{lot.HourlyChargeFourWheeler}</td>
                        
                        <td><Link to={`/adminpanel/updatelot/${lot._id}`}><input type='submit' className='btn btn-warning' value="Update"/></Link></td>
                        <td><Link className="btn btn-danger" onClick={()=>{deleteLot(lot._id)}}>Delete</Link></td>

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
