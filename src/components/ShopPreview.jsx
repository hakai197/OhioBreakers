import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useData } from "../context/DataContext";

export default function ShopPreview() {
  const { products } = useData();
  const preview = products.filter((p) => p.inStock).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Shop <span className="text-brand-gold">Now</span>
        </h2>
        <Link to="/shop" className="text-brand-gold hover:underline text-sm">
          View All &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {preview.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
