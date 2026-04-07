import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { LikesProvider } from "./context/LikesContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home";
import VideoGallery from "./pages/VideoGallery";
import Shop from "./pages/Shop";
import EbayStore from "./pages/EbayStore";
import Community from "./pages/Community";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LikesProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<VideoGallery />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/ebay" element={<EbayStore />} />
                <Route path="/community" element={<Community />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
            <AuthModal />
          </div>
        </LikesProvider>
      </CartProvider>
    </AuthProvider>
  );
}
