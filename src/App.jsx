import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import YouTubeSection from './components/YouTubeSection';
import TikTokSection from './components/TikTokSection';
import EbaySection from './components/EbaySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Desktop: 3-column no-scroll layout ── */}
      <div
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: '1fr 2fr 1fr',
          height: 'calc(100vh - 4rem)',
          overflow: 'hidden',
        }}
      >
        {/* Left – Shop */}
        <aside className="overflow-y-auto border-r border-white/10 bg-brand-dark">
          <EbaySection />
        </aside>

        {/* Center – Hero */}
        <div className="overflow-y-auto">
          <HeroSection />
        </div>

        {/* Right – Videos + TikTok */}
        <aside className="overflow-y-auto border-l border-white/10 bg-brand-dark">
          <YouTubeSection />
          <TikTokSection />
        </aside>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <main className="lg:hidden flex-1">
        <HeroSection />
        <YouTubeSection />
        <TikTokSection />
        <EbaySection />
      </main>

      <Footer />
    </div>
  );
}
