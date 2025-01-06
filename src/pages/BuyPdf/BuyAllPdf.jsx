import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../../features/Subject/SubjectAction'
import { useForm } from 'react-hook-form';
import Razorpay from "react-razorpay/dist/razorpay";
import axios from 'axios'
import { baseURL } from '../../axiosInstance';
const BuyAllPdf = () => {
    const dispatch = useDispatch();
    const { subject } = useSelector(state=> state.subjects);
    const { isUserLoggedIn, userInfo } = useSelector((state)=> state.auth);
    const { register, handleSubmit, formState:{errors}, watch } = useForm()
    /** getting all the pdf urls from the subject object */
    let allPdfUrl = []
    if(subject){subject?.map((sub)=>(
        allPdfUrl.push(sub?.pdfUrl)
      ))
    };

    console.log("---------all urls", allPdfUrl)
    /** just for backend */
    const isAll = true;
 /**-------------------------- */

 /** to store the details of the user buying the pdf */
    let finalBuyerName;
    let finalBuyerEmail
    let finalBuyerNumber
    
    /** values of user details from the form */
    let formBuyerName  = watch("name")
    let formBuyerEmail = watch("email")
    let formBuyerPhone = watch("phone")

    if(isUserLoggedIn && userInfo){
        finalBuyerName = userInfo?.name
        finalBuyerEmail = userInfo?.email
        finalBuyerNumber = userInfo?.phoneNumber
    }else if(!isUserLoggedIn){
        finalBuyerName = formBuyerName
        finalBuyerEmail = formBuyerEmail
        finalBuyerNumber = formBuyerPhone 
    } 

    console.log("final buyer is",finalBuyerName, finalBuyerNumber,finalBuyerEmail)
    /** preparing user data for what details to use when he is logged in and what details to get from form when he is logged out */

    
    const handlePayAllPdf = async (allPdfUrl) => {
        try {
            // console.log(note, "meri speiclaity");
            const packageName = "All Notes";
            const amount = 2999;
            
            // Create an order on the server
            const { data: order } = await axios.post(
                `${baseURL}order/create`,
                {
                    price: amount,
                    title: packageName,
                    buyerName: finalBuyerName,
                    buyerNumber: finalBuyerNumber,
                    buyerEmail: finalBuyerEmail

                }
            );

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
                        const verifyResponse = await axios.post(
                            `${baseURL}order/verify`,
                            {
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                                buyerName: finalBuyerName,
                                buyerEmail: finalBuyerEmail,
                                buyerNumber: finalBuyerNumber,
                                pdfUrl: allPdfUrl,  // for sending all the url
                                isAll:isAll
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


    useEffect(()=>{
      dispatch(getAllSubjects())
    },[])
  return (
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              { Array.isArray(subject) && subject?.map((item) => (
                  <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {/* Banner Image */}
                      {item.banner?.[0]?.secure_url && (
                          <div className="w-full h-48 overflow-hidden">
                              <img
                                  src={item.banner[0].secure_url}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                              />
                          </div>
                      )}

                      {/* Content */}
                      <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

                          {/* Details */}
                          <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                  <span className="text-gray-600">Pages:</span>
                                  <span className="font-medium">{item.pages}</span>
                              </div>

                              <div className="flex justify-between items-center">
                                  <span className="text-gray-600">Price:</span>
                                  <div className="text-right">
                                      <span className="line-through text-gray-500 mr-2">₹{item.price}</span>
                                      <span className="text-green-600 font-semibold">₹{item.discountedPrice}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <div>
              {!isUserLoggedIn && (
                  <div>
                      <form>
                          <div>
                              <label htmlFor="name">Name</label>
                              <input
                                  id="name"
                                  type="text"
                                  {...register("name")}
                                  placeholder="Enter your name"
                              />
                          </div>
                          <div>
                              <label htmlFor="email">Email</label>
                              <input
                                  id="email"
                                  type="email"
                                  {...register("email")}
                                  placeholder="Enter your email"
                              />
                          </div>
                          <div>
                              <label htmlFor="phone">Phone Number</label>
                              <input
                                  id="phone"
                                  type="tel"
                                  {...register("phone")}
                                  placeholder="Enter your phone number"
                              />
                          </div>
                          
                      </form>
                  </div>
              )}
          </div>
          <div className='flex justify-center items-center w-full mt-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 h-12 rounded-md shadow-sm'>
              <button onClick={()=>handlePayAllPdf(allPdfUrl)} className='font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 tracking-wide w-full h-full'>
                  Buy All for ₹2999
              </button>
          </div>
      </div>
  )
}

export default BuyAllPdf