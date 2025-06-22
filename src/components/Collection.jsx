import { Link } from "react-router-dom";

export default function Collection({ title, products }) {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-integral">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <div className="bg-[#F0F0F0] rounded-lg h-[200px] flex items-center justify-center p-4 hover:scale-105 transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
            </Link>

            <div className="mt-4 space-y-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-bold text-left font-satoshi hover:underline">
                  {product.name}
                </h3>
              </Link>

              <img src={product.rating} alt="Rating" className="w-[80px]" />

              <div className="flex items-center gap-3 mt-1">
                <p className="text-base font-bold text-left text-black font-satoshi">
                  ${product.price}
                </p>

                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}

                {product.discount && (
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-[2px] rounded-full font-semibold">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-neutral-100 text-black px-8 py-1 rounded-full font-normal hover:opacity-90 transition font-satoshi">
          View All
        </button>
      </div>
    </section>
  );
}
