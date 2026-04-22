import HeroSection from "../components/HeroSection";
import FeaturedVideos from "../components/FeaturedVideos";
import ShopPreview from "../components/ShopPreview";
import TikTokSection from "../components/TikTokSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      {/* ── Desktop: 3-column no-scroll layout ── */}
      <div
        className="hidden lg:grid h-[calc(100vh-4rem)] overflow-hidden"
        style={{ gridTemplateColumns: '1fr 2fr 1fr' }}
      >
        {/* Left – Shop */}
        <aside className="overflow-y-auto border-r border-white/10">
          <ShopPreview compact />
        </aside>

        {/* Center – Hero */}
        <div className="overflow-y-auto">
          <HeroSection />
        </div>

        {/* Right – Latest Videos + TikTok */}
        <aside className="overflow-y-auto border-l border-white/10">
          <FeaturedVideos compact />
          <TikTokSection />
        </aside>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <div className="lg:hidden">
        <HeroSection />
        <FeaturedVideos />
        <TikTokSection />
        <ShopPreview />
        <CTASection />
      </div>
    </>
  );
}
