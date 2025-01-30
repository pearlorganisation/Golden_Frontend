// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../features/Auth/AuthaAction"; // assuming userSignup action is defined
// import Background from "../assets/logoname.jpg";
// const SignUp = () => {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleSignUpSubmit = (data) => {
//     console.log("Form Data:", data); // Check the data object here

//     setLoading(true);

//     // Assuming you have a registerUser action to handle the sign-up
//     dispatch(registerUser(data)); // Ensure the action takes the entire 'data' object which includes phoneNumber

//     setLoading(false);
//     // Handle successful submission or errors here (e.g., show success message)
//   };

//   return (
//     <div className="flex h-full">
//       {/* Left: SignUp Form */}
//       <div className="w-1/2 pt-12 pb-12 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
//             Create an Account
//           </h1>
//           <p className="text-center text-gray-500 mb-8">
//             Sign up to get started with your account
//           </p>

//           <form
//             onSubmit={handleSubmit(handleSignUpSubmit)}
//             className="space-y-1.5"
//           >
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your full name"
//                 {...register("name", { required: "Full name is required" })}
//                 className={`mt-2 w-full px-4 py-2 border ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//               />
//               {errors.name && (
//                 <p className="text-red-500">{errors.name.message}</p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 {...register("email", { required: "Email is required" })}
//                 className={`mt-2 w-full px-4 py-2 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//               />
//               {errors.email && (
//                 <p className="text-red-500">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Phone Number Field */}
//             <div>
//               <label
//                 htmlFor="phoneNumber"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 placeholder="Enter your phone number"
//                 {...register("phoneNumber", {
//                   required: "Phone Number is required",
//                   pattern: {
//                     value: /^[0-9]{10}$/, // Regular expression for a 10-digit phone number
//                     message: "Phone Number must be 10 digits",
//                   },
//                 })}
//                 className={`mt-2 w-full px-4 py-2 border ${
//                   errors.phoneNumber ? "border-red-500" : "border-gray-300"
//                 } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//               />
//               {errors.phoneNumber && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.phoneNumber.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 {...register("password", { required: "Password is required" })}
//                 className={`mt-2 w-full px-4 py-2 border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//               />
//               {errors.password && (
//                 <p className="text-red-500">{errors.password.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full px-4 py-2 text-white font-bold bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg transition duration-300 ${
//                 loading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Signing Up..." : "Sign Up"}
//             </button>
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <a
//               href="/login"
//               className="text-indigo-500 hover:underline hover:text-indigo-600"
//             >
//               Login
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Right: Banner Image */}
//       <div className="w-1/2 relative">
//         <img
//           src={Background}
//           alt="SignUp Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
//           <h2 className="text-4xl font-bold">Join Us Now!</h2>
//           <p className="text-lg mt-2">
//             Securely sign up to access all the amazing features.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/Auth/AuthaAction"; // assuming userSignup action is defined
import Background from "../assets/logoname.jpg";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUpSubmit = (data) => {
    console.log("Form Data:", data); // Check the data object here
    setLoading(true);
    dispatch(registerUser(data)); // Ensure the action takes the entire 'data' object which includes phoneNumber
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left: SignUp Form */}
      <div className="order-2 flex flex-col justify-center items-center md:w-1/2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-700 p-6 lg:p-12">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-12 md:p-12 lg:p-8 ">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Create an Account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Sign up to get started with your account
          </p>

          <form
            onSubmit={handleSubmit(handleSignUpSubmit)}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                {...register("name", { required: "Full name is required" })}
                className={`mt-2 w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

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

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone Number must be 10 digits",
                  },
                })}
                className={`mt-2 w-full px-4 py-2 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

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
                {...register("password", { required: "Password is required" })}
                className={`mt-2 w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white font-bold bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg transition duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-500 hover:underline hover:text-indigo-600"
            >
              Login
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

export default SignUp;
