// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setLoading(true);

//     if (!phone || phone.length !== 10) {
//       setMessage("Please enter a valid 10-digit phone number.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/otp/login", {
//         phone,
//       });

//       console.log(response, "response from Login API");
//       setMessage("OTP sent successfully. Please check your phone!");
//     } catch (error) {
//       setMessage(
//         error.response?.data?.error || "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left: Login Form */}
//       <div className="w-1/2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
//             Welcome Back
//           </h1>
//           <p className="text-center text-gray-500 mb-8">
//             Log in to access your account
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//                 className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full px-4 py-2 text-white font-bold bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg transition duration-300 ${
//                 loading && "opacity-70 cursor-not-allowed"
//               }`}
//             >
//               {loading ? "Sending OTP..." : "Login"}
//             </button>
//           </form>
//           {message && (
//             <p
//               className={`mt-4 text-center font-medium ${
//                 message.includes("successfully")
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               {message}
//             </p>
//           )}
//           <p className="mt-6 text-center text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <a
//               href="/signup"
//               className="text-indigo-500 hover:underline hover:text-indigo-600"
//             >
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Right: Banner Image */}
//       <div className="w-1/2 relative">
//         <img
//           src="https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg"
//           alt="Login Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
//           <h2 className="text-4xl font-bold">Welcome to Our Platform</h2>
//           <p className="text-lg mt-2">
//             Securely log in to manage your account and explore features.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/Auth/AuthaAction"; // Assuming userLogin action is defined
import { Navigate, useNavigate } from "react-router-dom";
import Background from "../assets/logoname.jpg";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPhoneLogin, setIsPhoneLogin] = useState(false); // Track which login method to use
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = async (data) => {
    dispatch(userLogin(data));
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Login Form */}
      <div className="order-2 md:w-1/2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Log in to access your account
          </p>

          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="space-y-6"
          >
            {!isPhoneLogin && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className={`mt-2 w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            )}

            {isPhoneLogin && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}

            {!isPhoneLogin && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`mt-2 w-full px-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || isLoggingIn}
              className={`w-full px-4 py-2 text-white font-bold bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg transition duration-300 ${
                loading || isLoggingIn ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading || isLoggingIn ? "Sending OTP..." : "Login"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-500 hover:underline hover:text-indigo-600"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right: Banner Image */}
      <div className="md:w-1/2 relative md:block order-1">
        <img
          src={Background}
          alt="Login Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold text-center px-4"></h2>
          <p className="text-lg mt-2 text-center px-6"></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
