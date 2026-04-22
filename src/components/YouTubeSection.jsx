import { useState, useEffect } from 'react';
import { FiYoutube, FiExternalLink } from 'react-icons/fi';
import config from '../config';

function getVideoId(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

export default function YouTubeSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { youtube } = config;
  const isConfigured = youtube.channelId && youtube.channelId !== 'YOUR_CHANNEL_ID';

  useEffect(() => {
    if (!isConfigured) {
      setLoading(false);
      return;
    }

    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtube.channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          setVideos(data.items.slice(0, 6));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [isConfigured, youtube.channelId]);

  return (
    <section className="py-16 bg-brand-dark" id="youtube">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <FiYoutube size={32} className="text-red-500 flex-shrink-0" />
          <h2 className="font-display text-4xl text-white">Latest Videos</h2>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-sm text-brand-gold hover:underline whitespace-nowrap"
          >
            Subscribe <FiExternalLink size={14} />
          </a>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-brand-gray rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-white/5" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error / fallback */}
        {!loading && (error || !isConfigured) && (
          <div className="flex flex-col items-center text-center py-16 bg-brand-gray rounded-2xl border border-white/10">
            <FiYoutube size={56} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Watch Us on YouTube</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {isConfigured
                ? 'Check out our latest card breaks, highlights, and openings.'
                : 'Add your YouTube channel ID to src/config.js to display videos here automatically.'}
            </p>
            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >
              <FiYoutube size={20} /> Visit Our Channel
            </a>
          </div>
        )}

        {/* Video grid */}
        {!loading && !error && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => {
              const videoId = getVideoId(video.link);
              return (
                <a
                  key={video.guid}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-brand-gray rounded-xl overflow-hidden hover:ring-2 hover:ring-brand-gold transition-all"
                >
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white line-clamp-2 group-hover:text-brand-gold transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {new Date(video.pubDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* View all link */}
        {!loading && videos.length > 0 && (
          <div className="text-center mt-8">
            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-medium"
            >
              View all videos on YouTube <FiExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
