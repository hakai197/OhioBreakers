import { Link } from "react-router-dom";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl text-brand-red">OHIO </span>
          <span className="font-display text-2xl text-brand-gold">BREAKERS</span>
          <p className="text-gray-400 text-sm mt-2">
            Trade, Break, Collect. Ohio's #1 trading card community.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link to="/shop" className="hover:text-brand-gold">Shop</Link></li>
            <li><Link to="/videos" className="hover:text-brand-gold">Videos</Link></li>
            <li><Link to="/ebay" className="hover:text-brand-gold">eBay Store</Link></li>
            <li><Link to="/community" className="hover:text-brand-gold">Community</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">
              <FiYoutube size={24} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTiktok size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FiInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-gray-500 text-xs py-4">
        &copy; {new Date().getFullYear()} Ohio Breakers. All rights reserved.
      </div>
    </footer>
  );
}
