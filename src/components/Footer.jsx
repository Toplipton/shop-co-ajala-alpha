import { Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

import Visa from "../assets/footerImages/Visa.svg";
import Mastercard from "../assets/footerImages/Mastercard.svg";
import Paypal from "../assets/footerImages/Paypal.svg";
import Applepay from "../assets/footerImages/ Pay.svg";
import Googlepay from "../assets/footerImages/G Pay.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-sm mt-9 pt-8 ">
      <div className="bg-black text-white rounded-2xl px-6 py-8 w-[90%] max-w-[1200px] mx-auto mt-[-60px] mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold font-integral text-center md:text-left max-w-md">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        <form className="flex flex-col gap-4 w-full md:w-[50%]">
          <div className="flex items-center bg-white text-black rounded-full px-4 py-2">
            <Mail size={20} className="mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 pt-20 pb-8 text-gray-800">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-bold mb-2 font-integral">SHOP.CO</h3>
          <p className="mb-4 font-satoshi font-normal">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 text-xl">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 font-satoshi">COMPANY</h4>
          <ul className="space-y-1">
            <li className="font-satoshi font-normal">About</li>
            <li className="font-satoshi font-normal">Features</li>
            <li className="font-satoshi font-normal">Works</li>
            <li className="font-satoshi font-normal">Career</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 font-satoshi">HELP</h4>
          <ul className="space-y-1">
            <li className="font-satoshi font-normal">Customer Support</li>
            <li className="font-satoshi font-normal">Delivery Details</li>
            <li className="font-satoshi font-normal">Terms & Conditions</li>
            <li className="font-satoshi font-normal">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 font-satoshi">FAQ</h4>
          <ul className="space-y-1">
            <li className="font-satoshi font-normal">Account</li>
            <li className="font-satoshi font-normal">Manage Deliveries</li>
            <li className="font-satoshi font-normal">Orders</li>
            <li className="font-satoshi font-normal">Payments</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2 font-satoshi">RESOURCES</h4>
          <ul className="space-y-1">
            <li className="font-satoshi font-normal">Free eBooks</li>
            <li className="font-satoshi font-normal">Development Tutorial</li>
            <li className="font-satoshi font-normal">How to - Blog</li>
            <li className="font-satoshi font-normal">Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 w-[90%] max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center text-xs">
        <p className="font-normal font-satoshi">
          Shop.co © 2000-2025, All Rights Reserved
        </p>
        <div className="flex gap-2 text-xl mt-2 sm:mt-0">
          <div className="flex gap-2 text-xl mt-2 sm:mt-0">
            <img
              src={Visa}
              alt="Visa"
              className="h-5 p-1 bg-white rounded-md shadow-sm"
            />
            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-5 p-1 bg-white rounded-md shadow-sm"
            />
            <img
              src={Paypal}
              alt="Paypal"
              className="h-5 p-1 bg-white rounded-md shadow-sm"
            />
            <img
              src={Applepay}
              alt="Apple Pay"
              className="h-5 p-1 bg-white rounded-md shadow-sm"
            />
            <img
              src={Googlepay}
              alt="Google Pay"
              className="h-5 p-1 bg-white rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
