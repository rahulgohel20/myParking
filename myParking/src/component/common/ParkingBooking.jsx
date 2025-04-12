import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { Footer } from '../../layouts/Footer'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const ParkingBooking = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [from, setfrom] = useState('')
  const [to, setto] = useState('')
  const [parkingCharge, setparkingCharge] = useState(null);
  const [lot, setlot] = useState([])
  const [twoWheelerSlotAvl, settwoWheelerSlotAvl] = useState(0)
  const [fourWheelerSlotAvl, setfourWheelerSlotAvl] = useState(0)
  const [TwoWheelerBookStatus, setTwoWheelerBookStatus] = useState(false)
  const [FourWheelerBookStatus, setFourWheelerBookStatus] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null);
  const handleCreateOrder = async () => {
    try {
      const order = await axios.post("/payment/create_order",
        {
          amount: 1,
          currency: "INR",
          receipt: "receipt_order_123",
        }
      );

      setOrderDetails(order.data);
      displayRazorpay(order.data);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (orderData) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const user = await axios.get("/users/"+localStorage.getItem("id"))
    console.log(user.data)
    const options = {
      key: "rzp_test_Rvw64YFpVeyrZN",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "My Parking",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: async function (response) {
        const res = await axios.post(
          "/payment/verify_order",
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }
        );

        if (res.data.status === "success") {
          //database order table:
          //orderId,
          //rporderid
          //paymentid
          //amount
          //statusc: sucess
          alert("Payment verified successfully!");
        } else {
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: user.data.data.mobile,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    
    if (endTime) {
      calculateTimeDifference(e.target.value, endTime);
    }
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    if (startTime) {
      calculateTimeDifference(startTime, e.target.value);
    }
  };

  const calculateTimeDifference = async(start,end) => {

    if (!start || !end) {
      setparkingCharge(null);
      return;
    }

    const lotres = await axios.get("/displayparkinglot/"+localStorage.getItem("parkingLotId"))
    console.log(lotres.data)
    setlot(lotres.data.data)
    const vehicleres = await axios.get("/vehicles/"+localStorage.getItem("vehicleId"))
    console.log(vehicleres.data)

    // Convert time inputs to Date objects
     const startDate = new Date(`1970-01-01T${start}:00`);
     setfrom(start)
     console.log(from)
    const endDate = new Date(`1970-01-01T${end}:00`);
    setto(end)
    console.log(to)
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDate - startDate;

    if (differenceInMilliseconds < 0) {
      alert('End time must be later than start time');
      return;
    }

    // Convert the difference into hours and minutes
    const hours = Math.floor(differenceInMilliseconds / 1000 / 60 / 60);
    // const minutes = Math.floor((differenceInMilliseconds / 1000 / 60) % 60);


    if(vehicleres.data.data.vehicleType === "2 Wheeler"){
      console.log(lotres.data.data.HourlyChargeTwoWheeler)
      const price = hours * lotres.data.data.HourlyChargeTwoWheeler
      settwoWheelerSlotAvl(lotres.data.data.totalCapacityOfTwoWheeler)
      setparkingCharge(price.toFixed(2));
      setTwoWheelerBookStatus(true)
    }
    if(vehicleres.data.data.vehicleType === "4 Wheeler"){
      console.log(lotres.data.data.HourlyChargeFourWheeler)
      const price = hours * lotres.data.data.HourlyChargeFourWheeler
      setfourWheelerSlotAvl(lotres.data.data.totalCapacityOfFourWheeler)

      setparkingCharge(price.toFixed(2));
      setFourWheelerBookStatus(true)
    }
     
    
    };
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const submitHandler=async(data)=>{
        data.userId=localStorage.getItem("id")
        data.parkingLotId=localStorage.getItem("parkingLotId")
        data.vehicleId=localStorage.getItem("vehicleId")
        data.startTime = from
        data.endTime = to
        data.stateId = localStorage.getItem("stateId")
        data.cityId = localStorage.getItem("cityId")
        data.areaId = localStorage.getItem("areaId")
        data.price = parkingCharge

        
        const res = await axios.post("/parkingbook",data)
        console.log(res)
        console.log(res.data)
        if(res.status===200){
          Swal.fire({
              title: "Slot Booked Successfully!",
              icon: "success",
              
            });
            navigate("/user/displayslot"); 
  
            
          
          if(TwoWheelerBookStatus){
            
            lot.totalCapacityOfTwoWheeler = twoWheelerSlotAvl - 1
            console.log(lot.totalCapacityOfTwoWheeler)
            const TwoUpdateres = await axios.post("/updateparkingtwoslot/"+localStorage.getItem("parkingLotId"),lot)
            console.log(TwoUpdateres.data)
          }
          if(FourWheelerBookStatus){
            lot.totalCapacityOfFourWheeler = fourWheelerSlotAvl - 1
            console.log(lot.totalCapacityOfFourWheeler)
            const FourUpdateres = await axios.post("/updateparkingfourslot/"+localStorage.getItem("parkingLotId"),lot)
            console.log(FourUpdateres.data)
          }
        }
    }
    
  return (
    <div>
      
      <div style={{textAlign:"center"}}>
          <img src='/addlot.jpg' width={1000} height={500}></img>
        </div>
        <div className='row '>
          <div className='col ' style={{textAlign:"center"}}>
            <h1>Book Your Slot<br></br>And Feel Relax</h1>
            <img src='/parking-slot.jpg' alt='slot' width={300}></img>
          </div>
        <div className='col container-fluid w-100'>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
                <label for="floatingInput">Date</label>
                <input type="date" className="form-control w-50" {...register("date")} id="floatingInput" placeholder="choose date"/>
            </div>
            
            <div className='row w-50'>
              <div className="col mb-3">
                <label for="floatingPassword">Start Time</label>
                <input type="time" className="form-control w-100" value={startTime} onChange={handleStartTimeChange}   id="floatingPassword"/>
              </div>
              <div className="col mb-3">
                  <label for="floatingInput">End Time</label>
                  <input type="time" className="form-control w-100" value={endTime} onChange={handleEndTimeChange}   id="floatingInput"/>
              </div>
              
            </div>

            {/* <div className='row w-50' >
              <div className="col mb-3">
                <label for="floatingPassword">Start Time</label>
                <input type="text" className="form-control w-100" value={from} name='startTime'  {...register("startTime")}   id="floatingPassword" />
              </div>
              <div className="col mb-3">
                  <label for="floatingInput">End Time</label>
                  <input type="text" className="form-control w-100" value={to} name='endTime'  {...register("endTime")}   id="floatingInput" />
              </div>
              
            </div> */}
            
              <div className="mb-3">
                <label for="floatingPassword">Price</label>
                <input type="text" className="form-control w-50" disabled value={parkingCharge ? `$${parkingCharge}` : ''} {...register("price")} id="floatingPassword"/>
            </div>
            
            
            {/* <div className="mb-3">
                <label for="floatingInput">Payment Method</label>
                <input type="text" className="form-control w-50" {...register("paymentMethod")} id="floatingInput" placeholder="payment method"/>
            </div> */}
            
              {/* onClick={handleCreateOrder} */}
            <div className='text-center w-50 mb-5 '>
                <button
                  className='btn btn-primary w-100'
                >
                  Book
                </button>

            </div>
        </form>
        </div>
        </div>
        
        <ToastContainer></ToastContainer>
        <Footer></Footer>
    </div>
  )
}
