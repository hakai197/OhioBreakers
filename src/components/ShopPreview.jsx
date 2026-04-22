import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useData } from "../context/DataContext";

export default function ShopPreview({ compact = false }) {
  const { products } = useData();
  const preview = products.filter((p) => p.inStock).slice(0, compact ? 4 : 4);

  return (
    <section className={`px-4 ${compact ? 'py-8' : 'max-w-7xl mx-auto py-16'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`font-display text-white ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
          Shop <span className="text-brand-gold">Now</span>
        </h2>
        <Link to="/shop" className="text-brand-gold hover:underline text-sm">
          View All on eBay &rarr;
        </Link>
      </div>
      <div className={compact ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'}>
        {preview.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
