import { createContext, useContext, useState, useCallback } from "react";
import defaultVideos from "../data/videos";
import defaultProducts from "../data/products";

const DataContext = createContext();

const VIDEOS_KEY = "ohio_breakers_videos";
const PRODUCTS_KEY = "ohio_breakers_products";
const SITE_SETTINGS_KEY = "ohio_breakers_site_settings";

const defaultSiteSettings = {
  siteName: "Ohio Breakers",
  heroTitle: "Rip. Pull. Collect.",
  heroSubtitle: "Ohio's #1 Sports card-breaking community",
  announcement: "",
  ebayStoreUrl: "https://www.ebay.com/str/ohiobreakers",
  youtubeUrl: "https://youtube.com/@ohiobreakers",
  tiktokUrl: "https://tiktok.com/@ohiobreakers",
  instagramUrl: "https://instagram.com/ohiobreakers",
};

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function DataProvider({ children }) {
  const [videos, setVideos] = useState(() => loadFromStorage(VIDEOS_KEY, defaultVideos));
  const [products, setProducts] = useState(() => loadFromStorage(PRODUCTS_KEY, defaultProducts));
  const [siteSettings, setSiteSettings] = useState(() =>
    loadFromStorage(SITE_SETTINGS_KEY, defaultSiteSettings)
  );

  // Video operations
  const addVideo = useCallback((video) => {
    setVideos((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map((v) => v.id)) + 1 : 1;
      const next = [{ ...video, id: newId }, ...prev];
      saveToStorage(VIDEOS_KEY, next);
      return next;
    });
  }, []);

  const updateVideo = useCallback((id, updates) => {
    setVideos((prev) => {
      const next = prev.map((v) => (v.id === id ? { ...v, ...updates } : v));
      saveToStorage(VIDEOS_KEY, next);
      return next;
    });
  }, []);

  const deleteVideo = useCallback((id) => {
    setVideos((prev) => {
      const next = prev.filter((v) => v.id !== id);
      saveToStorage(VIDEOS_KEY, next);
      return next;
    });
  }, []);

  // Product operations
  const addProduct = useCallback((product) => {
    setProducts((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      const next = [...prev, { ...product, id: newId }];
      saveToStorage(PRODUCTS_KEY, next);
      return next;
    });
  }, []);

  const updateProduct = useCallback((id, updates) => {
    setProducts((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, ...updates } : p));
      saveToStorage(PRODUCTS_KEY, next);
      return next;
    });
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts((prev) => {
      const next = prev.filter((p) => p.id !== id);
      saveToStorage(PRODUCTS_KEY, next);
      return next;
    });
  }, []);

  // Site settings
  const updateSiteSettings = useCallback((updates) => {
    setSiteSettings((prev) => {
      const next = { ...prev, ...updates };
      saveToStorage(SITE_SETTINGS_KEY, next);
      return next;
    });
  }, []);

  // Reset to defaults
  const resetVideos = useCallback(() => {
    setVideos(defaultVideos);
    saveToStorage(VIDEOS_KEY, defaultVideos);
  }, []);

  const resetProducts = useCallback(() => {
    setProducts(defaultProducts);
    saveToStorage(PRODUCTS_KEY, defaultProducts);
  }, []);

  return (
    <DataContext.Provider
      value={{
        videos,
        products,
        siteSettings,
        addVideo,
        updateVideo,
        deleteVideo,
        addProduct,
        updateProduct,
        deleteProduct,
        updateSiteSettings,
        resetVideos,
        resetProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
