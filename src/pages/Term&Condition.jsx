import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 mb-10 md:px-0 px-6">
      {/* Banner Section */}
      <div className="mb-8 relative">
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2020/12/16/01/04/doctor-5835366_1280.jpg"
            alt="Terms and Conditions Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-white text-center">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 bg-white shadow-lg rounded-lg border-t-4 border-blue-600">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Golden Med Notes. These Terms and Conditions govern your
            use of our services, including the purchase and subscription of
            digital medical notes. By accessing our services, you agree to abide
            by these terms.
          </p>
        </section>

        {/* Use of Services Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Use of Services
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <div className="flex items-center">
                <span className="flex items-center justify-center w-6 h-6">
                  <PiCheckCircleFill className="text-blue-600" size={22} />
                </span>
                <span className="ml-2">Users must be 18 years or older.</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="flex items-center justify-center w-6 h-6">
                  <PiCheckCircleFill className="text-blue-600" size={22} />
                </span>
                <span className="ml-2">
                  Services are provided exclusively for personal, non-commercial
                  use.
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="flex items-center justify-center w-6 h-6">
                  <PiCheckCircleFill className="text-blue-600" size={22} />
                </span>
                <span className="ml-2">
                  Unauthorized sharing, redistribution, or duplication of
                  content is strictly prohibited.
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <div className="mt-10 text-center">
          <p className="text-gray-500">
            For any questions regarding these terms, please contact us at{" "}
            <a
              href="mailto:support@goldenmednotes.com"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              support@goldenmednotes.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
