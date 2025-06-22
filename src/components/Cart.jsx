// src/pages/CartPage.jsx
import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import graphics from "../assets/productImages/Graphics.svg"
import checkered  from '../assets/images/checkered shirt.svg';
import jeans from '../assets/images/Jeans.svg';


const initialCart = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    image: graphics ,
    price: 145,
    size: "Large",
    color: "White",
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    image: checkered,
    price: 180,
    size: "Medium",
    color: "Red",
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    image: jeans,
    price: 240,
    size: "Large",
    color: "Blue",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-[80%]  mx-auto pt-5 pb-14">
      <h1 className="text-2xl font-bold font-integral mb-6">YOUR CART</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left - Cart Items */}
        <div className="flex-1">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>

        {/* Right - Summary */}
        <CartSummary
          subtotal={subtotal.toFixed(2)}
          discount={discount.toFixed(2)}
          deliveryFee={deliveryFee.toFixed(2)}
          total={total.toFixed(2)}
        />
      </div>
    </div>
  );
};

export default Cart;
