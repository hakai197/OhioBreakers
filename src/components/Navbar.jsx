import { FiYoutube, FiShoppingBag } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import config from '../config';

export default function Navbar() {
  const { youtube, tiktok, ebay } = config;

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-0">
          <span className="font-display text-2xl md:text-3xl text-brand-red tracking-wide">OH</span><span className="font-display text-2xl md:text-3xl text-brand-gold tracking-wide">Breakers</span>
        </a>

        {/* Section links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#youtube" className="hover:text-brand-gold transition-colors">Videos</a>
          <a href="#tiktok" className="hover:text-brand-gold transition-colors">TikTok</a>
          <a href="#shop" className="hover:text-brand-gold transition-colors">Shop</a>
        </div>

        {/* Social icon links */}
        <div className="flex items-center gap-1">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 p-2 transition-colors"
            title="YouTube"
          >
            <FiYoutube size={22} />
          </a>
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white p-2 transition-colors"
            title="TikTok"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-gold p-2 transition-colors"
            title="eBay Store"
          >
            <FiShoppingBag size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
