import axios from "axios";
import React, { useState } from "react";

export const Payment = () => {
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
  return (
    <div>
      <button
        onClick={handleCreateOrder}
        sx={{ width: "100%", marginTop: "20px" }}
      >
        Pay Now
      </button>
    </div>
  );
};