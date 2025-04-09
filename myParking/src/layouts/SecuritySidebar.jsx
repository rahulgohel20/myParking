import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBook, faEye, faGauge, faUser } from "@fortawesome/free-solid-svg-icons";

export const SecuritySidebar = () => {
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
          <Link to="/parkingbook" className="brand-link text-white">
            <FontAwesomeIcon icon={faGauge} className="fa-lg px-2"></FontAwesomeIcon>

            <span className="brand-text " style={{fontWeight:"900",fontFamily:"Papyrus, fantasy",color:"#9DC08B"}}>Security</span>
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
                
                <Link to="viewparkinglots" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faEye}/>
                  <p>
                    View Parking Lots
                  </p>
                </Link>
                <hr className="text-light"/>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="viewlots" className="nav-link active text-white">
                      <FontAwesomeIcon icon={faUser}/>
                      <p>
                        View My Profile
                      </p>
                    </Link>
                    <hr className="text-light"/>
                  </li>
                </ul>
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