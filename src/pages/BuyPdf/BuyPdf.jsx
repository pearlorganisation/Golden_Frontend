import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import Razorpay from "react-razorpay/dist/razorpay";
import axiosInstance from "../../axiosInstance"; // base url is the current used url
import { getSubjectById } from "../../features/Subject/SubjectAction";

const BuyPdf = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleSubject } = useSelector((state) => state.subjects);
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(getSubjectById(id));
      setLoading(false);
    };
    fetchData();
  }, [id, dispatch]);

  console.log(singleSubject, "Single Subject");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  /**-------------this contains the data of user when he is not logged in and enters his details-------------------*/
  const buyerName = watch("name");
  const buyerNumber = watch("mobileNumber");
  const buyerEmail = watch("email");

  /**---------------------disabler handle for the buy button----------------*/
  let disable = true;
  if (buyerName && buyerNumber && buyerEmail) {
    disable = false;
  } else {
    disable = true;
  }

  console.log(
    "-----------------buyer details",
    buyerName,
    buyerEmail,
    buyerNumber
  );

  const isAll = false;
  /**---------------------payment handler--------------------*/
  const handlePay = async (note) => {
    try {
      const selectedPlan = note.name;
      const amount = note?.discountedPrice || note?.price;

      const pdfUrl = note?.pdf?.secure_url;

      // Create an order on the server
      const { data: order } = await axiosInstance.post(`order/create`, {
        price: amount,
        title: note.name,
        buyerName: buyerName,
        buyerNumber: buyerNumber,
        buyerEmail: buyerEmail,
      });

      const Orderoptions = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID, // Razorpay key
        amount: order.order.amount, // Amount in smallest currency unit (paise)
        currency: order.order.currency,
        name: note.name,
        description: `Payment for ${note.name} `,
        image: "your_logo_url", // Optional, replace with your logo URL
        order_id: order.order.id, // Razorpay Order ID
        handler: async function (response) {
          console.log("res", response);
          try {
            // Verify the payment
            const verifyResponse = await axiosInstance.post(`order/verify`, {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              buyerName: buyerName,
              buyerEmail: buyerEmail,
              buyerNumber: buyerNumber,
              pdfUrl: pdfUrl,
              isAll: isAll,
            });

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
          name: buyerName,
          email: buyerEmail,
          contact: buyerNumber,
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

  /**----------------all useeffects-----------------*/

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <h1> Loading Shubham</h1>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Section */}
            <div className="relative">
              {singleSubject?.banner[0]?.secure_url && (
                <div className="h-56 lg:h-72 overflow-hidden bg-gray-200 relative">
                  <img
                    src={singleSubject?.banner[0].secure_url}
                    alt="Subject Banner"
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h1 className="text-xl font-bold text-white mb-2">
                  {singleSubject?.name}
                </h1>
              </div>
            </div>

            <div className="p-8">
              {/* Price Card */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm text-blue-600 font-semibold">
                      Special Price
                    </p>
                    <div className="flex items-baseline space-x-3 mt-1">
                      <span className="text-xl md:text-3xl font-bold text-gray-900">
                        ₹{singleSubject?.discountedPrice}
                      </span>
                      <span className="text-base md:text-xl text-gray-500 line-through">
                        ₹{singleSubject?.price}
                      </span>
                      <span className="text-sm font-medium text-yellow-700 bg-white px-2 py-1 rounded-full">
                        {Math.round(
                          ((singleSubject?.price -
                            singleSubject?.discountedPrice) /
                            singleSubject?.price) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Pages</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {singleSubject?.pages}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  About this Subject
                </h2>
                <p className="text-gray-200 leading-relaxed">
                  {singleSubject?.description}
                </p>
              </div>

              {/* User Details Form */}
              {!isUserLoggedIn && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold text-black mb-4">
                    Your Details
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        id="number"
                        {...register("mobileNumber", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Please enter a valid 10-digit number",
                          },
                        })}
                        className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your mobile number"
                      />
                      {errors.mobileNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.mobileNumber.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              )}

              {/* Buy Button */}
              <button
                onClick={() => handlePay(singleSubject)}
                disabled={disable}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  disable
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white transform hover:-translate-y-0.5"
                }`}
              >
                {disable ? "Please Fill All Details" : "Purchase Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPdf;
