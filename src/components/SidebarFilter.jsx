import React, { useState } from "react";
import filter from "../assets/images/filter.svg";
import side from "../assets/icon/side.svg";
import top from "../assets/icon/Top.svg";

const colors = [
  "#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5",
  "#063AF5", "#7D06F5", "#F506A4", "#ffffff", "#000000"
];

const sizes = [
  "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
];

const minPrice = 50;
const maxPrice = 200;

export default function SidebarFilter() {
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [price, setPrice] = useState(50);

  const percentage = ((price - minPrice) / (maxPrice - minPrice)) * 100;

  return (
    <aside className="w-full max-w-[280px] p-4 border rounded-lg space-y-6">
      {/* Filter Heading */}
      <div className="flex flex-row justify-between">
        <h3 className="text-lg font-bold border-b pb-2 font-satoshi">Filters</h3>
        <img className="bg-white rounded" src={filter} alt="filter" />
      </div>
      <hr />

      {/* Category List */}
      <div>
        <ul className="space-y-1 text-sm text-gray-700">
          {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((cat) => (
            <li key={cat} className="hover:underline cursor-pointer flex justify-between font-satoshi font-normal">
              {cat} <img src={side} alt="side" />
            </li>
          ))}
        </ul>
      </div>
      <hr />

      {/* Price Range */}
      <div>
        <h4 className="font-bold mb-2 font-satoshi flex justify-between items-center">
          Price <img src={top} alt="toggle" />
        </h4>

        <div className="flex justify-between text-sm font-satoshi mb-2">
          <span>${minPrice}</span>
          <span>${price}</span>
          <span>${maxPrice}</span>
        </div>

        <div className="relative w-full h-6">
          {/* Base Track */}
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-gray-300 rounded-full" />

          {/* Active Track */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-black rounded-full"
            style={{ width: `${percentage}%` }}
          />

          {/* Range Input */}
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-6 appearance-none bg-transparent relative z-10"
            style={{
              WebkitAppearance: "none",
            }}
          />
        </div>
      </div>
      <hr />

      {/* Colors */}
      <div>
        <h4 className="font-bold mb-2 font-satoshi flex justify-between">Colors <img src={top} alt="top" /></h4>
        <div className="flex flex-wrap gap-5">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedColor === color ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && <span className="text-white !text-xs font-bold">✓</span>}
            </button>
          ))}
        </div>
      </div>
      <hr />

      {/* Sizes */}
      <div>
        <h4 className="font-bold mb-2 font-satoshi flex justify-between">Size <img src={top} alt="top" /></h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded-full text-sm font-normal border font-satoshi ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <hr />

      {/* Dress Style */}
      <div>
        <h4 className="font-bold mb-2 font-satoshi flex justify-between">Dress Style <img src={top} alt="top" /></h4>
        <ul className="space-y-1 text-sm text-gray-700">
          {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
            <li key={style} className="hover:underline cursor-pointer flex justify-between font-satoshi font-normal">
              {style} <img src={side} alt="side" />
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full py-2 bg-black text-white rounded-full hover:opacity-90 font-satoshi font-medium">
        Apply Filter
      </button>

      {/* Custom Slider Style */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          background: black;
          border-radius: 9999px;
          cursor: pointer;
          margin-top: -7px;
          position: relative;
          z-index: 10;
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: black;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          background: transparent;
        }

        input[type="range"]::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </aside>
  );
}
