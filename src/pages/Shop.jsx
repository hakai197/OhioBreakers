import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import { useData } from "../context/DataContext";

const categories = ["All", "Pokemon", "MTG", "Sports"];
const priceRanges = ["All Prices", "Under $50", "$50–$150", "Over $150"];

function matchesPrice(product, range) {
  switch (range) {
    case "Under $50":
      return product.price < 50;
    case "$50–$150":
      return product.price >= 50 && product.price <= 150;
    case "Over $150":
      return product.price > 150;
    default:
      return true;
  }
}

export default function Shop() {
  const { products } = useData();
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All Prices");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = category === "All" || p.category === category;
      const priceMatch = matchesPrice(p, priceRange);
      return catMatch && priceMatch;
    });
  }, [category, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl text-white">
          Card <span className="text-brand-gold">Shop</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Browse our selection of trading card packs, boxes, and singles.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <FilterBar
          filters={categories}
          active={category}
          onSelect={setCategory}
          label="Category"
        />
        <FilterBar
          filters={priceRanges}
          active={priceRange}
          onSelect={setPriceRange}
          label="Price"
        />
      </div>

      {/* Products */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No products match your filters.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
