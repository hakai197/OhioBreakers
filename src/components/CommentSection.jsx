import { useState } from "react";
import { FiHeart, FiSend } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import initialComments from "../data/comments";

export default function CommentSection() {
  const { user, setShowAuthModal } = useAuth();
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");
  const [likedIds, setLikedIds] = useState(new Set());

  const handlePost = (e) => {
    e.preventDefault();
    if (!user) return setShowAuthModal(true);
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      user: user.username,
      avatar: user.avatar,
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
    };
    setComments([newComment, ...comments]);
    setText("");
  };

  const handleLike = (id) => {
    if (!user) return setShowAuthModal(true);
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Post form */}
      <form onSubmit={handlePost} className="flex gap-3 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/40 overflow-hidden">
          {user && <img src={user.avatar} alt="" className="w-full h-full" />}
        </div>
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={user ? "Share something with the community..." : "Sign in to post..."}
            maxLength={500}
            className="flex-1 px-4 py-2.5 bg-brand-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm"
            onClick={() => !user && setShowAuthModal(true)}
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-brand-red hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <FiSend size={18} />
          </button>
        </div>
      </form>

      {/* Comments */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-brand-dark border border-white/5 rounded-xl p-4 flex gap-3"
          >
            <img src={c.avatar} alt="" className="w-10 h-10 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm">{c.user}</span>
                <span className="text-xs text-gray-500">{c.date}</span>
              </div>
              <p className="text-gray-300 text-sm mt-1 break-words">{c.text}</p>
              <button
                onClick={() => handleLike(c.id)}
                className={`flex items-center gap-1 mt-2 text-xs transition-colors ${
                  likedIds.has(c.id) ? "text-brand-red" : "text-gray-500 hover:text-brand-red"
                }`}
              >
                <FiHeart size={14} fill={likedIds.has(c.id) ? "currentColor" : "none"} />
                {c.likes + (likedIds.has(c.id) ? 1 : 0)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
