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
      <main className="flex-1">
        <HeroSection />
        <YouTubeSection />
        <TikTokSection />
        <EbaySection />
      </main>
      <Footer />
    </div>
  );
}
