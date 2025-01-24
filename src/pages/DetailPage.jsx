import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllnotes } from "../features/notes/notesAction";
import axios from "axios";
import Razorpay from "react-razorpay/dist/razorpay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../features/Auth/AuthaAction";

// import { Pagination } from "swiper";

const DetailPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [globalDuration, setGlobalDuration] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState(0);
  const [page, setPage] = useState(1);

  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const { notes, pagination, loading } = useSelector((state) => state.notes);

  /**---userInfo---*/
  const { userInfo, isUserLoggedIn } = useSelector((state) => state.auth);

  console.log(pagination, "my pagination");

  useEffect(() => {
    dispatch(getAllnotes({ page: 1 }));
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        // Trigger fetch for the next page
        if (pagination?.next && !isFetching) {
          setIsFetching(true);
          dispatch(getAllnotes({ page: pagination.next }))
            .then(() => setIsFetching(false))
            .catch(() => setIsFetching(false));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, pagination, isFetching]);

  // const handlePageclick = (newPage) => {
  //   if (newPage > 0 && newPage <= pagination.pages.length) {
  //     setPage(newPage);
  //   }
  // };

  const specialties = notes || [];
  const content = specialties.reduce((acc, speciality) => {
    acc[speciality.name] = {
      title: speciality?.name,
      pages: speciality?.subject?.pages,
      price: speciality?.subject?.discountedPrice,
      image: speciality?.subject?.banner[0]?.secure_url,
      description: speciality?.subject?.description,
    };
    return acc;
  }, {});

  console.log(specialties, "my specialties");

  // const selectMonth = ["1month", "6month"];
  // const Month = {
  //   "1month": { rupees: 399 },
  //   "6month": { rupees: 1499 },
  // };
  // const [selectedOptions, setSelectedOptions] = useState({});

  // useEffect(() => {
  //   if (specialties.length) {
  //     setSelectedOptions(
  //       specialties.reduce((acc, speciality) => {
  //         acc[speciality.name] = "1month";
  //         return acc;
  //       }, {})
  //     );
  //   }
  // }, [specialties]);

  // const handleSelectChange = (speciality, value) => {
  //   setSelectedOptions((prevState) => ({
  //     ...prevState,
  //     [speciality]: value,
  //   }));
  // };

  // const handleGlobalDurationChange = (duration) => {
  //   setGlobalDuration(duration);
  //   setSelectedOptions(() =>
  //     specialties.reduce((acc, speciality) => {
  //       acc[speciality.name] = duration;
  //       return acc;
  //     }, {})
  //   );
  // };

  const handlePay = async (speciality) => {
    try {
      console.log(speciality, "meri speiclaity");
      const selectedPdf = speciality.name;
      const amount = speciality?.subject?.discountedPrice || 0;
      const buyerName = userInfo.name;
      const buyerNumber = userInfo.phoneNumber;
      const buyerEmail = userInfo.email;
      // Create an order on the server
      const { data: order } = await axios.post(
        "http://localhost:5000/order/create",
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
            const verifyResponse = await axios.post(
              "http://localhost:5000/order/verify",
              {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                buyerName: buyerName,
                buyerEmail: buyerEmail,
                buyerNumber: buyerNumber,
                pdfUrl:
                  "https://res.cloudinary.com/dapjyizvj/raw/upload/v1734943843/uploads/reev5wluktdww2c0jqd3.pdf", // in future change it with the url of the pdf
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
          name: "Anjali",
          email: "anjali@gmail.com",
          contact: "909086098",
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
  return (
    <>
      <div className="flex flex-col lg:flex-row ">
        {/* Sidebar */}
        <div
          className={`lg:w-1/5 bg-gray-100 border-r lg:block ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <h2 className=" text-xl font-bold px-4  py-12 md:py-2">
            {" "}
            Categories
          </h2>
          <ul className="space-y-2 px-4">
            {specialties.map((item) => (
              <li
                key={item?.id}
                className={`cursor-pointer p-2 rounded ${
                  selectedSpeciality === item.name
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-200"
                }`}
                onClick={() => setSelectedSpeciality(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden p-2 bg-blue-500 text-white fixed top-24 left-4 z-50 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoIosClose /> : <button> Categories </button>}
        </button>

        {/* Content Section */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Specialty Overview */}
          {content[selectedSpeciality] != undefined && (
            <div className="bg-black text-white px-6 rounded-md h-auto lg:min-h-max">
              <div className="flex flex-row gap-12">
                <img
                  src={content[selectedSpeciality]?.image || selectedSpeciality}
                  className="lg:w-72 w-56 h-[80%]"
                />
                <div className="flex flex-col gap-4 mt-12">
                  <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-4">
                    {content[selectedSpeciality]?.title || selectedSpeciality}
                  </h1>

                  <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">
                    Pages:{" "}
                    {content[selectedSpeciality]?.pages || selectedSpeciality}
                  </h1>

                  <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">
                    Price: Rs.{" "}
                    {content[selectedSpeciality]?.price || selectedSpeciality}
                  </h1>

                  <h1 className="underline hidden md:block"> Description </h1>
                  <p className="hidden md:block text-base lg:text-lg mt-4">
                    {content[selectedSpeciality]?.description ||
                      "Details about this specialty will appear here."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Global Filter for Duration
        <div className="mt-8">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Global Duration Filter:
          </label>
          <select
            className="border border-gray-300 rounded-md w-full p-3 text-gray-700 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={globalDuration}
            onChange={(e) => handleGlobalDurationChange(e.target.value)}
          >
            <option value="">Select Duration</option>
            {selectMonth.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div> */}

          {/* Specialties PDF Plans Section */}
          <div className="mt-10 flex items-center justify-center flex-col">
            <div className="text-xl lg:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 px-6 py-4 mb-6 rounded-lg shadow-lg">
              PDF Plans
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
              {Array.isArray(specialties) &&
                specialties.map((speciality) => (
                  <div
                    key={speciality.id}
                    className="bg-white shadow-lg rounded-md p-6 max-w-[300px] h-[520px]"
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4 min-h-14">
                      {speciality.name}
                    </h3>
                    {/* {speciality?.subject?.banner[0]?.secure_url && (
                      <div>
                        <img
                          src={speciality.subject.banner[0].secure_url}
                          alt={speciality.name}
                          className="w-full h-64 object-cover rounded-md mb-4"
                        />
                      </div>
                    )} */}

                    {Array.isArray(speciality?.subject?.banner) &&
                      speciality.subject.banner.length > 0 && (
                        <div>
                          <Swiper
                            modules={[Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className="rounded-md mb-4"
                          >
                            {speciality.subject.banner.map((image, index) => (
                              <SwiperSlide key={index}>
                                <img
                                  src={image.secure_url}
                                  alt={`${speciality.name} ${index + 1}`}
                                  className="w-full h-64 object-cover rounded-md"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}

                    {/* Display Selected Price */}
                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                      <p className="text-base lg:text-lg text-gray-700">
                        Price:{" "}
                        <strong className="text-green-600">
                          <strike className="font-bold mr-3 text-red-500">
                            ₹{speciality?.subject?.price}
                          </strike>
                          ₹{speciality?.subject?.discountedPrice}
                        </strong>
                      </p>
                    </div>
                    {/*  <Link to={`/buy-pdf/${speciality?._id}`}> */}
                    <button
                      className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-green-500 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center mt-4 w-full "
                      onClick={() => {
                        logicFunction(speciality);
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
