/* eslint-disable react/prop-types */
import React from "react";

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
          Unlock the power of efficient learning with our expertly designed notes, tailored for NEET PG aspirants.
        </p>
      </header>

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

      <div className="text-center mt-16 mb-12">
        <a
          href="/pricing-faq"
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
