import React from 'react'
import "../user/userCSS/UserHome.css"
import { Footer } from '../../layouts/Footer'
import { Link } from 'react-router-dom'

export const UserHome = () => {
  return (
    <div>
        
        <div className='container-fluid home p-5 mh-100'>
            <div className='row'>
                <div className='col w-75'>
                    <p style={{fontSize:"80px"}}>“Park Smart, Live More” & “Find Your Spot with Ease”</p>
                    <p style={{fontSize:"20px",fontWeight:"00px"}}>With offices in the India, we aim to bring intelligent technology and integrated parking services to the world.</p>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-success btn-lg px-4 py-2' value="Explore">Explore</button>

                        </div>
                        <div className='col'>
                            <Link to="displayslot">
                                <button className='btn btn-outline-dark btn-lg px-4 py-2' value="Explore">Book Slot</button>

                            </Link>

                        </div>
                    </div>
                </div>
                <div className='col w-25'>
                    <h1></h1>
                </div>
            </div>

        </div>
        <div className='my-5' style={{textAlign:"center"}}>
            <h1>We provide parking solutions <br/>across multiple sectors</h1>
                <div className="row my-5">
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Councils & Municipalities</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Hospitals & Medical Centres</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Corporate WorkPlace</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Places of Worship</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Restaurants & Pubs</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-outline-success btn-lg px-5 py-3 w-75'>Supermarkets</button>
                    </div>
                </div>
        </div>
        <div className='row container-fluid w-100'>
            <div className='col d-flex justify-content-center'>
                <img src="/book-image.svg"  alt="book-image" />
            </div>
            <div className='col d-flex justify-content-start'>
                <div className='w-100'>
                    <h1 className='text-danger fs-1'>"</h1>
                    <div style={{backgroundColor:"#ACD3A8", fontFamily:"Papyrus, fantasy", fontWeight:"700"}} className='rounded-circle p-5'>
                        <h2>"Since introducing Smart Parking and their car park management systems to our site, we have had a considerable reduction in car park abuse, meaning genuine customers can now find a parking space. "</h2>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
