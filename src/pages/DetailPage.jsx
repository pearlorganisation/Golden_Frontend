import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Razorpay from "react-razorpay/dist/razorpay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../features/Auth/AuthaAction";
import { getAllSubjects } from "../features/Subject/SubjectAction";
import axiosInstance from "../axiosInstance";

// import { Pagination } from "swiper";

const DetailPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(0);
  const [page, setPage] = useState(1);

  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const { subjects, loading } = useSelector((state) => state.subjects);

  /**---userInfo---*/
  const { userInfo, isUserLoggedIn } = useSelector((state) => state.auth);

  // console.log(pagination, "my pagination");

  console.log(subjects, "naye subjects");

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  const specialties = subjects || [];
  const content = specialties.reduce((acc, speciality) => {
    acc[speciality.name] = {
      title: speciality?.name,
      pages: speciality?.pages,
      price: speciality?.discountedPrice,
      image: speciality?.banner[0]?.secure_url,
      description: speciality?.description,
    };
    return acc;
  }, {});

  console.log(specialties, "my specialties");

  const [storedPdfUrl, setStoredPdfUrl] = useState([])
  const [urlToSend, setUrlToSend] = useState([]) 

  /** price to send if selected multiple pdfs */
  const [finalPriceAfterDiscount, setFinalPriceAfterDiscount] = useState(0)
  /** handle for selecting multiple notes and un select it */
  const handleSelect =(url)=>{
    let pdfUrl = [...storedPdfUrl];
    let toSendUrl = [...urlToSend]
    if(pdfUrl.includes(url)){
      pdfUrl = pdfUrl.filter((el)=> url?.pdf?.secure_url !== el?.pdf.secure_url)
      toSendUrl = toSendUrl.filter((el)=>url?.pdf?.secure_url !== el )
    }else{
      pdfUrl.push(url)
      toSendUrl.push(url?.pdf?.secure_url)
    }
    setStoredPdfUrl(pdfUrl)
    setUrlToSend(toSendUrl)

  }
 
 // calculating the price of selected pdfs
  let price = Array.isArray(storedPdfUrl) && storedPdfUrl.length > 0
    ? storedPdfUrl.reduce((total, el) => total + (el.discountedPrice || 0), 0)
    : 0; 

     useEffect(()=>{
        let len = storedPdfUrl.length;
        let discount = 0;
        if (len >0 && len <3) {
          discount = 0.05;   
        } else if (len >= 3 && len < 5) {
          discount = 0.10;  
        } else if (len === 5) {
          discount = 0.15;   
        } else if (len > 5) {
          discount = 0.20; 
        }
        
        let discountedPrice = price - price * discount;
    setFinalPriceAfterDiscount(Math.floor(discountedPrice));
  },[storedPdfUrl, price])
 
/** this will be the handle for buying multiple pdfs.  */
  const handleBuySelectedPdf =()=>{

  }


  const handlePay = async (speciality) => {
    try {
      console.log(speciality, "meri speiclaity");
      const selectedPdf = speciality.name;
      const amount = speciality?.discountedPrice || 0;
      const buyerName = userInfo.name;
      const buyerNumber = userInfo.phoneNumber;
      const buyerEmail = userInfo.email;
      // Create an order on the server
      const { data: order } = await axiosInstance.post("/order/create", {
        price: amount,
        buyerName: buyerName,
        buyerEmail: buyerEmail,
        buyerNumber: buyerNumber,
        title: selectedPdf,
      });

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
            const verifyResponse = await axiosInstance.post("/order/verify", {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              buyerName: buyerName,
              buyerEmail: buyerEmail,
              buyerNumber: buyerNumber,
              pdfUrl:
                "https://res.cloudinary.com/dapjyizvj/raw/upload/v1734943843/uploads/reev5wluktdww2c0jqd3.pdf", // in future change it with the url of the pdf
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
                    className="bg-black text-white shadow-lg rounded-md px-6 py-2 max-w-[270px] h-[480px]"
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-sm lg:text-base font-semibold text-white">
                        {speciality?.name}
                      </h3>
                      <div className="">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            onChange={() => handleSelect(speciality)}
                          // checked={storedPdfUrl.includes(speciality?.pdf?.secure_url)

                          // }
                          />
                          <span className="ml-2 text-white">Select PDF</span>
                        </label>
                      </div>
                    
                    </div>
                     
                    {Array.isArray(speciality?.banner) &&
                      speciality.banner.length > 0 && (
                        <div className="relative">
                          <Swiper
                            modules={[Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className="rounded-md"
                          >
                            {speciality.banner.map((image, index) => (
                              <SwiperSlide key={index}>
                                <img
                                  src={image.secure_url}
                                  alt={`${speciality.name} ${index + 1}`}
                                  className="  rounded-md w-full h-64"
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
                        <strong className="text-yellow-600">
                          <strike className="font-bold mr-3 text-red-500">
                            ₹{speciality?.price}
                          </strike>
                          ₹{speciality?.discountedPrice}
                        </strong>
                      </p>
                    </div>
                    {/*  <Link to={`/buy-pdf/${speciality?._id}`}> */}
                    <button
                      className="bg-gradient-to-r from-yellow-600 to-black text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-yellow-700 hover:to-black transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center mt-4 w-full "
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
