import { useState, useEffect } from 'react';
import { FiShoppingBag, FiExternalLink } from 'react-icons/fi';
import config from '../config';

/** Pull price out of an eBay RSS item title if it ends with " - $XX.XX" */
function extractPrice(title) {
  const match = title.match(/\$[\d,]+\.\d{2}/);
  return match ? match[0] : null;
}

/** Strip the price suffix eBay sometimes appends to the title */
function cleanTitle(title) {
  return title.replace(/\s*-\s*\$[\d,]+\.\d{2}\s*$/, '').trim();
}

export default function EbaySection() {
  const { ebay } = config;
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isConfigured =
    ebay.sellerUsername && ebay.sellerUsername !== 'YOUR_EBAY_USERNAME';

  useEffect(() => {
    if (!isConfigured) {
      setLoading(false);
      return;
    }

    // eBay exposes an RSS feed for every seller's active listings
    const feedUrl = `https://www.ebay.com/usr/${ebay.sellerUsername}/rss`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&count=12`;

    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok' && data.items?.length) {
          setListings(data.items);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [isConfigured, ebay.sellerUsername]);

  const showFallback = !loading && (error || !isConfigured || listings.length === 0);

  return (
    <section className="py-16 bg-brand-dark" id="shop">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <FiShoppingBag size={28} className="text-brand-gold flex-shrink-0" />
          <h2 className="font-display text-4xl text-white">Shop</h2>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-sm text-brand-gold hover:underline whitespace-nowrap"
          >
            View Store <FiExternalLink size={14} />
          </a>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => `skel-${i}`).map((id) => (
              <div key={id} className="bg-brand-gray rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-square bg-white/5" />
                <div className="p-3 space-y-2">
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                  <div className="h-4 bg-white/10 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live listing grid */}
        {!loading && !showFallback && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listings.map((item) => {
              const img = item.enclosure?.link || item.thumbnail || null;
              const price = extractPrice(item.title);
              const title = cleanTitle(item.title);
              return (
                <a
                  key={item.guid || item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-brand-gray rounded-xl overflow-hidden hover:ring-2 hover:ring-brand-gold transition-all"
                >
                  {/* Thumbnail */}
                  <div className="aspect-square bg-black flex items-center justify-center overflow-hidden">
                    {img ? (
                      <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <FiShoppingBag size={40} className="text-white/20" />
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-3 flex flex-col gap-1 flex-1">
                    <p className="text-white text-sm font-medium line-clamp-2 group-hover:text-brand-gold transition-colors leading-snug">
                      {title}
                    </p>
                    {price && (
                      <p className="text-brand-gold font-bold text-sm mt-auto">{price}</p>
                    )}
                    <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      View on eBay <FiExternalLink size={10} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Fallback CTA */}
        {showFallback && (
          <div className="flex flex-col items-center text-center py-16 bg-brand-gray rounded-2xl border border-white/10">
            <div className="text-6xl font-extrabold mb-6 leading-none select-none">
              <span className="text-red-500">e</span>
              <span className="text-blue-400">b</span>
              <span className="text-yellow-400">a</span>
              <span className="text-green-400">y</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">{ebay.storeName}</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              {isConfigured
                ? 'Could not load listings right now. Browse the full store on eBay.'
                : 'Add your eBay seller username to src/config.js to display live listings here.'}
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
        )}

        {/* View all link */}
        {!loading && listings.length > 0 && (
          <div className="text-center mt-8">
            <a
              href={ebay.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-medium"
            >
              See all listings on eBay <FiExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
