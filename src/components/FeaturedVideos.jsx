import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useData } from "../context/DataContext";

export default function FeaturedVideos({ compact = false }) {
  const { videos } = useData();
  const featured = videos.slice(0, compact ? 2 : 3);

  return (
    <section className={`px-4 ${compact ? 'py-8' : 'max-w-7xl mx-auto py-16'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`font-display text-white ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
          Latest <span className="text-brand-red">Breaks</span>
        </h2>
        <Link to="/videos" className="text-brand-gold hover:underline text-sm">
          View All &rarr;
        </Link>
      </div>
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-3 gap-6'}>
        {featured.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
