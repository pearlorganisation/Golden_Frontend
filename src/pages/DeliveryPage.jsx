import React from 'react';

const DeliveryPolicy = () => {
  return (
    <div className="bg-black  min-h-screen py-28">
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-xl mt-12 mb-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
        Golden Med Notes - Delivery Policy
      </h1>
      
      <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
        We ensure the prompt delivery of all purchased products as outlined below:
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            • Digital Notes
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Notes are delivered via email within 5 minutes of purchase.</li>
            <li>All notes are watermarked with the buyer’s name and phone number.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            • Technical Issues
          </h2>
          <p className="text-lg text-gray-700">
            For any delivery issues, contact us at{' '}
            <a
              href="mailto:goldenmednotes@gmail.com"
              className="text-indigo-600 hover:underline font-semibold"
            >
              goldenmednotes@gmail.com
            </a>{' '}
            or call us at{' '}
            <span className="font-semibold text-indigo-600">+91 8017379245</span>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            • Important Notes
          </h2>
          <p className="text-lg text-gray-700">
            Please ensure you provide accurate email details during checkout to avoid any delivery issues.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Need help? We’re here to assist you with any delivery concerns.
        </p>
      </div>
    </div></div>
  );
};

export default DeliveryPolicy;
