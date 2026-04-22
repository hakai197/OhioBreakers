import { FiYoutube, FiShoppingBag } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import config from '../config';

export default function Footer() {
  const { youtube, tiktok, ebay } = config;

  return (
    <footer className="bg-brand-gray border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="font-display text-xl text-brand-red">OH</span><span className="font-display text-xl text-brand-gold">Breakers</span>
          <p className="text-gray-500 text-xs mt-1">@OHBreakers · Ohio&apos;s #1 Trading Card Breaking Community</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
            title="YouTube"
          >
            <FiYoutube size={24} />
          </a>
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            title="TikTok"
          >
            <FaTiktok size={22} />
          </a>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-gold transition-colors p-1"
            title="eBay Store"
          >
            <FiShoppingBag size={22} />
          </a>
        </div>

        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} U197 Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
