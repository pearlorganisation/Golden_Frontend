// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const HomeSubject = () => {
//   const dispatch = useDispatch();

//   const { notes } = useSelector((state) => state.notes);

//   console.log(notes);
//   return (
//     <div className=" bg-black text-white">
//       <h1 className="text-5xl flex justify-center items-center">
//         {" "}
//         Our Subjects
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 container mx-auto my-10 px-4">
//         {Array.isArray(notes) &&
//           notes?.slice(0, 6).map((note) => (
//             <div className="" key={note._id}>
//               <img
//                 src={note?.subject?.banner[0]?.secure_url}
//                 className="lg:h-64"
//               />
//               <h1> {note.name}</h1>
//             </div>
//           ))}
//       </div>

//       <div className="flex justify-end items-center px-10 py-2">
//         <Link to={`/notes`} className="px-4 py-2 bg-yellow-700 rounded-md">
//           {" "}
//           View All{" "}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HomeSubject;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Razorpay from "react-razorpay/dist/razorpay";
import { getAllnotes } from "../features/notes/notesAction";
import axiosInstance from "../axiosInstance";

const HomeSubject = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  const { userInfo, isUserLoggedIn } = useSelector((state) => state.auth);

  const handlePay = async (speciality) => {
    try {
      console.log(speciality, "meri speiclaity");
      const selectedPdf = speciality.name;
      const amount = speciality?.subject?.discountedPrice || 0;

      const pdfUrl = speciality?.subject?.pdf?.secure_url;
      const buyerName = userInfo.name;
      const buyerNumber = userInfo.phoneNumber;
      const buyerEmail = userInfo.email;
      // Create an order on the server
      const { data: order } = await axiosInstance.post(
        `order/create`,
        {
          price: amount,
          buyerName: buyerName,
          buyerEmail: buyerEmail,
          buyerNumber: buyerNumber,
          title: selectedPdf,
        }
      );

      const Orderoptions = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID, // Razorpay key
        amount: order.order.amount, // Amount in smallest currency unit (paise)
        currency: order.order.currency,
        name: buyerName,
        description: `Payment for ${speciality.name} `,
        image: "your_logo_url", // Optional, replace with your logo URL
        order_id: order.order.id, // Razorpay Order ID
        handler: async function (response) {
          console.log("res", response);
          try {
            // Verify the payment
            const verifyResponse = await axiosInstance.post(
              `order/verify`,
              {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                buyerName: buyerName,
                buyerEmail: buyerEmail,
                buyerNumber: buyerNumber,
                pdfUrl: pdfUrl, // in future change it with the url of the pdf
              }
            );

            if (verifyResponse.data.success) {
              alert("Payment verified successfully!");
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Failed to verify payment. Please contact support.");
          }
        },
        prefill: {
          name: {buyerName},
          email: {buyerEmail},
          contact: {buyerNumber},
        },
        theme: {
          color: "#3399cc",
        },

        upi: {
          flow: "intent",
        },
      };

      const rzp = new Razorpay(Orderoptions);
      rzp.on("payment.failed", (response) => {
        alert("Payment failed: " + response.error.description);
      });

      // Open Razorpay payment window
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  const navigate = useNavigate();
  /**logic managing whether to move to next page for payment for the logged out user or just get the payment from this page for the pdf if the user is logged in */
  const logicFunction = (speciality) => {
    if (isUserLoggedIn) {
      handlePay(speciality);
    } else if (!isUserLoggedIn) {
      return navigate(`/buy-pdf/${speciality?._id}`);
    }
  };

  useEffect(()=>{
    dispatch(getAllnotes())
  },[dispatch])
  return (
    <div className="bg-black text-white">
      <h1 className="text-5xl flex justify-center items-center">
        Our Subjects
      </h1>

      <div className="container mx-auto my-10 px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {Array.isArray(notes) &&
            notes?.slice(0, 6).map((note) => (
              <SwiperSlide key={note._id} className="flex justify-center">
                <div className="bg-black rounded-lg p-4 mb-3">
                  <img
                    src={note?.subject?.banner[0]?.secure_url}
                    className="lg:h-64 w-full object-contain rounded-md"
                    alt={note.name}
                  />
                  <h1 className="mt-2 text-center">{note.name}</h1>
                  <button
                    className="bg-gradient-to-r from-yellow-600 to-black text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-yellow-700 hover:to-black transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center mt-4 w-full "
                    onClick={() => {
                      logicFunction(note);
                    }}
                  >
                    <span className="mr-2">Buy Now</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="flex justify-end items-center px-10 py-2">
        <Link to={`/notes`} className="px-4 py-2 bg-yellow-700 rounded-md">
          View All
        </Link>
      </div>
    </div>
  );
};

export default HomeSubject;
