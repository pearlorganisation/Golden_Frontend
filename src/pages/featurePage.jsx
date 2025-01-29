/* eslint-disable react/prop-types */
import React from "react";
import FeatureImg from "../assets/Features.jpg";

import UnlockSuccess from "../assets/unlocksuccess.png";
import {
  PiCheckCircleFill,
  PiClockFill,
  PiGlobeFill,
  PiLightbulbFill,
  PiShieldCheckFill,
} from "react-icons/pi";

const featuresData = [
  {
    title: "Designed for Photographic Memory",
    description:
      "Strategically placed bold text, highlights, and mnemonics to boost recall.",
    icon: "📚",
  },
  {
    title: "Save Time and Resources",
    description:
      "One subscription gives you access to everything you need—no extra hassle.",
    icon: "⏰",
  },
  {
    title: "Last-Minute Revision Power",
    description: "Revise entire subjects in hours, not days.",
    icon: "⚡",
  },
  {
    title: "Content from Experience",
    description:
      "Crafted by reviewing lectures, solving MCQs, and analyzing GTs.",
    icon: "💡",
  },
  {
    title: "First-Time and Revision-Friendly",
    description:
      "Comprehensive for building understanding, concise for quick revision.",
    icon: "📖",
  },
  {
    title: "Exam-Focused Mnemonics",
    description:
      "Mnemonics placed exactly where needed for easy recall during high-pressure moments.",
    icon: "📝",
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto p-6 ">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-4">
            Smart Notes for Smarter Minds: Save Time, Ace Faster
          </h1>
          <p className="text-lg sm:text-xl text-white">
            Unlock the power of efficient learning with our expertly designed
            notes, tailored for NEET PG aspirants.
          </p>
        </header>

        <div className="mt-12 mb-12">
          <img src={FeatureImg} className="w-full h-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="mt-12">
          <img src={UnlockSuccess} className="w-full h-full" />
        </div>

        {/* What we Offer */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            What We Offer
          </h2>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">Comprehensive Notes:</span>
                  </div>
                </li>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      Expert-curated summaries of medical topics, from anatomy
                      to pharmacology.
                    </span>
                  </div>
                </li>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">Secure Digital Access:</span>
                  </div>
                </li>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      Clear, structured formats designed for quick
                      comprehension.
                    </span>
                  </div>
                </li>
              </div>

              {/* Column 2 */}
              <div>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">Memory Enhancement Techniques:</span>
                  </div>
                </li>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      Use of diagrams, charts, and mnemonics for better recall.
                    </span>
                  </div>
                </li>

                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      Incorporation of tools inspired by photographic memory to
                      aid visualization and retention.
                    </span>
                  </div>
                </li>
              </div>

              {/* Column 3 */}
              <div>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">Exam-Focused Resources:</span>
                  </div>
                </li>
                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      Fast and efficient revision tools tailored to
                      high-pressure environments.
                    </span>
                  </div>
                </li>

                <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6">
                      <PiCheckCircleFill className="text-red-900" size={22} />
                    </span>
                    <span className="ml-2">
                      View protected resources on any device without worrying
                      about unauthorized distribution.
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </section>

        {/* Photographic Memory */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Incorporating Photographic Memory
          </h2>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            At Golden Med Notes, we believe that memory is the cornerstone of
            mastering medicine. Our resources are designed to emulate techniques
            of photographic memory, helping users visualize and remember complex
            information:
          </p>
          <div className="flex flex-col  w-fit mx-auto space-y-4">
            <div className="flex items-center">
              <span className="flex items-center  gap-20justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900 " size={22} />
              </span>
              <h1 className="ml-2 text-gray-700 text-base sm:text-lg">
                Visualization: Notes include highly visual aids, such as
                diagrams, flowcharts, and infographics.
              </h1>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900" size={22} />
              </span>
              <h1 className="ml-2 text-gray-700 text-base sm:text-lg">
                Association: We use mnemonics and other tools to link concepts
                with memorable triggers.
              </h1>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900" size={22} />
              </span>
              <h1 className="ml-2 text-gray-700 text-base sm:text-lg">
                Retention Exercises: Flashcards and quizzes are available to
                test and solidify your memory.
              </h1>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Why Choose Us
          </h2>
          <div className="flex flex-col md:flex-row gap-2 mx-auto">
            <div
              className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                <PiClockFill className="text-red-900" size={24} />{" "}
              </span>
              <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
                Time-Saving
              </h1>
              <p className="text-gray-700 text-base sm:text-lg">
                Spend less time searching and more time mastering the material.
              </p>
            </div>
            {/* Proven Techniques */}
            <div
              className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                <PiLightbulbFill className="text-red-900" size={24} />
              </span>
              <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
                Proven Techniques
              </h1>
              <p className="text-gray-700 text-base sm:text-lg">
                Learn using methods inspired by photographic memory for
                efficient recall.
              </p>
            </div>
            {/* Accessibility */}
            <div
              className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                <PiGlobeFill className="text-red-900" size={24} />
              </span>
              <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
                Accessibility
              </h1>
              <p className="text-gray-700 text-base sm:text-lg">
                Digital resources available anytime, anywhere.
              </p>
            </div>
            {/* Expertise You Can Trust */}
            <div
              className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                <PiShieldCheckFill className="text-red-900" size={24} />
              </span>
              <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
                Expertise You Can Trust
              </h1>
              <p className="text-gray-700 text-base sm:text-lg">
                Our content is developed by medical professionals with years of
                teaching experience.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mt-16 mb-12">
          <a
            href="/pricing"
            className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition-all duration-300 "
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
      <div className="text-5xl mb-6 text-yellow-600">{icon}</div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesPage;
