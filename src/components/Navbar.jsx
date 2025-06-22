import { useState } from "react";
import HideButton from "./Hidebutton";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white py-2 px-4 flex items-center justify-between font-integral">
      <p className="text-sm md:text-base font-medium text-center flex-1 font-satoshi">
        Signup and get 20% off your first order.{" "}
        <a href="/signup" className="underline">
          Sign Up Now
        </a>
      </p>

      <HideButton
        onClose={() => setIsVisible(false)}
        className="text-white hover:text-gray-500"
      />
    </div>
  );
}
