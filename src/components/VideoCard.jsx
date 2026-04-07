import { FiHeart, FiCalendar, FiUser } from "react-icons/fi";
import { useLikes } from "../context/LikesContext";
import { useAuth } from "../context/AuthContext";

export default function VideoCard({ video }) {
  const { toggleLike, isLiked } = useLikes();
  const { user, setShowAuthModal } = useAuth();
  const liked = isLiked("video", video.id);

  const handleLike = () => {
    if (!user) return setShowAuthModal(true);
    toggleLike("video", video.id);
  };

  return (
    <div className="bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-colors group">
      {/* Embed */}
      <div className="aspect-video bg-black">
        {video.platform === "youtube" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.embedId}`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2 p-4">
            <span className="text-4xl">🎵</span>
            <span className="text-sm text-center">TikTok Video</span>
            <a
              href={`https://www.tiktok.com/@ohiobreakers/video/${video.embedId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold text-xs hover:underline"
            >
              Watch on TikTok &rarr;
            </a>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white truncate group-hover:text-brand-gold transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FiUser size={12} /> {video.uploader}
          </span>
          <span className="flex items-center gap-1">
            <FiCalendar size={12} /> {video.date}
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs px-2 py-0.5 rounded bg-brand-blue/40 text-brand-gold">
            {video.category}
          </span>
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 text-sm transition-colors ${
              liked ? "text-brand-red" : "text-gray-400 hover:text-brand-red"
            }`}
          >
            <FiHeart size={16} fill={liked ? "currentColor" : "none"} />
            <span>{video.likes + (liked ? 1 : 0)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
