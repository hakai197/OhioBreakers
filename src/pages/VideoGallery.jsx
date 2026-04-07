import { useState, useMemo } from "react";
import VideoCard from "../components/VideoCard";
import FilterBar from "../components/FilterBar";
import videos from "../data/videos";

const categories = ["All", "Pokemon", "MTG", "Sports"];

export default function VideoGallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? videos : videos.filter((v) => v.category === category)),
    [category]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl text-white">
          Video <span className="text-brand-red">Gallery</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Watch the latest pack openings, breaks, and pulls from our community.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <FilterBar
          filters={categories}
          active={category}
          onSelect={setCategory}
          label="Category"
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No videos found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      )}
    </div>
  );
}
