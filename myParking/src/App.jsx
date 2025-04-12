// import { useState } from 'react'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './component/common/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Registration } from './component/common/Registration'
import axios from 'axios'
import { ParkingBooking } from './component/common/ParkingBooking'
import { UserProfile } from './component/user/UserProfile'
import UserDashBoard from './component/common/UserDashBoard'
import { DisplayUser } from './component/common/DisplayUser'
import { AddParkingLot } from './component/parkingLotOwner/AddParkingLot'
import { UserHome } from './component/user/UserHome'
import "./assets/adminIte.css";
import "./assets/adminIte.min.css";
import { Footer } from './layouts/Footer'
import { Navbar } from './component/user/Navbar'
import { Sidebar } from './layouts/Sidebar'
import { ViewParkingLot } from './component/parkingLotOwner/ViewParkingLot'
import { ToastContainer } from 'react-toastify'
import { ForgotPassword } from './component/common/ForgotPassword'
import { ResetPassword } from './component/common/ResetPassword'
import { DisplayParkingSlot } from './component/user/DisplayParkingSlot'
import { Vehicle } from './component/user/Vehicle'
import { DisplaySlotBooked } from './component/parkingLotOwner/DisplaySlotBooked'
import { UpdateParkingLot } from './component/parkingLotOwner/UpdateParkingLot'
import { SecuritySidebar } from './layouts/SecuritySidebar'
import { ViewSlotBooked } from './component/securities/ViewSlotBooked'
import { ViewChart } from './component/parkingLotOwner/ViewChart'
import { ContactUs } from './component/user/ContactUs'
import PrivateRoutes from './hooks/PrivateRoutes'
import { DisplayParkingLot } from './component/securities/DisplayParkingLot'
import { AddSecurity } from './component/securities/AddSecurity'
import { AdminSidebar } from './layouts/AdminSidebar'
import { ViewCustomers } from './component/admin/ViewCustomers'
import { ViewParkingOwner } from './component/admin/ViewParkingOwner'
import { ViewSecurity } from './component/admin/ViewSecurity'
import { Payment } from './component/user/Payment.Jsx'
import { AboutUs } from './component/user/AboutUs'
import { SuccessedBooked } from './component/securities/SuccessedBooked'
import { ViewParkingLots } from './component/admin/ViewParkingLots'
import { UpdateLot } from './component/admin/UpdateLot'
import { AdminHome } from './component/admin/AdminHome'
import { ViewBooking } from './component/admin/ViewBooking';
import { UpdateSecurity } from './component/admin/UpdateSecurity';

function App() {

  axios.defaults.baseURL = "http://localhost:2008"
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/login" || location.pathname === "/") {
  //     document.body.className = ""; // Remove the unwanted class for login and signup
  //   } else {
  //     document.body.className =
  //       "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
  //   }
  // }, [location.pathname]);

  // const [count, setCount] = useState(0)

  return (


    <div className='app-wrapper'>
      
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Registration></Registration>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
       <Route path='/resetpassword/:token' element={<ResetPassword></ResetPassword>}></Route>
        
        <Route path='/userdashboard' element={<UserDashBoard></UserDashBoard>}/>
        
        <Route path='' element={<PrivateRoutes></PrivateRoutes>}>

        
          <Route path='/user' element={<Navbar></Navbar>}>
            <Route path='userProfile' element={<UserProfile></UserProfile>}/>
            <Route path='displayslot/parkingbook' element={<ParkingBooking></ParkingBooking>}></Route>
            <Route path='displayslot/vehicle' element={<Vehicle></Vehicle>}/>
            <Route path='' element={<UserHome></UserHome>}/>
            <Route path='aboutUs' element={<AboutUs></AboutUs>}></Route>
            <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
            <Route path='displayslot' element={<DisplayParkingSlot></DisplayParkingSlot>}/>
          </Route>
          
        </Route>
        <Route path='' element={<PrivateRoutes></PrivateRoutes>}>
          <Route path="/parkingowner" element={<Sidebar></Sidebar>}>

            <Route path='addparkinglot' element={<AddParkingLot></AddParkingLot>}/>
            <Route path = 'viewlots' element={<ViewParkingLot></ViewParkingLot>}></Route>
            <Route path='displayslotbooked' element={<DisplaySlotBooked></DisplaySlotBooked>}/>
            <Route path='updateparkinglot/:id' element={<UpdateParkingLot></UpdateParkingLot>}/>
            <Route path='viewcharts' element={<ViewChart></ViewChart>}></Route>
          </Route>
        </Route>
        <Route path='' element={<PrivateRoutes></PrivateRoutes>}>
          <Route path='security' element={<SecuritySidebar></SecuritySidebar>}>
              <Route path='addsecurity/:id' element={<AddSecurity></AddSecurity>}></Route>
              <Route path='viewslotbooked' element={<ViewSlotBooked></ViewSlotBooked>}></Route>
              <Route path='viewparkinglots' element={<DisplayParkingLot></DisplayParkingLot>}></Route>
              <Route path='successedbooked' element={<SuccessedBooked></SuccessedBooked>}></Route>
          </Route>
        </Route>
            <Route path='adminpanel' element={<AdminSidebar></AdminSidebar>}>
              <Route index element={<AdminHome></AdminHome>}></Route>
              <Route path='viewcustomers' element={<ViewCustomers></ViewCustomers>}></Route>
              <Route path='viewparkingowner' element={<ViewParkingOwner></ViewParkingOwner>}></Route>
              <Route path='viewsecurity' element={<ViewSecurity></ViewSecurity>}></Route>
              <Route path='viewparkinglots' element={<ViewParkingLots></ViewParkingLots>}></Route>
              <Route path='updatelot/:id' element={<UpdateLot></UpdateLot>}></Route>
              <Route path='updatesecurity/:id' element={<UpdateSecurity></UpdateSecurity>}></Route>
              <Route path='parkingbook' element={<ViewBooking></ViewBooking>}></Route>
            </Route>
        <Route path='' element={<PrivateRoutes></PrivateRoutes>}>
        </Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
