import Navbar from "../components/Navbar";

import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import ProductRevMain from "../components/ProductRevMain";

import rating35 from "../assets/icon/rating35.svg";
import rating45 from "../assets/icon/rating45.svg";
import rating50 from "../assets/icon/rating50.svg";
import rating40 from "../assets/icon/rating40.svg";
import rating30 from "../assets/icon/rating30.svg";

import shirt1 from "../assets/productImages/Contrast.svg";
import shirt2 from "../assets/productImages/Graphics.svg";
import shirt3 from "../assets/productImages/Tipping.svg";
import shirt4 from "../assets/productImages/Stripes.svg";
import GraphicShirt from "../components/GraphicShirt";

const alsoLike = [
  {
    id: 9,
    image: shirt1,
    name: "Polo with Contrast Trims",
    rating: rating40,
    price: 212,
    originalPrice: 242,
    discount: "-20%",
  },

  {
    id: 10,
    image: shirt2,
    name: "Gradient Graphic T-shirt",
    rating: rating35,
    price: 145,
  },

  {
    id: 11,
    image: shirt3,
    name: "Checkered Shirt",
    rating: rating45,
    price: 180,
  },
  {
    id: 12,
    image: shirt4,
    name: "Black Striped T-shirt",
    rating: rating50,
    price: 120,
    originalPrice: 150,
    discount: "-30%",
  },
];

const Productpage = () => {
  return (
    <div>
      <Navbar />
      <MainNavbar />

      <GraphicShirt />
      <ProductRevMain />
      <hr />

      <Collection title="YOU MIGHT ALSO LIKE" products={alsoLike} />
      <Footer />
    </div>
  );
};

export default Productpage;
