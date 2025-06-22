import Navbar from "../components/Navbar";
import MainNavbar from "../components/MainNavbar";
import HeroSection from "../components/HeroSection";
import DressStyle from "../components/DressStyle";
import Brand from "../components/Brand";
import Collection from "../components/Collection";
import Review from "../components/Review";
import Footer from "../components/Footer";

import rating35 from "../assets/icon/rating35.svg";
import rating45 from "../assets/icon/rating45.svg";
import rating50 from "../assets/icon/rating50.svg";
import rating40 from "../assets/icon/rating40.svg";
import rating30 from "../assets/icon/rating30.svg";

import shirt1 from "../assets/images/T-shirt.svg";
import shirt2 from "../assets/images/Jeans.svg";
import shirt3 from "../assets/images/checkered shirt.svg";
import shirt4 from "../assets/images/sleeve.svg";

import shirtSecond1 from "../assets/images/vertical stripped.svg";
import shirtSecond2 from "../assets/images/courage graphics.svg";
import shirtSecond3 from "../assets/images/loose fit.svg";
import shirtSecond4 from "../assets/images/faded skinny.svg";

const newArrivals = [
  {
    id: 1,
    image: shirt1,
    name: "T-shirt with Tape Details",
    rating: rating45,
    price: 120,
  },
  {
    id: 2,
    image: shirt2,
    name: "Skinny Fit Jeans",
    rating: rating35,
    price: 240,
    originalPrice: 260,
    discount: "-20%",
  },
  {
    id: 3,
    image: shirt3,
    name: "Checkered Shirt",
    rating: rating45,
    price: 180,
  },
  {
    id: 4,
    image: shirt4,
    name: "Sleeve Striped T-shirt",
    rating: rating45,
    price: 130,
    originalPrice: 160,
    discount: "-30%",
  },
];

const topSelling = [
  {
    id: 5,
    image: shirtSecond1,
    name: "Vertical Stripped Shirt",
    rating: rating50,
    price: 212,
    originalPrice: 232,
    discount: "-30%",
  },
  {
    id: 6,
    image: shirtSecond2,
    name: "Courage Graphic T-shirt",
    rating: rating40,
    price: 145,
  },
  {
    id: 7,
    image: shirtSecond3,
    name: "Loose Fit Bermuda Shorts",
    rating: rating30,
    price: 80,
  },
  {
    id: 8,
    image: shirtSecond4,
    name: "Faded Skinny Jeans",
    rating: rating45,
    price: 210,
  },
];

function Landingpage() {
  return (
    <div className="App">
      <Navbar />
      <MainNavbar />
      <HeroSection />
      <Brand />
      <Collection title="NEW ARRIVALS" products={newArrivals} />
      <hr />
      <Collection title="TOP SELLING" products={topSelling} />
      <DressStyle />
      <Review />
      <Footer />
    </div>
  );
}

export default Landingpage;
