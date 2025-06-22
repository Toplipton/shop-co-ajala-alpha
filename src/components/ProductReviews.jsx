import React from "react";
import filter from "../assets/images/filter.svg";
import { FaChevronDown } from "react-icons/fa";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-500">
        ★
      </span>
    );
  }
  return stars;
};

const ProductReviews = ({ reviews }) => {
  return (
    <section className="bg-white py-10 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2 font-satoshi">
            All Reviews{" "}
            <span className="text-gray-500 text-base font-normal font-satoshi">
              ({reviews.length})
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <img
            className="p-2 bg-gray-300 rounded-full"
            src={filter}
            alt="filter"
          />
          <button className="bg-gray-300 text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium font-satoshi">
            Latest <FaChevronDown className="text-xs" />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full font-satoshi font-medium">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-xl p-5 shadow-sm">
            <div className="flex items-center space-x-1 text-yellow-500 mb-2">
              {renderStars(review.rating)}
            </div>
            <h3 className="font-bold text-gray-900 flex items-center gap-2 font-satoshi">
              {review.name} <span className="text-green-500 text-xl">●</span>
            </h3>
            <p className="text-gray-700 mt-2 font-satoshi font-normal">
              "{review.text}"
            </p>
            <p className="text-sm text-gray-500 mt-4 font-satoshi font-medium">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 rounded-full border border-gray-400 hover:bg-gray-100 text-sm font-satoshi font-medium">
          Load More Reviews
        </button>
      </div>
    </section>
  );
};

export default ProductReviews;
