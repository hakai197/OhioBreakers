import CommentSection from "../components/CommentSection";
import { useAuth } from "../context/AuthContext";
import { FiUsers, FiMessageCircle, FiTrendingUp } from "react-icons/fi";

const stats = [
  { icon: FiUsers, label: "Members", value: "3,247" },
  { icon: FiMessageCircle, label: "Posts Today", value: "142" },
  { icon: FiTrendingUp, label: "Cards Traded", value: "18,900+" },
];

export default function Community() {
  const { user, setShowAuthModal } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl text-white">
          Community <span className="text-brand-red">Hub</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Share your pulls, discuss trades, and connect with fellow collectors.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-brand-gray rounded-xl border border-white/5 p-4 md:p-6 text-center"
          >
            <s.icon className="mx-auto text-brand-gold mb-2" size={24} />
            <div className="font-display text-xl md:text-2xl text-white">{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Auth Prompt */}
      {!user && (
        <div className="bg-brand-blue/20 border border-brand-gold/20 rounded-xl p-6 mb-8 text-center">
          <p className="text-gray-300 mb-3">
            Sign in to post comments, like content, and join the discussion!
          </p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-6 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Sign In to Participate
          </button>
        </div>
      )}

      {/* Discussion Feed */}
      <h2 className="font-display text-2xl text-white mb-6">
        Discussion <span className="text-brand-gold">Feed</span>
      </h2>
      <CommentSection />
    </div>
  );
}
