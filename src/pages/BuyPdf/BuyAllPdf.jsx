import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../../features/Subject/SubjectAction";
import { useForm } from "react-hook-form";
import Razorpay from "react-razorpay/dist/razorpay";
import axios from "axios";
import { baseURL } from "../../axiosInstance";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import TextAnimation from "../../components/TextAnimation";

const BuyAllPdf = () => {
  const plans = [
    {
      title: "Golden Med Elite Plan",
      price: "₹2999/6 months",
      description: "6 Months Subscription",
      features: [
        {
          text: "Full offline access to all Golden Med Notes PDFs for all subjects",
          icon: <FaAward />,
        },
        // {
        //   text: "Online access to integrated system-wise PDFs",
        //   icon: <FaCheckCircle />,
        // },
        {
          text: "Ability to annotate and edit the downloaded PDFs",
          icon: <FaCheckCircle />,
        },
        {
          text: "Exclusive 1:1 personalized guidance via WhatsApp chat for 6 months",
          icon: <FaCheckCircle />,
        },
        // {
        //   text: "Access to active group discussions for collaborative learning",
        //   icon: <FaCheckCircle />,
        // },
        // {
        //   text: "One monthly test with 50 high-yield questions",
        //   icon: <FaAward />,
        // },
      ],
      keyFeatures: [
        "Offline access to PDFs",
        "Personalized WhatsApp guidance",
        // "Active group discussions",
        // "Monthly high-yield test",
      ],
      button: "Get Golden With Elite",
      highlight: true,
    },
  ];

  const dispatch = useDispatch();
  const { subject } = useSelector((state) => state.subjects);
  const { isUserLoggedIn, userInfo } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  /** getting all the pdf urls from the subject object */
  let allPdfUrl = [];
  if (subject) {
    subject?.map((sub) => allPdfUrl.push(sub?.pdf?.secure_url));
  }

  console.log("---------all urls", allPdfUrl);
  /** just for backend */
  const isAll = true;
  /**-------------------------- */

  /** to store the details of the user buying the pdf */
  let finalBuyerName;
  let finalBuyerEmail;
  let finalBuyerNumber;

  /** values of user details from the form */
  let formBuyerName = watch("name");
  let formBuyerEmail = watch("email");
  let formBuyerPhone = watch("phone");

  if (isUserLoggedIn && userInfo) {
    finalBuyerName = userInfo?.name;
    finalBuyerEmail = userInfo?.email;
    finalBuyerNumber = userInfo?.phoneNumber;
  } else if (!isUserLoggedIn) {
    finalBuyerName = formBuyerName;
    finalBuyerEmail = formBuyerEmail;
    finalBuyerNumber = formBuyerPhone;
  }

  console.log(
    "final buyer is",
    finalBuyerName,
    finalBuyerNumber,
    finalBuyerEmail
  );
  /** preparing user data for what details to use when he is logged in and what details to get from form when he is logged out */

  let disable = true;
  if (finalBuyerName && finalBuyerEmail && finalBuyerNumber) {
    disable = false;
  } else {
    disable = true;
  }

  const handlePayAllPdf = async (allPdfUrl) => {
    try {
      // console.log(note, "meri speiclaity");
      const packageName = "All Notes";
      const amount = 2999;

      // Create an order on the server
      const { data: order } = await axios.post(`${baseURL}order/create`, {
        price: amount,
        title: packageName,
        buyerName: finalBuyerName,
        buyerNumber: finalBuyerNumber,
        buyerEmail: finalBuyerEmail,
      });

      const Orderoptions = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID, // Razorpay key
        amount: order.order.amount, // Amount in smallest currency unit (paise)
        currency: order.order.currency,
        name: packageName,
        description: `Payment for 2999 Package`,
        image: "your_logo_url", // Optional, replace with your logo URL
        order_id: order.order.id, // Razorpay Order ID
        handler: async function (response) {
          console.log("res", response);
          try {
            // Verify the payment
            const verifyResponse = await axios.post(`${baseURL}order/verify`, {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              buyerName: finalBuyerName,
              buyerEmail: finalBuyerEmail,
              buyerNumber: finalBuyerNumber,
              pdfUrl: allPdfUrl, // for sending all the url
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
          name: finalBuyerName,
          email: finalBuyerEmail,
          contact: finalBuyerNumber,
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

  useEffect(() => {
    dispatch(getAllSubjects());
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <TextAnimation
            text="Choose Your Plan"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="text-4xl sm:text-5xl font-extrabold capitalize mb-10 text-yellow-600"
          />
        </header>

        {/* Pricing Plans Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col border rounded-xl shadow-lg p-6 w-72 ${
                plan.highlight ? "border-purple-600" : "border-gray-200"
              } transition-all duration-300 transform hover:scale-105`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 transform w-60 text-center -translate-x-1/2 bg-purple-300 text-purple-700 font-semibold px-6 py-2 text-sm rounded-full uppercase shadow-xl">
                  {plan.title}
                </div>
              )}

              <p className="text-2xl font-bold text-gray-800 mt-10">
                {plan.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              <button
                className={`mt-6 px-6 py-3 text-sm font-medium rounded-lg ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border border-purple-600 text-purple-600 hover:bg-purple-100"
                } transition-all`}
              >
                {plan.button}
              </button>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-800 mt-4 font-medium">
                Key Features
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                {plan.keyFeatures.map((keyFeature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-black">✓</span> {keyFeature}
                  </li>
                ))}
              </ul>
              {/* <a
              href="#"
              className="text-sm text-purple-600 underline mt-4 block hover:text-purple-700"
            >
              View all features
            </a> */}
            </div>
          ))}
        </div>
      </div>

      {/**----------form section-----------*/}
      {!isUserLoggedIn && (
        <div className="w-full px-4 py-8 bg-gray-50">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">
              Fill the Details for continuing with the purchase
            </h1>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-md rounded-lg px-4 py-6 sm:px-6 lg:px-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder="Enter your name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center w-full mt-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 h-12 rounded-md shadow-sm">
        <button
          onClick={() => handlePayAllPdf(allPdfUrl)}
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
      <h1 className="text-yellow-700 text-4xl mt-6 mb-8">
        {" "}
        NOTES INCLUDED IN THE BUNDLE
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(subject) &&
          subject?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {item.banner?.[0]?.secure_url && (
                <div
                  className="lg:px-10 lg:py-10 md:px-16 md:py-16 px-20 py-20 relative w-full h-96 overflow-hidden rounded-lg bg-gray-100 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.banner[0].secure_url})`,
                  }}
                  aria-label={item.name}
                ></div>
              )}

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pages:</span>
                    <span className="font-medium">{item.pages}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <div className="text-right">
                      <span className="line-through text-gray-500 mr-2">
                        ₹{item.price}
                      </span>
                      <span className="text-green-600 font-semibold">
                        ₹{item.discountedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div> */}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(subject) &&
          subject?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Banner Image */}
              {item.banner?.[0]?.secure_url && (
                <div
                  className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden rounded-lg bg-pink-600"
                  aria-label={item.name}
                >
                  <div
                    className="h-full  bg-contain bg-center bg-no-repeat bg-black"
                    style={{
                      backgroundImage: `url(${item.banner[0].secure_url})`,
                    }}
                  ></div>
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pages:</span>
                    <span className="font-medium">{item.pages}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <div className="text-right">
                      <span className="line-through text-gray-500 mr-2">
                        ₹{item.price}
                      </span>
                      <span className="text-yellow-700 font-semibold">
                        ₹{item.discountedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuyAllPdf;
