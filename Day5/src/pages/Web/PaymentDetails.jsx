// src/PaymentDetails.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const PaymentDetails = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvc" className="block text-gray-700 font-bold mb-2">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cardHolderName" className="block text-gray-700 font-bold mb-2">
              Card Holder Name
            </label>
            <input
              type="text"
              id="cardHolderName"
              name="cardHolderName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            <NavLink to="/PaymentConfirmation">
            Pay Now
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;