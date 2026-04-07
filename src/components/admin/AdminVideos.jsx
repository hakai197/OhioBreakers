import { useState } from "react";
import { useData } from "../../context/DataContext";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiRefreshCw } from "react-icons/fi";

const emptyVideo = {
  title: "",
  platform: "youtube",
  embedId: "",
  uploader: "OhioBreakers",
  date: new Date().toISOString().split("T")[0],
  category: "Pokemon",
  likes: 0,
};

export default function AdminVideos() {
  const { videos, addVideo, updateVideo, deleteVideo, resetVideos } = useData();
  const [editing, setEditing] = useState(null); // video id or "new"
  const [form, setForm] = useState(emptyVideo);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const startAdd = () => {
    setEditing("new");
    setForm(emptyVideo);
  };

  const startEdit = (video) => {
    setEditing(video.id);
    setForm({ ...video });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm(emptyVideo);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editing === "new") {
      addVideo(form);
    } else {
      updateVideo(editing, form);
    }
    cancelEdit();
  };

  const handleDelete = (id) => {
    deleteVideo(id);
    setConfirmDelete(null);
    if (editing === id) cancelEdit();
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Actions bar */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm">{videos.length} videos</p>
        <div className="flex gap-2">
          <button
            onClick={resetVideos}
            className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-400 hover:text-white bg-brand-dark border border-white/10 rounded-lg transition-colors"
          >
            <FiRefreshCw size={14} /> Reset Defaults
          </button>
          <button
            onClick={startAdd}
            disabled={editing === "new"}
            className="flex items-center gap-1.5 px-4 py-2 text-sm bg-brand-red hover:bg-red-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            <FiPlus size={16} /> Add Video
          </button>
        </div>
      </div>

      {/* Add/Edit form */}
      {editing !== null && (
        <form
          onSubmit={handleSave}
          className="bg-brand-dark rounded-xl border border-brand-gold/30 p-5 mb-4 space-y-4"
        >
          <h3 className="font-display text-xl text-brand-gold">
            {editing === "new" ? "Add New Video" : "Edit Video"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Platform</label>
              <select
                value={form.platform}
                onChange={(e) => updateField("platform", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
              >
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                {form.platform === "youtube" ? "YouTube Video ID" : "TikTok Video ID"}
              </label>
              <input
                type="text"
                value={form.embedId}
                onChange={(e) => updateField("embedId", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                placeholder={form.platform === "youtube" ? "e.g. dQw4w9WgXcQ" : "e.g. 7345678901234567890"}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Uploader</label>
              <input
                type="text"
                value={form.uploader}
                onChange={(e) => updateField("uploader", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Category</label>
              <select
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
              >
                <option value="Pokemon">Pokemon</option>
                <option value="MTG">MTG</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Initial Likes</label>
              <input
                type="number"
                value={form.likes}
                onChange={(e) => updateField("likes", parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                min="0"
              />
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-sm bg-brand-gold hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors"
            >
              <FiCheck size={16} /> {editing === "new" ? "Add Video" : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors"
            >
              <FiX size={16} /> Cancel
            </button>
          </div>
        </form>
      )}

      {/* Video list */}
      <div className="space-y-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
              editing === video.id
                ? "bg-brand-dark border-brand-gold/30"
                : "bg-brand-gray border-white/5 hover:border-white/10"
            }`}
          >
            {/* Platform badge */}
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${
                video.platform === "youtube"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-pink-500/20 text-pink-400"
              }`}
            >
              {video.platform === "youtube" ? "YT" : "TT"}
            </span>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{video.title}</p>
              <p className="text-gray-500 text-xs">
                {video.uploader} &middot; {video.category} &middot; {video.date}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => startEdit(video)}
                className="p-2 text-gray-400 hover:text-brand-gold rounded-lg hover:bg-white/5 transition-colors"
                title="Edit"
              >
                <FiEdit2 size={16} />
              </button>
              {confirmDelete === video.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="px-2 py-1 text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmDelete(video.id)}
                  className="p-2 text-gray-400 hover:text-brand-red rounded-lg hover:bg-white/5 transition-colors"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p>No videos yet. Click "Add Video" to get started.</p>
        </div>
      )}
    </div>
  );
}
