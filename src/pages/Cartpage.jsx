import React from "react";
import Navbar from "../components/Navbar";
import MainNavbar from "../components/MainNavbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <MainNavbar />
      <hr />
      <Cart />

      <Footer />
    </div>
  );
};

export default CartPage;
