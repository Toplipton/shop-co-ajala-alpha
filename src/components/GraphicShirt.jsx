import React, { useState } from "react";
import { Link } from "react-router-dom";

import productMain from "../assets/productImages/main.svg";
import productBack from "../assets/productImages/back.svg";
import productModel from "../assets/productImages/model.svg";
import rating45 from "../assets/icon/rating45.svg";

const GraphicShirt = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("olive");

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = [
    { color: "olive", code: "#4E4B39" },
    { color: "green", code: "#2F4F4F" },
    { color: "navy", code: "#2E2E6A" },
  ];

  const imageList = [productMain, productBack, productModel];
  const [mainImage, setMainImage] = useState(productMain);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex lg:flex-col gap-4 lg:h-[500px] lg:justify-between hidden lg:block">
          {imageList.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-28 object-cover rounded-md border cursor-pointer ${
                mainImage === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex lg:hidden overflow-x-auto gap-3 mb-4">
          {imageList.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-mobile-${index}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-28 object-cover rounded-md border cursor-pointer flex-shrink-0 ${
                mainImage === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <img
            src={mainImage}
            alt="Product"
            className="max-h-full w-auto object-contain rounded-md border-2 border-black"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-integral">
            ONE LIFE GRAPHIC T-SHIRT
          </h2>
          <div className="flex items-center gap-2">
            <img src={rating45} alt="Rating" className="w-20" />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-2xl font-bold text-black font-satoshi">
              $260
            </span>
            <span className="line-through text-gray-400 text-xl font-satoshi">
              $300
            </span>
            <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
              -40%
            </span>
          </div>

          <p className="text-sm text-gray-600 font-normal font-satoshi">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <hr />

          <div>
            <p className="font-normal mb-2 font-satoshi">Select Colors</p>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c.color}
                  onClick={() => setSelectedColor(c.color)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 relative transition-all duration-300 ${
                    selectedColor === c.color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.code }}
                >
                  {selectedColor === c.color && (
                    <span className="text-white text-xs font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-normal mb-2 font-satoshi">Choose Size</p>
            <div className="flex gap-2 flex-wrap font-normal font-satoshi">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center border rounded-full px-4 py-1">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <Link to="/cart">
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium font-satoshi">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicShirt;
