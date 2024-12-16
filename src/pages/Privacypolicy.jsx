import { div } from "framer-motion/client";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

const PrivacyPolicy = () => {
  return (
<div className="md:px-0 px-6">
       <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 mb-10 border-t-4 border-blue-600 ">
      {/* Banner Section */}
      <div className="mb-10 relative">
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2024/04/18/10/09/ai-generated-8703988_640.jpg"
            alt="Privacy Policy Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Data Collection Section */}
      <section className="mb-8 px-6 py-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">Name</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">Email address</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">Phone number</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-blue-600" size={22} />
              </span>
              <span className="ml-2">
                Payment details (processed securely through Razorpay).
              </span>
            </div>
          </li>
        </ul>
      </section>

      {/* Data Usage Section */}
      <section className="mb-8 px-6 py-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-green-600" size={22} />
              </span>
              <span className="ml-2">Deliver purchased content.</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-green-600" size={22} />
              </span>
              <span className="ml-2">Communicate updates and respond to inquiries.</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-green-600" size={22} />
              </span>
              <span className="ml-2">Improve our services.</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Data Protection Section */}
      <section className="mb-8 px-6 py-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
        <p className="text-gray-600 leading-relaxed">
          We employ secure encryption and protocols to protect your data. Personal data will not
          be shared with third parties except as required for payment processing.
        </p>
      </section>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-500">
          For any questions regarding our privacy practices, please contact us at{" "}
          <a
            href="mailto:privacy@company.com"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            privacy@company.com
          </a>.
        </p>
      </div>
    </div></div>
  );
};

export default PrivacyPolicy;
