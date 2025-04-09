import { BorderColor, Dataset, PieChart } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, PointElement } from "chart.js";

Chart.register(CategoryScale,LinearScale,BarElement,ArcElement,PointElement)

export const ViewChart = () => {

    const [setslotBookedChart, setsetslotBookedChart] = useState({
        label:[],
        datasets:[
            {
                label:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                data:[],
                BorderColor:"black",
                borderWidth:3
            }
        ]
    })

    const getSlotBooked = async()=>{
        const res = await axios.get("/parkingbook")
        console.log(res.data.data)
        
        setsetslotBookedChart({
            label:res.data.data?.map((book)=>book.userId.name || "N/A"),
            datasets:[
                {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    
                    data:res.data.data?.map((book)=>book.price || 0),
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                     borderWidth:2,
                      backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                }
            ]
        })

        
    }


    useEffect(()=>{
        getSlotBooked()
    },[])


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className='container-fluid'>
            <h2 className="text-center mb-4 fs-1">Data Charts</h2>

        </div>
        <div>
            <div>
                <Pie data={setslotBookedChart}></Pie>
            </div>
        </div>
      </div>
      
    </div>
  )
}
