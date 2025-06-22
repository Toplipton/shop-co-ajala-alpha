import arrowLeft from "../assets/icon/arrow-left.svg";
import arrowRight from "../assets/icon/arrow-right.svg";

export default function Pagination() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 text-sm">
      <button className="px-4 py-2 flex items-center gap-2 border rounded font-satoshi font-medium">
        <img src={arrowLeft} alt="Previous" className="w-4 h-4" />
        Previous
      </button>

      <div className="flex flex-wrap justify-center gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-3 py-1 border rounded hover:bg-black hover:text-white transition-all duration-200"
          >
            {page}
          </button>
        ))}
      </div>

      <button className="px-4 py-2 flex items-center gap-2 border rounded font-satoshi font-medium">
        Next
        <img src={arrowRight} alt="Next" className="w-4 h-4" />
      </button>
    </div>
  );
}
