import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-brand-red/20 via-brand-blue/20 to-brand-red/20 border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-white">
          Join the <span className="text-brand-gold">Community</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Connect with collectors, share your pulls, join live breaks, and find the best deals
          on trading cards in Ohio and beyond.
        </p>
        <Link
          to="/community"
          className="inline-block mt-8 px-10 py-3 bg-brand-gold text-white font-bold rounded-lg hover:bg-sky-500 transition-colors"
        >
          Join Now — It's Free
        </Link>
      </div>
    </section>
  );
}
