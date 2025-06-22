import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
    >
      <div className="bg-[#F0F0F0] rounded-lg h-[180px] flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>
      <h3 className="text-md font-bold mb-1 font-satoshi">{product.name}</h3>

      <img src={product.rating} alt="Rating" className="w-[80px]" />

      <div className="flex items-center gap-2 text-sm">
        <span className="font-bold text-black font-satoshi">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="line-through text-gray-400">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <span className="text-red-500 text-xs">{product.discount}</span>
        )}
      </div>
    </Link>
  );
}
