import React from 'react';

const DisclaimerPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-28">
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-xl mt-12 mb-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">Golden Med Notes - Disclaimer Policy</h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
        Golden Med Notes provides educational content based on high-yield NEET PG topics. Please note:
      </p>

      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>The notes are intended for personal use as supplementary study materials.</li>
            <li>While we strive for accuracy, Golden Med Notes is not liable for any errors, omissions, or outcomes based on the use of our content.</li>
            <li>We do not guarantee success in NEET PG exams, as results depend on multiple factors, including the student’s preparation efforts.</li>
          </ul>
        </section>

        <section>
          <p className="text-lg text-gray-700">
            By using our content, you acknowledge and accept the terms of this Disclaimer Policy. It is your responsibility to verify any information and use the materials in conjunction with other reputable study resources.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          For any concerns, feel free to reach out to us at{' '}
          <a href="mailto:goldenmednotes@gmail.com" className="text-indigo-600 hover:underline font-semibold">
            goldenmednotes@gmail.com
          </a>.
        </p>
      </div>
    </div></div>
  );
};

export default DisclaimerPolicy;
