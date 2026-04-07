import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue/30 to-brand-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,16,46,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-none tracking-tight">
          <span className="text-brand-red">OHIO</span>{" "}
          <span className="text-brand-gold">BREAKERS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light">
          Trade &bull; Break &bull; Collect
        </p>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Ohio's premier trading card community. Join thousands of collectors ripping packs,
          sharing pulls, and trading cards every day.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/shop"
            className="px-8 py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Browse Shop
          </Link>
          <Link
            to="/videos"
            className="px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-semibold rounded-lg transition-colors"
          >
            Watch Breaks
          </Link>
        </div>
      </div>
    </section>
  );
}
