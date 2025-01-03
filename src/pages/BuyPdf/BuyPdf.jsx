import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getNotesById } from '../../features/notes/notesAction'
import { useForm } from 'react-hook-form'
import Razorpay from "react-razorpay/dist/razorpay";
import axios from 'axios'
const BuyPdf = (props) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { singleNote } = useSelector((state)=> state.notes)
    const { isUserLoggedIn }=  useSelector((state)=> state.auth)
    const { register, handleSubmit, formState:{errors}, watch} = useForm()
    
    /**-------------this contains the data of user when he is not logged in and enters his details-------------------*/
    const buyerName = watch("name")
    const buyerNumber = watch("mobileNumber")
    const buyerEmail = watch("email")
 
    /**---------------------disabler handle for the buy button----------------*/
    let disable = true;
    if(buyerName && buyerNumber && buyerEmail ){
     disable = false
    }else{
     disable= true
    };

    console.log('-----------------buyer details', buyerName, buyerEmail, buyerNumber)
    
    /**---------------------payment handler--------------------*/
    const handlePay = async (note) => {
        try {
            console.log(note, "meri speiclaity");
            const selectedPlan = note.name;
            const amount = note?.discountedPrice || note?.price;

            // Create an order on the server
            const { data: order } = await axios.post(
                "http://localhost:5000/order/create",
                {
                    price: amount,
                    title:note.name,
                    buyerName:buyerName,
                    buyerNumber: buyerNumber,
                    buyerEmail: buyerEmail

                }
            );

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
                        const verifyResponse = await axios.post(
                            "http://localhost:5000/order/verify",
                            {
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                                buyerName:buyerName,
                                buyerEmail:buyerEmail,
                                buyerNumber:buyerNumber,
                                pdfUrl:"https://res.cloudinary.com/dapjyizvj/raw/upload/v1734943843/uploads/reev5wluktdww2c0jqd3.pdf"
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
    useEffect(()=>{
        dispatch(getNotesById(id))
    },[id])
    if (!singleNote) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:flex lg:space-x-8">
                {/* Main Content */}
                <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Banner Image */}
                    {singleNote.subject?.banner?.[0]?.secure_url && (
                        <div className="w-full h-96 overflow-hidden">
                            <img
                                src={singleNote.subject.banner[0].secure_url}
                                alt="Subject Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                        {/* Title and Subject */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{singleNote.name}</h1>
                            <p className="mt-2 text-xl text-gray-600">{singleNote.subject?.name}</p>
                        </div>

                        {/* Price Section */}
                        <div className="flex items-baseline space-x-4">
                            <p className="text-2xl font-bold text-gray-900">₹{singleNote.discountedPrice}</p>
                            <p className="text-lg text-gray-500 line-through">₹{singleNote.price}</p>
                            <p className="text-green-600 font-semibold">
                                {Math.round(((singleNote.price - singleNote.discountedPrice) / singleNote.price) * 100)}% OFF
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
                            <p className="text-gray-600">{singleNote.subject?.description}</p>
                        </div>

                        {/* Faculty Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Faculty</h2>
                            <div className="space-y-2">
                                {singleNote.faculty?.map((faculty, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <p className="text-gray-800">{faculty.name}</p>
                                        <span className="text-gray-500">from</span>
                                        <p className="text-gray-800">{faculty.institute}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="grid grid-cols-2 gap-4 text-gray-600">
                            <div>
                                <span className="font-semibold">Total Pages:</span> {singleNote.pages}
                            </div>
                            <div>
                                <span className="font-semibold">Created:</span>{' '}
                                {new Date(singleNote.createdAt).toLocaleDateString()}
                            </div>
                        </div>

                        {/* form to get details when the user is not logged in */}
                        {!isUserLoggedIn && (
                            <div className=" ">
                                <h2 className="text-xl font-semibold text-gray-900">Fill the form to continue the process</h2>
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("name", { required: "Name is required" })} // Add validation rules
                                            placeholder="Your Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} {/* Display error message */}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="number"
                                            {...register("mobileNumber", {
                                                required: "Mobile number is required",
                                                pattern: {
                                                    value: /^\d{10}$/, // Example: 10-digit number validation
                                                    message: "Invalid mobile number format",
                                                },
                                            })}
                                            placeholder="Mobile Number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.mobileNumber && (
                                            <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            placeholder="Email Address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>
                                </form>

                            </div>
                        )}

                        {/* Buy Button */}
                        <button
                        onClick={()=>handlePay(singleNote)}
                        disabled={disable}
                         className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>

               
            </div>
        </div>
    );
}

export default BuyPdf