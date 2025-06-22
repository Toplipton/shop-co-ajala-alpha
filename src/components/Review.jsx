import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is not only diverse but also on-point.",
  },
  {
    name: "Monica R.",
    text: "Love the trendy styles and fast delivery. Shop.co never disappoints!",
  },
  {
    name: "Daniel G.",
    text: "Shop.co helped me revamp my entire wardrobe. I love the simplicity and elegance of their clothing line.",
  },
];

const Review = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto my-16 mb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold font-integral">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-1 sm:px-0"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[85%] sm:min-w-[300px] max-w-[300px] bg-white border rounded-xl shadow-sm p-4 flex-shrink-0"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400 text-lg">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
            </div>
            <p className="font-bold mb-1 font-satoshi">
              {review.name} <span className="text-green-500 font-bold">✔</span>
            </p>
            <p className="text-sm text-gray-500 font-normal font-satoshi">
              “{review.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
