import { FiYoutube, FiShoppingBag } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import config from '../config';

export default function HeroSection() {
  const { youtube, tiktok, ebay } = config;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue/30 to-brand-dark min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(18,231,71,0.1),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10 w-full">
        {/* Logo */}
        <img
          src="/heroimagenobackground.png"
          alt="OHBreakers"
          className="mx-auto h-48 sm:h-64 md:h-80 w-auto mb-6"
        />

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Ohio's #1 Trading Card Breaking Community — @OHBreakers
        </p>

        {/* Social CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-lg"
          >
            <FiYoutube size={22} /> YouTube
          </a>
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-black hover:bg-neutral-900 text-white font-semibold rounded-xl border border-white/20 transition-colors text-lg"
          >
            <FaTiktok size={20} /> TikTok
          </a>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-lg"
          >
            <FiShoppingBag size={20} /> Shop on eBay
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2 text-gray-500 text-sm animate-bounce">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
