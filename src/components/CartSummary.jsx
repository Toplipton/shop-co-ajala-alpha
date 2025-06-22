// src/components/CartSummary.jsx
import React from "react";
import { Tag } from "lucide-react";

const CartSummary = ({ subtotal, discount, deliveryFee, total }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-[350px]">
      <h2 className="text-lg font-bold mb-4 font-satoshi">Order Summary</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="font-satoshi font-normal">Subtotal</span>
          <span className="font-bold font-satoshi">${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span className="font-normal font-satoshi">Discount (-20%)</span>
          <span className="font-bold font-satoshi">-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal font-satoshi">Delivery Fee</span>
          <span className="font-bold font-satoshi">${deliveryFee}</span>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-lg ">
        <span className="font-normal font-satoshi">Total</span>
        <span className="font-bold font-satoshi">${total}</span>
      </div>

      <div className="flex items-center mt-4 border rounded-full overflow-hidden">
        <span className="pl-3">
          <Tag size={16} className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Add promo code"
          className="flex-1 px-2 py-2 outline-none text-sm"
        />
        <button className="bg-black text-white px-4 py-2 rounded-none text-sm font-medium font-satoshi">Apply</button>
      </div>

      <button className="w-full mt-6 bg-black text-white py-3 rounded-full font-semibold hover:opacity-90">
        Go to Checkout →
      </button>
    </div>
  );
};

export default CartSummary;

