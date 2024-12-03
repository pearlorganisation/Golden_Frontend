import React from "react";

const Pricingplans = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Free Forever",
      features: ["1 user", "100 storage minutes", "250GB bandwidth", "$0.5/GB streaming overage"],
      keyFeatures: ["Video chapters and SEO", "Engagement analytics"],
      button: "Free Forever",
      highlight: false,
    },
    {
      title: "Starter",
      price: "$10/month",
      description: "$19 billed monthly",
      features: ["2 users", "1200 storage minutes", "2 TB bandwidth / month", "$0.15 / GB streaming overage"],
      keyFeatures: ["Video engagement tools", "Player customization"],
      button: "Get Starter",
      highlight: false,
    },
    {
      title: "Growth",
      price: "$40/month",
      description: "$59 billed monthly",
      features: ["5 users", "4000 storage minutes", "2 TB bandwidth / month", "$0.10 / GB streaming overage"],
      keyFeatures: ["Advertising integrations", "API access (+ Zapier)"],
      button: "Get Growth",
      highlight: true,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col border rounded-lg shadow-lg p-6 w-72 ${
            plan.highlight ? "border-purple-600" : "border-gray-200"
          }`}
        >
          {plan.highlight && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-700 px-4 py-1 text-sm rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-xl font-semibold">{plan.title}</h3>
          <p className="text-4xl font-bold mt-4">{plan.price}</p>
          <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
          <button
            className={`mt-4 px-4 py-2 text-sm font-medium rounded ${
              plan.highlight ? "bg-purple-600 text-white" : "border border-purple-600 text-purple-600"
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
          <p className="text-sm text-gray-800 mt-4 font-medium">Key features</p>
          <ul className="mt-2 space-y-2 text-gray-600">
            {plan.keyFeatures.map((keyFeature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {keyFeature}
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm text-purple-600 underline mt-4 block">
            View all features
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pricingplans;
