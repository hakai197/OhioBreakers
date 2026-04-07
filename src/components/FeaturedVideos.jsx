import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import videos from "../data/videos";

export default function FeaturedVideos() {
  const featured = videos.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Latest <span className="text-brand-red">Breaks</span>
        </h2>
        <Link to="/videos" className="text-brand-gold hover:underline text-sm">
          View All &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
