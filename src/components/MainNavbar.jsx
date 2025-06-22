import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import searchIcon from "../assets/icon/search.svg";
import cartIcon from "../assets/icon/realCart.svg";
import accountIcon from "../assets/icon/user.svg";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <Link to="/" className="text-black font-bold text-2xl font-integral">
          SHOP.CO
        </Link>
      </div>

      <div className="hidden md:flex items-center flex-1 gap-6 text-black text-sm font-medium justify-center">
        <div className="flex items-center gap-1 cursor-pointer font-satoshi">
          Shop <FaChevronDown className="text-xs" />
        </div>
        <span className="cursor-pointer font-satoshi">On Sale</span>
        <span className="cursor-pointer font-satoshi">New Arrivals</span>
        <span className="cursor-pointer font-satoshi">Brands</span>

        <div className="relative ml-6">
          <img
            src={searchIcon}
            alt="search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search for products"
            className="pl-12 pr-4 py-2 border border-gray-400 rounded-full text-base w-64 md:w-[300px] lg:w-[340px] focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to={"/cart"}>
          <img src={cartIcon} alt="cart" className="w-5 h-5 cursor-pointer" />
        </Link>
        <img
          src={accountIcon}
          alt="account"
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-50 shadow-md md:hidden py-4 px-6 space-y-4 text-black font-satoshi text-sm">
          <div className="flex items-center gap-1">
            Shop <FaChevronDown className="text-xs" />
          </div>
          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brands</p>

          <div className="relative">
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-2 border border-gray-400 rounded-full text-base w-full focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
