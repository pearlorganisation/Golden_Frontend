import { div } from "framer-motion/client";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

const RefundPolicy = () => {
  return (
    <div className="md:px-0 px-6">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-8 mb-8 border-t-4 border-blue-600">
      {/* Banner Section */}
      <div className="mb-8 relative">
        <img
          src="https://cdn.pixabay.com/photo/2024/04/18/10/09/ai-generated-8704008_1280.jpg" // Replace with your actual image URL
          alt="Doctor Banner"
          className="w-full h-60 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-3xl font-bold">Your Trusted NEET Preparation Resource</h2>
        </div>
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Refund Policy
      </h1>
      
      {/* Introduction */}
      <section className="mb-8 px-6 py-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">
          Unlock Your NEET Prep with Our Source
        </h2>
        <p className="text-gray-600 mt-2">
          We are committed to providing you with the best learning experience. If you encounter any issues, we aim to resolve them efficiently through our refund policy.
        </p>
      </section>

      {/* Refund Eligibility */}
      <section className="mb-8 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Eligibility</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">Incorrect product delivered.</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">Technical issues preventing content access.</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Non-Refundable Situations */}
      <section className="mb-8 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Situations</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900" size={22} />
              </span>
              <span className="ml-2">Purchases made in error or change of mind.</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900" size={22} />
              </span>
              <span className="ml-2">Violation of Terms and Conditions.</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Refund Process */}
{/* Refund Process */}
<section className="mb-8 px-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
  <p className="text-gray-600 mb-4">
    If you believe you are eligible for a refund, please follow the steps below:
  </p>
  <ul className="space-y-3 text-gray-600">
    <li>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6">
          <PiCheckCircleFill className="text-blue-600" size={22} />
        </span>
        <span className="ml-2">Submit your refund request within 24 hours of purchase.</span>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6">
          <PiCheckCircleFill className="text-blue-600" size={22} />
        </span>
        <span className="ml-2">Provide proof of payment and a detailed description of the issue.</span>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6">
          <PiCheckCircleFill className="text-blue-600" size={22} />
        </span>
        <span className="ml-2">
          Send your request to{" "}
          <a
            href="mailto:goldenmednotes@gmail.com"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            goldenmednotes@gmail.com
          </a>
        </span>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6">
          <PiCheckCircleFill className="text-blue-600" size={22} />
        </span>
        <span className="ml-2">Approved refunds will be processed within 5-7 business days.</span>
      </div>
    </li>
  </ul>
</section>

      {/* Footer */}
      <div className="text-center mt-10 px-6">
        <p className="text-gray-500">
          For any further questions, feel free to contact us at{" "}
          <a
            href="mailto:goldenmednotes@gmail.com"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            goldenmednotes@gmail.com
          </a>
        </p>
      </div>
    </div></div>
  );
};

export default RefundPolicy;
