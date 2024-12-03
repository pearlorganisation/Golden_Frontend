/* eslint-disable react/prop-types */
import { useState } from "react";

const TermsOfService = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p className="text-sm text-gray-700 mb-4">
          By accessing this content, you agree to the following terms:
        </p>
        <ul className="text-left mb-6">
          <li>
            📸 Screenshots or screen recording of this content is prohibited.
          </li>
          <li>❌ Misuse may result in legal consequences.</li>
          <li>
            🔒 The content is for personal use only. Commercial use is
            prohibited.
          </li>
        </ul>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onAccept}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Accept
          </button>
          <button
            onClick={onDecline}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
