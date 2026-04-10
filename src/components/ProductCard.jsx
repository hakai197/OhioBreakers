import { FiExternalLink, FiHeart } from "react-icons/fi";
import { useLikes } from "../context/LikesContext";
import { useAuth } from "../context/AuthContext";

export default function ProductCard({ product }) {
  const { toggleLike, isLiked } = useLikes();
  const { user, setShowAuthModal } = useAuth();
  const liked = isLiked("product", product.id);

  const handleLike = () => {
    if (!user) return setShowAuthModal(true);
    toggleLike("product", product.id);
  };

  return (
    <div className="bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all group flex flex-col">
      {/* Image */}
      <div className="aspect-square bg-brand-blue/20 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-brand-red text-white text-sm font-semibold px-4 py-1 rounded">
              SOLD OUT
            </span>
          </div>
        )}
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-2 rounded-full bg-brand-dark/70 transition-colors ${
            liked ? "text-brand-red" : "text-gray-300 hover:text-brand-red"
          }`}
        >
          <FiHeart size={18} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-brand-gold">{product.category} &middot; {product.set}</span>
        <h3 className="font-semibold text-white mt-1 line-clamp-2 text-sm group-hover:text-brand-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
          <a
            href="https://www.ebay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-red hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <FiExternalLink size={16} />
            eBay
          </a>
        </div>
      </div>
    </div>
  );
}
