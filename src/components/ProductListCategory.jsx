import SidebarFilter from "../components/SidebarFilter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import down from "../assets/icon/down.svg";

export default function ProductListPage() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-12 py-8 bg-[#F9F9F9]">
      <aside className="md:w-1/4 mb-6 md:mb-0">
        <SidebarFilter />
      </aside>

      <main className="md:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold font-satoshi">Casual</h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="text-sm sm:text-base">Showing 1-10 of 100 products</p>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base">Sort by:</span>
              <h1 className="font-bold font-satoshi flex items-center gap-1">
                Most Popular
                <img src={down} alt="down" className="w-3 h-3" />
              </h1>
            </div>
          </div>
        </div>

        <ProductGrid />
        <Pagination />
      </main>
    </div>
  );
}
