import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userInfo, isUserLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!query) return;

    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get(`notes/search?query=${query}`);

        setNotes(response.data.data);
      } catch (err) {
        setError(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [query]);

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
          name: { buyerName },
          email: { buyerEmail },
          contact: { buyerNumber },
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && Array.isArray(notes) && notes.length === 0 && (
        <p>No notes found for "{query}".</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div
              key={note._id}
              className="border bg-black text-white p-4 rounded shadow"
            >
              <img
                src={note?.subject?.banner[0].secure_url}
                alt={note?.name}
                className="w-full h-48 object-contain rounded-lg shadow-lg"
              />
              <h2 className="text-xl font-semibold">{note?.name}</h2>

              <p>Discounted Price: Rs. {note?.price}</p>
              <p>Pages: {note?.pages}</p>
              {/* Buy Button */}
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
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
