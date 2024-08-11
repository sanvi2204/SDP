// src/PaymentConfirmation.js
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentConfirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Payment Confirmation</h2>
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4-4M9 12l-2-2m2 2l2-2m-2 2l4-4m2 0a9 9 0 11-18 0a9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700 mb-4">
          Your payment has been successfully processed.
        </p>
        <p className="text-gray-500 mb-6">
          Thank you for booking with us!
        </p>
        <Link to="/" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentConfirmation;