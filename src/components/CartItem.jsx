// src/components/CartItem.jsx
import React from "react";
import { Trash2 } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-start justify-between rounded-xl shadow-md border-b py-4">
      {/* Product Info */}
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-contain rounded-md bg-gray-100"
        />
        <div className="space-y-1">
          <h3 className="font-bold font-satoshi text-sm md:text-base">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 font-normal font-satoshi">Size: {item.size}</p>
          <p className="text-sm text-gray-600 font-normal font-satoshi">Color: {item.color}</p>
          <p className="font-bold text-black mt-1 font-satoshi">${item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex  flex-col items-center gap-12">
         <button onClick={onRemove} className="text-red-500">
          <Trash2 size={18} />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          <button onClick={onDecrease} className="text-xl font-bold">-</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrease} className="text-xl font-bold">+</button>
        </div>
       
      </div>
    </div>
  );
};

export default CartItem;

