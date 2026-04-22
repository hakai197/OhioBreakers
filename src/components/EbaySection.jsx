import { FiShoppingBag, FiExternalLink } from 'react-icons/fi';
import config from '../config';

export default function EbaySection() {
  const { ebay } = config;

  return (
    <section className="py-16 bg-brand-dark" id="shop">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <FiShoppingBag size={28} className="text-brand-gold flex-shrink-0" />
          <h2 className="font-display text-4xl text-white">Shop</h2>
        </div>

        {/* Store card */}
        <div className="flex flex-col items-center text-center py-16 bg-brand-gray rounded-2xl border border-white/10">
          {/* eBay wordmark */}
          <div className="text-6xl font-extrabold mb-6 leading-none select-none">
            <span className="text-red-500">e</span>
            <span className="text-blue-400">b</span>
            <span className="text-yellow-400">a</span>
            <span className="text-green-400">y</span>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-2">{ebay.storeName}</h3>
          <p className="text-gray-400 mb-8 max-w-md">
            Browse our full collection of trading cards, singles, sealed product, and more. New
            listings added regularly.
          </p>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-lg"
          >
            Visit Our Store <FiExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
