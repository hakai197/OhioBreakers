import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { LikesProvider } from "./context/LikesContext";
import { AdminProvider } from "./context/AdminContext";
import { DataProvider } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home";
import VideoGallery from "./pages/VideoGallery";
import Shop from "./pages/Shop";
import EbayStore from "./pages/EbayStore";
import Community from "./pages/Community";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { useData } from "./context/DataContext";

function AnnouncementBanner() {
  const { siteSettings } = useData();
  if (!siteSettings.announcement) return null;
  return (
    <div className="bg-brand-gold text-white text-center text-sm font-semibold py-2 px-4">
      {siteSettings.announcement}
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminRoute && <AnnouncementBanner />}
      {!isAdminRoute && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ebay" element={<EbayStore />} />
          <Route path="/community" element={<Community />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <AuthModal />}
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <DataProvider>
        <AuthProvider>
          <CartProvider>
            <LikesProvider>
              <AppContent />
            </LikesProvider>
          </CartProvider>
        </AuthProvider>
      </DataProvider>
    </AdminProvider>
  );
}
