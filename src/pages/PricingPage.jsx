/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import gsap from "gsap";
import TextAnimation from "../components/TextAnimation";

const PricingPage = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Free Forever",
      features: [
        "1 user",
        "100 storage minutes",
        "250GB bandwidth",
        "$0.5/GB streaming overage",
      ],
      keyFeatures: ["Video chapters and SEO", "Engagement analytics"],
      button: "Free Forever",
      highlight: false,
    },
    {
      title: "Growth",
      price: "$40/month",
      description: "$59 billed monthly",
      features: [
        "5 users",
        "4000 storage minutes",
        "2 TB bandwidth / month",
        "$0.10 / GB streaming overage",
      ],
      keyFeatures: ["Advertising integrations", "API access (+ Zapier)"],
      button: "Get Growth",
      highlight: true,
    },
    {
      title: "Starter",
      price: "$10/month",
      description: "$19 billed monthly",
      features: [
        "2 users",
        "1200 storage minutes",
        "2 TB bandwidth / month",
        "$0.15 / GB streaming overage",
      ],
      keyFeatures: ["Video engagement tools", "Player customization"],
      button: "Get Starter",
      highlight: false,
    },
  ];

  const faqData = [
    {
      question: "Who can use these notes?",
      answer: "Ideal for all NEET PG aspirants, from beginners to advanced.",
    },
    {
      question: "Will this help average students?",
      answer: "Yes! Designed for clarity and easy recall.",
    },
    {
      question: "How to use these notes?",
      answer: "Use for building understanding and quick revisions.",
    },
    {
      question: "Why are these notes unique?",
      answer:
        "Save time, study less, and achieve better results with efficient, focused preparation.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600"></h1>
        <TextAnimation
            text="Choose Your Plan"
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
        {/* <p className="text-lg text-gray-600 mt-4">
        <TextAnimation
            text="  Select the best plan that suits your needs."
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="text-4xl sm:text-5xl font-extrabold capitalize mb-10"
          />

        </p> */}
      </header>

      {/* Pricing Plans Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col border rounded-md shadow-lg p-6 w-72 ${
              plan.highlight ? "border-purple-600" : "border-gray-200"
            }`}
          >
            {/* Highlight Badge */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-700 px-4 py-1 text-sm rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}</p>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            <button
              className={`mt-4 px-4 py-2 text-sm font-medium rounded ${
                plan.highlight
                  ? "bg-purple-600 text-white"
                  : "border border-purple-600 text-purple-600"
              }`}
            >
              {plan.button}
            </button>
            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-purple-500">●</span> {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-800 mt-4 font-medium">Key Features</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              {plan.keyFeatures.map((keyFeature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {keyFeature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-sm text-purple-600 underline mt-4 block"
            >
              View all features
            </a>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power1.in",
      });
    }
  };

  return (
    <div
      className="bg-white p-6 shadow-lg rounded-lg transition duration-300 "
      onClick={toggleFAQ}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ height: 0, overflow: "hidden" }}
        className="mt-4 transition-all"
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default PricingPage;
