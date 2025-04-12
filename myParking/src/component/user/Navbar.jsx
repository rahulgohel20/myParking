import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const Navbar = () => {
  const navigate=useNavigate()
  const userLogout=()=>{
    localStorage.removeItem("id")
    localStorage.removeItem("role")
    Swal.fire({
          title: "Logout Successfully!",
          text:"Thank you for visit, ",
          iconHtml: '<img src="./logout.jpg" width="100" height="100">',
          
        });
    navigate("/login")
  }

  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className='px-5'>
            <Link to="/user"><img src='/myparking_logo.png' alt='logo' width={100}></img></Link>
        </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/user">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="aboutUs">About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contactus">Contact us</Link>
      </li>
      
    </ul>
  </div>
  <ul className='navbar-nav '>

      <li className="nav-item me-5">
                  <button className="btn btn-danger " onClick={userLogout}><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> LOGOUT</button>
                </li>
  </ul>
</nav>
<Outlet></Outlet>
</div>
  )
}
