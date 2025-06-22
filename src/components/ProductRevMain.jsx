import React, { useState } from "react";
import ProductReviews from "../components/ProductReviews";

const reviews = [
  {
    name: "Samantha D.",
    rating: 4.5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    name: "Ethan R.",
    rating: 4.5,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
    date: "August 16, 2023",
  },
  {
    name: "Olivia P.",
    rating: 5,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
  },
  {
    name: "Liam K.",
    rating: 5,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
  },
  {
    name: "Ava H.",
    rating: 4.5,
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
  },
];

const ProductRevMain = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const tabClass = (tab) =>
    `pb-2 px-4 border-b-2 transition-all duration-300 ${
      activeTab === tab
        ? "border-black text-black font-medium"
        : "border-transparent text-gray-500 hover:text-black"
    }`;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between space-x-6 pt-10 border-b border-gray-200">
        <button
          classname="font-satoshi font-normal"
          onClick={() => setActiveTab("details")}
          className={tabClass("details")}
        >
          Product Details
        </button>
        <button
          className="font=satoshi font-normal"
          onClick={() => setActiveTab("reviews")}
          className={tabClass("reviews")}
        >
          Rating & Reviews
        </button>
        <button
          classname="font-satoshi font-normal"
          onClick={() => setActiveTab("FAQS")}
          className={tabClass("FAQS")}
        >
          FAQs
        </button>
      </div>

      {activeTab === "reviews" && <ProductReviews reviews={reviews} />}
    </div>
  );
};

export default ProductRevMain;
