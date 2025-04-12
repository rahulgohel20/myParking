import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBook, faBookOpenReader, faCheckToSlot, faDashboard, faEye, faGauge, faPersonMilitaryPointing, faUser, faUserCircle, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";

export const AdminSidebar = () => {
  //for closing sidebar...
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  

  
  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    
      <Header toggleSidebar={toggleSidebar} />

    
      <aside
        className={`app-sidebar bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <Link to="/adminpanel" className="brand-link text-white">
            <FontAwesomeIcon icon={faUserCircle
            } className="fa-lg fs-2 px-2"></FontAwesomeIcon>

            <span className="brand-text " style={{fontWeight:"900",fontFamily:"Papyrus, fantasy",color:"#9DC08B"}}>Admin</span>
          </Link>
        </div>

        <div
          className="fs-5"
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faDashboard} />
                  <p className="text-success">
                    Dashboard
                  </p>
                </Link>
                <hr className="text-light"/>
                <Link to="viewparkinglots" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faCheckToSlot} />
                  <p>
                    View Parking Lots
                  </p>
                </Link>
                <hr className="text-light"/>
                <Link to="parkingbook" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faBookOpenReader} />
                  <p>
                    View Slot Booked
                  </p>
                </Link>
                 <hr className="text-light"/>
                <Link to="viewparkingowner" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faUserTie} />
                  <p>
                    View Parking Owners
                  </p>
                </Link>
                <hr className="text-light"/>
                <Link to="viewcustomers" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faUsers} />
                  <p>
                    View Customers
                  </p>
                </Link>
                                <hr className="text-light"/>

                <Link to="viewsecurity" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faPersonMilitaryPointing} />
                  <p>
                    View Security
                  </p>
                </Link>
               
                
              </li>
              
              
            </ul>
          </nav>
          {/* <div>
          <FontAwesomeIcon icon={faUser} className="fa-lg px-2"/><span>Account</span>
        </div> */}
        </div>
        
      </aside>

      <main class="app-main">
        <Outlet></Outlet>
      </main>
    </>
  );
};