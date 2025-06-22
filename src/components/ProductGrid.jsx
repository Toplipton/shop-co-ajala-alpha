import ProductCard from "./ProductCard";
import rating35 from "../assets/icon/rating35.svg";
import rating45 from "../assets/icon/rating45.svg";
import rating50 from "../assets/icon/rating50.svg";
import rating40 from "../assets/icon/rating40.svg";
import rating30 from "../assets/icon/rating30.svg";
import graphics from "../assets/productImages/Graphics.svg";
import tipping from "../assets/productImages/Tipping.svg";
import stripes from "../assets/productImages/Stripes.svg";
import jeans from "../assets/images/Jeans.svg";
import checkered from "../assets/images/checkered shirt.svg";
import sleeve from "../assets/images/sleeve.svg";
import shirtSecond1 from "../assets/images/vertical stripped.svg";
import shirtSecond2 from "../assets/images/courage graphics.svg";
import shirtSecond3 from "../assets/images/loose fit.svg";

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    image: graphics,
    price: 145,
    originalPrice: null,
    discount: null,
    rating: rating35,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    image: tipping,
    price: 180,
    rating: rating45,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    image: stripes,
    price: 120,
    originalPrice: 150,
    discount: "30%",
    rating: rating50,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    image: jeans,
    price: 240,
    originalPrice: 260,
    discount: "20%",
    rating: rating35,
  },
  {
    id: 5,
    name: "Checkered Shirt",
    image: checkered,
    price: 180,
    originalPrice: null,
    discount: null,
    rating: rating45,
  },
  {
    id: 6,
    name: "Sleeve stripped T-shirt",
    image: sleeve,
    price: 130,
    originalPrice: 160,
    discount: "30%",
    rating: rating45,
  },
  {
    id: 7,
    image: shirtSecond1,
    name: "Vertical Stripped Shirt",
    price: 212,
    originalPrice: 232,
    discount: "-30%",
    rating: rating50,
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    image: shirtSecond2,
    price: 145,
    originalPrice: null,
    discount: null,
    rating: rating40,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    image: shirtSecond3,
    originalPrice: null,
    discount: null,
    rating: rating30,
    price: 80,
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
