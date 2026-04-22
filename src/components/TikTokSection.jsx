import { useEffect } from 'react';
import { FaTiktok } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import config from '../config';

export default function TikTokSection() {
  const { tiktok } = config;
  const hasFeatured = tiktok.featuredVideoIds && tiktok.featuredVideoIds.length > 0;

  // Load TikTok embed script when featured videos are configured
  useEffect(() => {
    if (!hasFeatured) return;

    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existing) {
      // Re-trigger TikTok's widget init if script already loaded
      if (window.tiktok) window.tiktok.reload?.();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Leave script in DOM so it doesn't break already-rendered embeds
    };
  }, [hasFeatured]);

  return (
    <section className="py-16 bg-brand-gray" id="tiktok">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <FaTiktok size={26} className="text-white flex-shrink-0" />
          <h2 className="font-display text-4xl text-white">TikTok</h2>
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-sm text-brand-gold hover:underline whitespace-nowrap"
          >
            @{tiktok.username} <FiExternalLink size={14} />
          </a>
        </div>

        {/* Featured embeds */}
        {hasFeatured ? (
          <div className="flex flex-wrap justify-center gap-6">
            {tiktok.featuredVideoIds.map((id) => (
              <blockquote
                key={id}
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@${tiktok.username}/video/${id}`}
                data-video-id={id}
                style={{ maxWidth: '325px', minWidth: '325px' }}
              >
                <section />
              </blockquote>
            ))}
          </div>
        ) : (
          /* CTA when no featured videos configured */
          <div className="flex flex-col items-center text-center py-16 bg-brand-dark rounded-2xl border border-white/10">
            <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <FaTiktok size={44} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Follow Us on TikTok</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Catch our latest card breaks, pack openings, and highlights — updated daily.
            </p>
            <a
              href={tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-neutral-900 text-white font-semibold rounded-xl border border-white/20 transition-colors text-lg"
            >
              <FaTiktok size={22} />
              Follow @{tiktok.username}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
