import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PricingPlans from "../pages/PricingPlan";
const RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;

const cards = [
  {
    id: 1,
    name: "INR 149 Plan",
    title: "Access essential NEET PG resources for one low price!",
    price: "149",
    duration: "1",
  },
  {
    id: 2,
    name: "INR 399 Plan",
    title:
      "Unlock access to Golden Med Notes and other premium content for a comprehensive NEET PG experience for a limited time.",
    price: "399",
    duration: "1",
  },
  {
    id: 3,
    name: "INR 1499 Plan",
    title: "Limited Time Offer for Yearly Subscription",
    price: "1499",
    duration: "12",
  },
];

const SubscriptionSection = () => {
  const cardsRef = useRef([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 1,
      duration: 2,
      stagger: 0.5,
    });
  }, []);

  const handlePayment = async ({ price, title, name }) => {
    setLoading(true);
    try {
      // Step 1: Create order on the backend
      const response = await axios.post("http://localhost:5000/bookings", {
        totalPrice: +price,
        title: title,
        name: name,
      });
      console.log(`response:: ${JSON.stringify(response, null, 2)}`);

      const { order } = response.data;

      // Step 2: Set up Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: name,
        description: `Payment for ${title}`,
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyPayment = await axios.post(
              "http://localhost:5000/bookings/verify-payment",
              response
            );
            if (verifyPayment?.data?.success === true) {
              toast.success("🦄Payment Successfull");
              setTimeout(() => {
                navigate("/");
              }, 400);
            }
          } catch (error) {
            console.log("ERR: ", error);
            if (error.response && error.response.status === 404) {
              // alert("Verification route not found. Please contact support.");
              toast.error(
                "🦄Verification route not found. Please contact support"
              );
            } else {
              // alert("Payment verification failed. Please try again.");
              toast.error("🦄Payment verification failed. Please try again");
            }
            console.error("Error in payment verification:", error);
          }
        },
        prefill: {
          name: "Shubham Mamgain",
          email: "shubhammamgain@pearlorganisation.com",
          contact: "9012761860",
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            alert("Payment cancelled");
          },
        },
      };

      // Step 4: Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Error occurred during payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  //  Gradient Background    bg-gradient-to-r from-purple-500 to-green-500

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Choose Your Plan and Unlock Premium NEET PG Resources!
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          We offer flexible plans to fit your preparation needs. Choose the one
          that suits you best!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-800 transform"
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
                className="text-2xl font-semibold mb-4 group-hover:text-red-600 transition duration-300"
              >
                {card.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="text-gray-700 group-hover:text-green-600 transition duration-300 mb-20"
              >
                {card.title}
              </motion.p>
              <motion.div
                className="flex justify-center items-center mt-20  absolute bottom-4 left-[35%]"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <button
                  onClick={() => handlePayment(card)}
                  disabled={loading}
                  className="bg-yellow-400  text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  {loading ? <LoadingIndicator /> : "Pay Now"}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <PricingPlans /> */}
    </section>
  );
};

export default SubscriptionSection;
