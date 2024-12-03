import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    reset: resetLoginForm,
    formState: { errors: loginErrors },
  } = useForm();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    reset: resetSignupForm,
    formState: { errors: signupErrors },
  } = useForm();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    resetLoginForm();
    setIsLoggingIn(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
    resetSignupForm();
    setIsSigningUp(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        gsap.fromTo(
          ".mobile-menu",
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
      return !prev;
    });
  };

  const onLoginSubmit = async (data) => {
    setIsLoggingIn(true);
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsLoggingIn(false);
    closeLoginModal();
  };

  const onSignupSubmit = async (data) => {
    setIsSigningUp(true);
    console.log("Signup Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate API call
    setIsSigningUp(false);
    closeSignupModal();
  };

  const pages = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Features",
      path: "/features",
    },
    {
      id: 3,
      name: "Pricing/FAQ",
      path: "/pricing",
    },
    {
      id: 4,
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-0">
        {/* Logo */}
        <Link to={`/`} className="flex flex-col gap-0 mt-0 pt-0">
          <h1 className="text-2xl font-bold text-yellow-600 mt-0 pt-0">
            Golden
          </h1>

          <h1 className="text-sm font-bold mt-0">Med Notes</h1>
        </Link>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent md:space-x-6 items-center transform md:transform-none transition-all duration-300 ease-in-out mobile-menu ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {pages.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b md:border-none"
            >
              <Link
                to={`${item.path}`}
                className="block md:inline px-6 py-2 text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={openLoginModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Sign-Up
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-80"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...registerLogin("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:ring-2 ${
                    loginErrors.phone ? "border-red-500" : "focus:ring-blue-600"
                  }`}
                />
                {loginErrors.phone && (
                  <p className="text-red-500 text-sm">
                    {loginErrors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? <LoadingIndicator /> : "Send OTP"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Sign-Up Modal */}
      {isSignupModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-80"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Sign-Up</h2>
            <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...registerSignup("name", { required: "Name is required" })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                    signupErrors.name
                      ? "border-red-500"
                      : "focus:ring-green-600"
                  }`}
                />
                {signupErrors.name && (
                  <p className="text-red-500 text-sm">
                    {signupErrors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...registerSignup("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                    signupErrors.email
                      ? "border-red-500"
                      : "focus:ring-green-600"
                  }`}
                />
                {signupErrors.email && (
                  <p className="text-red-500 text-sm">
                    {signupErrors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  {...registerSignup("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid mobile number",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                    signupErrors.mobile
                      ? "border-red-500"
                      : "focus:ring-green-600"
                  }`}
                />
                {signupErrors.mobile && (
                  <p className="text-red-500 text-sm">
                    {signupErrors.mobile.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeSignupModal}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
                  disabled={isSigningUp}
                >
                  {isSigningUp ? <LoadingIndicator /> : "Sign Up"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
