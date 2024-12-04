import React from "react";
import TextAnimation from "../components/TextAnimation";
import { PiBookFill, PiBrainFill, PiCheckCircleFill, PiClockFill, PiGlobeFill, PiLightbulbFill, PiShieldCheckFill, PiTrophyFill } from "react-icons/pi";


const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen py-12">
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
            classname="text-xl w-3/5 mx-auto leading-8 lowercase text-white"
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
            classname="text-4xl font-semibold capitalize  text-white"
          />

          <TextAnimation
            as="p"
            direction="left"
            letterAnime={true}
            text=" To be the premier resource for medical students and professionals, fostering a community where learning meets excellence through innovative tools and techniques, including memory-boosting strategies."
            classname="text-xl w-3/5 leading-8 lowercase text-white"
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
            classname="text-4xl font-semibold capitalize  text-white"
          />
<TextAnimation
  as="p"
  direction="right"
  letterAnime={true}
  text="We are dedicated to your success, whether you’re preparing for an exam or refreshing your knowledge for clinical practice. With Golden Med Notes, you’re not just learning—you’re building a foundation for excellence."
  classname="text-xl w-full md:w-3/5 leading-8 text-center md:text-right lg:text-right text-white lowercase"
  variants={{
    hidden: { filter: "blur(4px)", opacity: 0, y: 20, x: 50 }, // Reduced x value for better visibility on smaller screens
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
  <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-8">
    “We’ve helped 5000+ aspirants by making preparation simpler. Our notes save time, remove the useless, and focus on what truly matters. This year, they’re even better.”
  </p>

  <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
    {/* Simplify Medical Learning */}
    <div className="flex flex-row items-center space-x-4">
      <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
        <PiBookFill className="text-blue-900" size={28} />
      </span>
      <div>
        <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
          Simplify Medical Learning
        </h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Provide concise, comprehensive, and easy-to-understand notes.
        </p>
      </div>
    </div>

    {/* Optimize Retention */}
    <div className="flex flex-row items-center space-x-4">
      <span className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
        <PiBrainFill className="text-green-900" size={28} />
      </span>
      <div>
        <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
          Optimize Retention
        </h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Integrate techniques inspired by photographic memory and advanced recall strategies to help users retain more in less time.
        </p>
      </div>
    </div>

    {/* Empower Excellence */}
    <div className="flex flex-row items-center space-x-4">
      <span className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
        <PiTrophyFill className="text-purple-900" size={28} />
      </span>
      <div>
        <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
          Empower Excellence
        </h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Equip students and professionals with resources that enhance understanding and performance, from exams to clinical practice.
        </p>
      </div>
    </div>
  </div>
</section>

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
            Expert-curated summaries of medical topics, from anatomy to pharmacology.
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
          <span className="ml-2">Clear, structured formats designed for quick comprehension.</span>
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
          <span className="ml-2">Use of diagrams, charts, and mnemonics for better recall.</span>
        </div>
      </li>
     
      <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6">
            <PiCheckCircleFill className="text-red-900" size={22} />
          </span>
          <span className="ml-2">
            Incorporation of tools inspired by photographic memory to aid visualization and retention.
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
            Fast and efficient revision tools tailored to high-pressure environments.
          </span>
        </div>
      </li>

      <li className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-4">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6">
            <PiCheckCircleFill className="text-red-900" size={22} />
          </span>
          <span className="ml-2">
            View protected resources on any device without worrying about unauthorized distribution.
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
      Visualization: Notes include highly visual aids, such as diagrams, flowcharts, and infographics.
    </h1>
  </div>
  <div className="flex items-start">
    <span className="flex items-center justify-center w-6 h-6">
      <PiCheckCircleFill className="text-red-900" size={22} />
    </span>
    <h1 className="ml-2 text-gray-700 text-base sm:text-lg">
      Association: We use mnemonics and other tools to link concepts with memorable triggers.
    </h1>
  </div>
  <div className="flex items-start">
    <span className="flex items-center justify-center w-6 h-6">
      <PiCheckCircleFill className="text-red-900" size={22} />
    </span>
    <h1 className="ml-2 text-gray-700 text-base sm:text-lg">
      Retention Exercises: Flashcards and quizzes are available to test and solidify your memory.
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

  <div className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
    <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
    <PiClockFill className="text-red-900" size={24} />    </span>
    <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
    Time-Saving
    </h1>
    <p className="text-gray-700 text-base sm:text-lg">
    Spend less time searching and more time mastering the material.
    </p>
  </div>
  {/* Proven Techniques */}
  <div className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
    <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
      <PiLightbulbFill className="text-red-900" size={24} />
    </span>
    <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
      Proven Techniques
    </h1>
    <p className="text-gray-700 text-base sm:text-lg">
      Learn using methods inspired by photographic memory for efficient recall.
    </p>
  </div>
  {/* Accessibility */}
  <div className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
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
  <div className="flex flex-col items-center text-center bg-[#ffff] py-3 rounded-md" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
    <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
      <PiShieldCheckFill className="text-red-900" size={24} />
    </span>
    <h1 className="text-gray-800 font-semibold text-lg sm:text-xl mb-1">
      Expertise You Can Trust
    </h1>
    <p className="text-gray-700 text-base sm:text-lg">
      Our content is developed by medical professionals with years of teaching experience.
    </p>
  </div>
</div>


</section>


        <h1 className="text-4xl font-bold mt-8 mb-8">
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
