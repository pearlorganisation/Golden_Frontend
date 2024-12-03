import React from "react";
import TextAnimation from "../components/TextAnimation";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Overview Section */}
        <div className="py-20 text-center flex flex-col ">
          <TextAnimation
            text="About  Golden Med Notes"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="text-4xl sm:text-5xl font-extrabold capitalize mb-10 text-yellow-600"
          />
          <TextAnimation
            as="p"
            letterAnime={true}
            text="Welcome to Golden Med Notes, your trusted partner in mastering medical concepts efficiently and effectively. We understand the challenges of navigating complex medical knowledge, and we’re here to simplify your learning journey with expertly crafted resources that save time while maximizing retention."
            classname="text-xl w-3/5 mx-auto leading-8 lowercase"
            variants={{
              hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
        </div>
        {/* <section className="text-center mb-16">
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
        </section> */}

        {/* Vision Section */}
        <div className="py-20 flex flex-col gap-12">
          <TextAnimation
            text=" Our Vision"
            direction="left"
            lineAnime={true}
            classname="text-4xl font-semibold capitalize "
          />

          <TextAnimation
            as="p"
            direction="left"
            letterAnime={true}
            text=" To be the premier resource for medical students and professionals, fostering a community where learning meets excellence through innovative tools and techniques, including memory-boosting strategies."
            classname="text-xl w-3/5 leading-8 lowercase"
            variants={{
              hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
        </div>

        {/* Our Commitment */}
        <div className="py-32  text-right flex flex-col gap-12">
          <TextAnimation
            text="Our Commitment"
            direction="right"
            lineAnime={true}
            classname="text-4xl font-semibold capitalize "
          />

          <TextAnimation
            as="p"
            direction="right"
            letterAnime={true}
            text="We are dedicated to your success, whether you’re preparing for an exam or refreshing your knowledge for clinical practice. With Golden Med Notes, you’re not just learning—you’re building a foundation for excellence. "
            classname="text-xl w-3/5 leading-5 text-right"
            variants={{
              hidden: { filter: "blur(4px)", opacity: 0, y: 20, x: 500 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
        </div>

        {/* Mission Section */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            “We’ve helped 5000+ aspirants by making preparation simpler. Our
            notes save time, remove the useless, and focus on what truly
            matters. This year, they’re even better.”
          </p>
          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto">
            1. Simplify Medical Learning: Provide concise, comprehensive, and
            easy-to-understand notes.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto">
            2. Optimize Retention: Integrate techniques inspired by photographic
            memory and advanced recall strategies to help users retain more in
            less time.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto">
            3. Empower Excellence: Equip students and professionals with
            resources that enhance understanding and performance, from exams to
            clinical practice.
          </h1>
        </section>
        {/* What we Offer */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            What We Offer
          </h2>
          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Comprehensive Notes:
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Expert-curated summaries of medical topics, from anatomy to
            pharmacology.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Clear, structured formats designed for quick comprehension.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Memory Enhancement Techniques:
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Incorporation of tools inspired by photographic memory to aid
            visualization and retention.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Use of diagrams, charts, and mnemonics for better recall.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Exam-Focused Resources:
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Fast and efficient revision tools tailored to high-pressure
            environments.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • Secure Digital Access:
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            • View protected resources on any device without worrying about
            unauthorized distribution.
          </h1>
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

          <div className="flex flex-col items-center justify-start">
            <h1>
              • Visualization: Notes include highly visual aids, such as
              diagrams, flowcharts, and infographics.
            </h1>
            <h1>
              • Association: We use mnemonics and other tools to link concepts
              with memorable triggers.
            </h1>
            <h1>
              • Retention Exercises: Flashcards and quizzes are available to
              test and solidify your memory.
            </h1>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Why Choose Us
          </h2>
          <h1 className="text-gray-700 text-base sm:text-lg text-center mb-4">
            • Time-Saving: Spend less time searching and more time mastering the
            material.
          </h1>
          <h1 className="text-gray-700 text-base sm:text-lg text-center  mb-4">
            • Proven Techniques: Learn using methods inspired by photographic
            memory for efficient recall.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center   mb-4">
            • Accessibility: Digital resources available anytime, anywhere.
          </h1>

          <h1 className="text-gray-700 text-base sm:text-lg text-center  mb-4">
            • Expertise You Can Trust: Our content is developed by medical
            professionals with years of teaching experience.
          </h1>
        </section>

        <h1 className="text-4xl font-bold mt-8 mb-8">
          Golden Med Notes – Where knowledge meets visualization and retention.
        </h1>
        {/* Contact Section */}
        <section className="bg-blue-950 p-6 sm:p-10 rounded-xl text-white shadow-md">
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
