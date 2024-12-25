import React from "react";

// Gradinet   bg-gradient-to-r from-blue-500 to-indigo-600
const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Tagline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Save Time, Work Smart, and Ace NEET PG.
        </h2>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Benefit 1 */}
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Save Time</h3>
            <p className="text-gray-700">
              Maximize your study efficiency with tailored resources, helping
              you focus on what matters most.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Save Money</h3>
            <p className="text-gray-700">
              Affordable study materials and packages to reduce unnecessary
              costs without compromising quality.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Photographic Memory Advantage
            </h3>
            <p className="text-gray-700">
              Enhance your recall with our easy-to-digest notes and techniques
              that make information stick.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Last-Minute Revision</h3>
            <p className="text-gray-700">
              Quickly revise key concepts with focused revision materials
              designed for last-minute preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
