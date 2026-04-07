import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import { FiFilm, FiPackage, FiSettings, FiLogOut, FiHome } from "react-icons/fi";
import AdminVideos from "../components/admin/AdminVideos";
import AdminProducts from "../components/admin/AdminProducts";
import AdminSiteSettings from "../components/admin/AdminSiteSettings";

const tabs = [
  { id: "videos", label: "Videos", icon: FiFilm },
  { id: "products", label: "Products", icon: FiPackage },
  { id: "settings", label: "Site Settings", icon: FiSettings },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("videos");
  const { isAdmin, adminLogout } = useAdmin();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleLogout = () => {
    adminLogout();
    navigate("/admin");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-white">
            Admin <span className="text-brand-gold">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Manage your site content</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white bg-brand-gray border border-white/10 rounded-lg transition-colors"
          >
            <FiHome size={16} />
            <span className="hidden sm:inline">View Site</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-brand-red bg-brand-gray border border-white/10 rounded-lg transition-colors"
          >
            <FiLogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-brand-gray rounded-xl p-1 border border-white/10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-brand-red text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === "videos" && <AdminVideos />}
      {activeTab === "products" && <AdminProducts />}
      {activeTab === "settings" && <AdminSiteSettings />}
    </div>
  );
}
