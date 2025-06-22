import { Link } from "react-router-dom";
import casualImg from "../assets/images/casual.svg";
import formalImg from "../assets/images/formal.svg";
import partyImg from "../assets/images/party.svg";
import gymImg from "../assets/images/Gym.svg";

const DressStyle = () => {
  return (
    <section className="bg-[#f0f0f0] rounded-2xl mx-auto my-[50px] w-[90%] max-w-[1200px] p-6 pb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-integral">
        BROWSE BY DRESS STYLE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Link to="/category" className="col-span-1">
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={casualImg}
              alt="Casual"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <Link
          to="/category"
          className="col-span-1 md:col-span-2 bg-white rounded-xl overflow-hidden"
        >
          <img
            src={formalImg}
            alt="Formal"
            className="w-full h-full object-cover"
          />
        </Link>

        <Link
          to="/category"
          className="col-span-1 md:col-span-2 bg-white rounded-xl overflow-hidden"
        >
          <img
            src={partyImg}
            alt="Party"
            className="w-full h-full object-cover"
          />
        </Link>

        <Link
          to="/category"
          className="col-span-1 bg-white rounded-xl overflow-hidden"
        >
          <img src={gymImg} alt="Gym" className="w-full h-full object-cover" />
        </Link>
      </div>
    </section>
  );
};

export default DressStyle;
