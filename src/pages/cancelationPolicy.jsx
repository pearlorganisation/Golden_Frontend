import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-28">
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-lg shadow-xl mb-12">
        <h1 className="text-4xl font-extrabold text-center text-red-700 mb-6">Golden Med Notes - Cancellation Policy</h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
          As all our products are digital, cancellations are not permitted after payment. Please read our terms carefully.
        </p>

        <div className="space-y-6">
          <section>
            <p className="text-lg text-gray-700">
              Due to the nature of digital content, once a purchase has been made, we are unable to offer cancellations, exchanges, or refunds.
            </p>
          </section>

          <section>
            <p className="text-lg text-gray-700">
              If you need any assistance or have any concerns regarding your order, feel free to contact us at:
            </p>
            <p className="text-lg text-indigo-600">
              <a href="mailto:goldenmednotes@gmail.com" className="hover:underline font-semibold">
                goldenmednotes@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
