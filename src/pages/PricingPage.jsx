import { FaAward, FaCheckCircle } from "react-icons/fa";
import TextAnimation from "../components/TextAnimation";

const PricingPage = () => {
  const plans = [
    {
      title: "Golden With Elite Plan",
      price: "₹2999/month",
      description: "6 Months Subscription",
      features: [
        {
          text: "Full offline access to all Golden Med Notes PDFs for all subjects",
          icon: <FaAward />,
        },
        {
          text: "Online access to integrated system-wise PDFs",
          icon: <FaCheckCircle />,
        },
        {
          text: "Ability to annotate and edit the downloaded PDFs",
          icon: <FaCheckCircle />,
        },
        {
          text: "Exclusive 1:1 personalized guidance via WhatsApp chat for 6 months",
          icon: <FaCheckCircle />,
        },
        {
          text: "Access to active group discussions for collaborative learning",
          icon: <FaCheckCircle />,
        },
        {
          text: "One monthly test with 50 high-yield questions",
          icon: <FaAward />,
        },
      ],
      keyFeatures: [
        "Offline access to PDFs",
        "Personalized WhatsApp guidance",
        "Active group discussions",
        "Monthly high-yield test",
      ],
      button: "Get Golden With Elite",
      highlight: true,
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
      </header>

      {/* Pricing Plans Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col border rounded-xl shadow-lg p-6 w-72 ${
              plan.highlight ? "border-purple-600" : "border-gray-200"
            } transition-all duration-300 transform hover:scale-105`}
          >
            {plan.highlight && (
              <div className="absolute -top-6 left-1/2 transform w-60 text-center -translate-x-1/2 bg-purple-300 text-purple-700 font-semibold px-6 py-2 text-sm rounded-full uppercase shadow-xl">
                {plan.title}
              </div>
            )}

            <p className="text-4xl font-bold text-gray-800 mt-10">
              {plan.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            <button
              className={`mt-6 px-6 py-3 text-sm font-medium rounded-lg ${
                plan.highlight
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "border border-purple-600 text-purple-600 hover:bg-purple-100"
              } transition-all`}
            >
              {plan.button}
            </button>
            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-800 mt-4 font-medium">
              Key Features
            </p>
            <ul className="mt-2 space-y-2 text-gray-600">
              {plan.keyFeatures.map((keyFeature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-black">✓</span> {keyFeature}
                </li>
              ))}
            </ul>
            {/* <a
              href="#"
              className="text-sm text-purple-600 underline mt-4 block hover:text-purple-700"
            >
              View all features
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
