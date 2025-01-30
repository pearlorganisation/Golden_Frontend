import React from "react";
// import TextAnimation from "../components/TextAnimation";
import {
  PiBookFill,
  PiBrainFill,
  PiCheckCircleFill,
  PiClockFill,
  PiGlobeFill,
  PiLightbulbFill,
  PiShieldCheckFill,
  PiTrophyFill,
} from "react-icons/pi";

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Overview Section */}
        <div className="py-0 text-center flex flex-col "></div>
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6">
            About <span className="text-gray-800">Golden Med Notes</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Golden Med Notes, your trusted partner in mastering
            medical concepts efficiently and effectively. We understand the
            challenges of navigating complex medical knowledge, and we’re here
            to simplify your learning journey with expertly crafted resources
            that save time while maximizing retention.
          </p>
          <div className="mt-8">
            <img
              src="https://cdn.prod.website-files.com/609d8acf830e6079f27ba963/66d06748eaaa1b5a348e9bd4_USA%20scholarship%20for%20indian%20students.jpg"
              alt="Golden Med Notes"
              className="w-full h-[250px] sm:h-[400px] lg:h-[450px] rounded-lg shadow-lg "
            />
          </div>
        </section>

        {/* Vision Section */}
        {/* Main Container */}
        <div className="text-gray-800 flex-col flex gap-12 py-20 px-4 sm:px-10">
          {/* Our Vision Section */}
          <div className="flex flex-col bg-white items-center gap-12 text-center py-16 px-4 sm:px-10 rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6">
              Our <span className="text-gray-800"> Vision </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              To be the premier resource for medical students and professionals,
              fostering a community where learning meets excellence through
              innovative tools and techniques, including memory-boosting
              strategies.
            </p>
          </div>

          {/* Our Commitment Section */}
          <div className="py-32 text-center flex flex-col items-center gap-12 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6">
              Our <span className="text-gray-800"> Commitment </span>
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to your success, whether you’re preparing for
                an exam or refreshing your knowledge for clinical practice. With
                Golden Med Notes, you’re not just learning—you’re building a
                foundation for excellence.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6 sm:p-10 my-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-8 text-gray-700">
              “We’ve helped 5000+ aspirants by making preparation simpler. Our
              notes save time, remove the useless, and focus on what truly
              matters. This year, they’re even better.”
            </p>

            <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
              {/* Simplify Medical Learning */}
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <PiBookFill className="text-blue-900" size={32} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    Simplify Medical Learning
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Provide concise, comprehensive, and easy-to-understand
                    notes.
                  </p>
                </div>
              </div>

              {/* Optimize Retention */}
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <PiBrainFill className="text-green-900" size={32} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    Optimize Retention
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Integrate techniques inspired by photographic memory and
                    advanced recall strategies to help users retain more in less
                    time.
                  </p>
                </div>
              </div>

              {/* Empower Excellence */}
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                  <PiTrophyFill className="text-purple-900" size={32} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    Empower Excellence
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Equip students and professionals with resources that enhance
                    understanding and performance, from exams to clinical
                    practice.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <h1 className="text-4xl font-bold  mb-8">
          Golden Med Notes – Where knowledge meets visualization and retention.
        </h1>
        {/* Contact Section */}
        <section className="bg-bl p-6 sm:p-10 rounded-xl text-white shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Contact Information
          </h2>
          <div className="text-base sm:text-lg text-center">
            <p className="mb-4">
              <span className="font-semibold">Address:</span> BL-5, GR, FR,
              Santoshpur Co-Op Colony, Kolkata 700066
            </p>
            <p className="mb-4">
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+918017379245"
                className="underline hover:text-gray-300"
              >
                +91 8017379245
              </a>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:goldenmednotes@gmail.com"
                className="underline hover:text-gray-300"
              >
                goldenmednotes@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">
              Connect with Us
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <a
                href="https://instagram.com/neetpg.fmge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-yellow-500 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white transition duration-300 w-full sm:w-auto text-center"
              >
                @neetpg.fmge
              </a>
              <a
                href="https://instagram.com/goldenmednotes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white transition duration-300 w-full sm:w-auto text-center"
              >
                @goldenmednotes
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
