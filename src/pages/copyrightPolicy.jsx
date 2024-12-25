import React from 'react';

const CopyrightPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-12">
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-xl mt-12 mb-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
        Golden Med Notes - Copyright Policy
      </h1>  
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
        Golden Med Notes reserves all rights to its content, including the business name, logo, and all associated materials. By purchasing or accessing our notes, you agree to the following terms:
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4"> Protected Content</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>
              All handwritten and digital notes, including text, layout, design, and embedded branding, are the exclusive property of Golden Med Notes.
            </li>
            <li>
              The <strong className="text-indigo-600">Golden Med Notes</strong> logo, present on every page of our materials, is strictly for identification and branding purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Logo and Name Usage</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>
              The logo and business name, “<strong className="text-indigo-600">Golden Med Notes</strong>,” are registered trademarks and must not be used, replicated, or altered without explicit written permission.
            </li>
            <li>
              As the logo is present on every page of our notes, any attempt to use or distribute these notes for purposes other than personal study violates our copyright.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4"> Prohibited Actions</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>
              Sharing or reproducing materials with the logo for personal, educational, or commercial purposes without consent is strictly prohibited.
            </li>
            <li>
              Use of the <strong className="text-indigo-600">Golden Med Notes</strong> logo for promotional, academic, or other activities without written permission will result in legal action.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4"> Watermarking</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>
              All notes are delivered with personalized watermarks containing the buyer’s name and phone number to prevent unauthorized distribution.
            </li>
            <li>
              Unauthorized removal of watermarks or alteration of the logo is considered a breach of copyright.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4"> Enforcement</h2>
          <p className="text-lg text-gray-700">
            Violators of this copyright policy will be subject to legal consequences, including penalties, fines, or other actions as per{' '}
            <strong className="text-indigo-600">Indian copyright laws</strong>.
          </p>
        </section>
      </div>
    </div></div>
  );
};

export default CopyrightPolicy;
