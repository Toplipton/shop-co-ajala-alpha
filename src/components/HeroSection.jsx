import topStar from "../assets/images/bigStar.svg";
import buttomStar from "../assets/images/smallStar.svg";
import heroImage from "../assets/images/heroPicture.jpg";

export default function HeroSection() {
  return (
    <section className="bg-[#F0F0F0] px-4 sm:px-6 md:px-16 py-10 md:py-0 flex items-center min-h-[550px] md:h-[500px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug font-integral">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="text-black-400 text-base md:text-lg font-satoshi">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-black text-white mt-4 py-3 px-8 rounded-full font-semibold hover:opacity-90 transition">
            Shop Now
          </button>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 text-black font-semibold">
            <div>
              <h3 className="text-2xl font-bold font-satoshi">200+</h3>
              <p className="text-sm text-gray-400 font-satoshi">
                International Brands
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-satoshi">2,000+</h3>
              <p className="text-sm text-gray-400 font-satoshi">
                High-Quality Products
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-satoshi">30,000+</h3>
              <p className="text-sm text-gray-400 font-satoshi">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-[500px] h-[300px] md:h-full flex justify-center items-center overflow-visible">
          <img
            src={topStar}
            alt="Top Star"
            className="absolute top-4 left-4 w-8 h-8"
          />

          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-contain sm:object-cover z-10"
          />

          <img
            src={buttomStar}
            alt="Small Star"
            className="absolute bottom-[10%] right-[30%] w-10 h-10 z-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
