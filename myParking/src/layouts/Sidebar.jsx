import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBook, faBookOpenReader, faCheckToSlot, faEye, faGauge, faUser } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
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
        className={`app-sidebar overflow-y-hidden bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <Link to="/parkingbook" className="brand-link text-white">
            <FontAwesomeIcon icon={faGauge} className="fa-lg px-2"></FontAwesomeIcon>

            <span className="brand-text " style={{fontWeight:"900",fontFamily:"Papyrus, fantasy",color:"#9DC08B"}}>Parking Owner</span>
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
                
                <Link to="addparkinglot" className="nav-link active text-decoration-none text-white">
                  <FontAwesomeIcon icon={faAdd}/>
                  <p>
                    ADD Parking Lot
                  </p>
                </Link>
                <hr className="text-light"/>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="viewlots" className="nav-link active text-white">
                      <FontAwesomeIcon icon={faCheckToSlot} />
                      <p>
                        View My Lot
                      </p>
                    </Link>
                    <hr className="text-light"/>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="displayslotbooked" className="nav-link active text-white">
                      <FontAwesomeIcon icon={faBookOpenReader} />
                      <p>
                        Slot Booked
                      </p>
                    </Link>
                    <hr className="text-light"/>
                  </li>
                </ul>
                {/* <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="viewcharts" className="nav-link active text-white">
                      <FontAwesomeIcon icon={faEye}/>
                      <p>
                        View Chart
                      </p>
                    </Link>
                    <hr className="text-light"/>
                  </li>
                </ul> */}
              </li>
              
              {/* <li className="nav-item">
                <Link to="displayslotbooked" className="nav-link text-white">
                  <FontAwesomeIcon icon={faBook}/>
                  <p>
                    Slot Booked
                  </p>
                </Link>
                <hr className="text-light"/>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li>
                </ul>
              </li> */}
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