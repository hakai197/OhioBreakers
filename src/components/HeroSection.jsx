import { FiYoutube, FiShoppingBag } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import config from '../config';

export default function HeroSection() {
  const { youtube, tiktok, ebay } = config;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue/30 to-brand-dark min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(18,231,71,0.1),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10 w-full">
        {/* Logo with overlaid buttons */}
        <div className="relative inline-block mx-auto">
          <img
            src="/heroimagenobackground.png"
            alt="OHBreakers"
            className="h-72 sm:h-96 md:h-[32rem] lg:h-[50vh] xl:h-[40rem] w-auto"
          />
          {/* Desktop only: Social CTAs overlaid on bottom quarter of image */}
          <div className="hidden lg:flex absolute bottom-[8%] left-0 right-0 justify-center gap-3 px-4 flex-wrap">
            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600/90 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm shadow-lg"
            >
              <FiYoutube size={20} /> YouTube
            </a>
            <a
              href={tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black/80 hover:bg-neutral-900 text-white font-semibold rounded-xl border border-white/20 transition-colors text-base backdrop-blur-sm shadow-lg"
            >
              <FaTiktok size={18} /> TikTok
            </a>
            <a
              href={ebay.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold/90 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm shadow-lg"
            >
              <FiShoppingBag size={18} /> Shop on eBay
            </a>
          </div>
        </div>

        {/* Mobile only: Social CTAs below image */}
        <div className="flex lg:hidden flex-col sm:flex-row justify-center gap-3 mt-6 flex-wrap">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-base shadow-lg"
          >
            <FiYoutube size={20} /> YouTube
          </a>
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-neutral-900 text-white font-semibold rounded-xl border border-white/20 transition-colors text-base shadow-lg"
          >
            <FaTiktok size={18} /> TikTok
          </a>
          <a
            href={ebay.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-base shadow-lg"
          >
            <FiShoppingBag size={18} /> Shop on eBay
          </a>
        </div>

        <p className="text-gray-300 text-lg md:text-xl mt-6 mb-6">
          Ohio's #1 Trading Card Breaking Community — @OHBreakers
        </p>

        {/* Scroll hint */}
        <div className="mt-6 flex md:hidden flex-col items-center gap-2 text-gray-500 text-sm animate-bounce">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
