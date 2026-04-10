import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import VideoCard from "./VideoCard";
import ProductCard from "./ProductCard";

export default function HeroSection() {
  const { siteSettings, videos, products } = useData();
  const latestVideos = videos.slice(0, 3);
  const latestProducts = products.filter((p) => p.inStock).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue/30 to-brand-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(18, 231, 71, 0.15),transparent_60%)]" />
      <div className="max-w-[1600px] mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] gap-6 items-start">
          {/* Left column – Shop items */}
          <div className="hidden lg:flex flex-col gap-4">
            <h3 className="font-display text-lg text-brand-gold text-center mb-1">Shop</h3>
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <Link to="/shop" className="text-sm text-brand-gold hover:underline text-center mt-1">
              View All on eBay →
            </Link>
          </div>

          {/* Center column – Hero content */}
          <div className="text-center">
            {/* <p className="text-xl md:text-2xl text-gray-300 font-light">
              {siteSettings.heroTitle}
            </p>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              {siteSettings.heroSubtitle}
            </p> */}
            <h1 className="-mt-10">
              <img
                src="/heroimagenobackground.png"
                alt="Ohio Breakers"
                className="mx-auto h-66 sm:h-82 md:h-106 w-auto"
              />
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/shop"
                className="px-8 py-3 bg-brand-red hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                Browse eBay Store
              </Link>
              <Link
                to="/videos"
                className="px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-semibold rounded-lg transition-colors"
              >
                Watch Breaks
              </Link>
            </div>
          </div>

          {/* Right column – Latest videos */}
          <div className="hidden lg:flex flex-col gap-4">
            <h3 className="font-display text-lg text-brand-gold text-center mb-1">Latest Videos</h3>
            {latestVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
            <Link to="/videos" className="text-sm text-brand-gold hover:underline text-center mt-1">
              View All →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
