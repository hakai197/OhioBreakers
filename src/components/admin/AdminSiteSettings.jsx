import { useState } from "react";
import { useData } from "../../context/DataContext";
import { FiCheck } from "react-icons/fi";

export default function AdminSiteSettings() {
  const { siteSettings, updateSiteSettings } = useData();
  const [form, setForm] = useState({ ...siteSettings });
  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSiteSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Hero Section */}
      <div className="bg-brand-gray rounded-xl border border-white/5 p-5">
        <h3 className="font-display text-xl text-white mb-4">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Hero Title</label>
            <input
              type="text"
              value={form.heroTitle}
              onChange={(e) => updateField("heroTitle", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Hero Subtitle</label>
            <textarea
              value={form.heroSubtitle}
              onChange={(e) => updateField("heroSubtitle", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold resize-none"
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="bg-brand-gray rounded-xl border border-white/5 p-5">
        <h3 className="font-display text-xl text-white mb-2">Announcement Banner</h3>
        <p className="text-gray-500 text-xs mb-4">
          Leave empty to hide the banner. Shows at the top of the site.
        </p>
        <input
          type="text"
          value={form.announcement}
          onChange={(e) => updateField("announcement", e.target.value)}
          className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
          placeholder="e.g. 🎉 Free shipping on orders over $100!"
        />
      </div>

      {/* Social / External Links */}
      <div className="bg-brand-gray rounded-xl border border-white/5 p-5">
        <h3 className="font-display text-xl text-white mb-4">Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">eBay Store URL</label>
            <input
              type="url"
              value={form.ebayStoreUrl}
              onChange={(e) => updateField("ebayStoreUrl", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">YouTube URL</label>
            <input
              type="url"
              value={form.youtubeUrl}
              onChange={(e) => updateField("youtubeUrl", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">TikTok URL</label>
            <input
              type="url"
              value={form.tiktokUrl}
              onChange={(e) => updateField("tiktokUrl", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Instagram URL</label>
            <input
              type="url"
              value={form.instagramUrl}
              onChange={(e) => updateField("instagramUrl", e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
            />
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="flex items-center gap-1.5 px-6 py-2.5 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-semibold rounded-lg transition-colors"
        >
          <FiCheck size={16} /> Save Settings
        </button>
        {saved && <span className="text-green-400 text-sm">Settings saved!</span>}
      </div>
    </form>
  );
}
