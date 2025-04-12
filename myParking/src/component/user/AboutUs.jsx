import React from 'react'
import "./userCSS/AboutUs.css"
import { Footer } from '../../layouts/Footer'
import { FaChartLine } from 'react-icons/fa';
import { FaGlobeAsia } from 'react-icons/fa';

export const AboutUs = () => {
    const expertise = [
    { label: 'White Label Model', percent: 95 },
    { label: 'Government/Smart Cities', percent: 95 },
    { label: 'Events', percent: 90 },
    { label: 'Recreational Facilities', percent: 85 },
    { label: 'Residential & Commercial Buildings', percent: 75 },
  ];
  return (
    <div>
        <div className='container-fluid p-5 aboutus mh-100'>
            
            <div className='text-center text-white '>
                <h1 className='pb-0'>About My Parking</h1>
            </div>
            
        </div>
        <div className="container py-5">
      {/* Header */}
      <div className="text-start">
        <p className="text-uppercase fw-bold text-danger">About Us</p>
        <h1 className="fw-bold">
          India's Award Winning <br />
          First Public <span className="text-danger">My Parking</span>
        </h1>

        {/* Decorative Line */}
        <div className="dot-line position-relative mb-4"></div>
      </div>

      {/* Description */}
      <p className="lead text-muted">
        <strong>My Parking</strong> is an Award Winning Smart Parking Application where the consumer can conveniently
        search, book and park their vehicle for a specific time and venue with a few clicks of fingertips.
      </p>
      <p className='lead text-muted'>
        <span className='text-danger'>My Parking</span> System is an innovative solution designed to optimize parking management in urban areas and commercial establishments. This system aims to reduce parking-related congestion, save time for drivers, and maximize the utilization of parking spaces. By integrating real-time parking data, user-friendly interfaces, and intelligent allocation algorithms, the platform ensures a seamless experience for both parking lot operators and users.

      </p>

      {/* Mission */}
      <div className="d-flex align-items-start mt-5">
        <div className="me-3 icon-circle">
          <FaChartLine className="text-danger text-3xl fs-1" />
        </div>
        <div>
          <h5 className="fw-bold">Our Mission</h5>
          <p className="text-muted mb-0">
            To make the parking operations hassle-free and provide safe and secure parking to the commuters.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="d-flex align-items-start mt-4">
        <div className="me-3 icon-circle">
          <FaGlobeAsia className="text-danger text-3xl fs-1" />
        </div>
        <div>
          <h5 className="fw-bold">Our Vision</h5>
          <p className="text-muted mb-0">
            To help address the problem of parking in the city more effectively, in turn reducing environmental concerns and congestion.
          </p>
        </div>
      </div>
    </div>
    <div className="container my-5 p-4 bg-white shadow rounded">
      <div className="row align-items-center">
        {/* Left Column: Image or Icons */}
        <div className="col-md-6 text-center">
          <img
            src="/aboutUsIcon.png" // replace with your local or hosted image path
            alt="Parking Icons"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Column: Text and Bars */}
        <div className="col-md-6 mt-4 mt-md-0">
          <p className="text-uppercase text-danger fw-semibold">Our Expertise</p>
          <h2 className="fw-bold">All In One <br /> Parking Solutions</h2>

          <div className="dot-line mb-3"></div>

          <p className="text-muted">
            We are scattered into different segments/areas of parking like Municipal Corporations, Smart Cities,
            Airports, Ports, Railways, Bus Stations, Malls, Hotels, Hospitals, Residentials, Commercial Buildings,
            Clubs, Stadiums, Government and Private Parking lots etc...
          </p>

          {/* Progress Bars */}
          {expertise.map((item, idx) => (
            <div key={idx} className="mb-3">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">{item.label}</span>
                <span className="fw-bold">{item.percent}%</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: `${item.percent}%` }}
                  aria-valuenow={item.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <Footer></Footer>
    </div>
  )
}
