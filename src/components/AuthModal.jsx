import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FiX } from "react-icons/fi";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, login } = useAuth();
  const [username, setUsername] = useState("");
  const [mode, setMode] = useState("login"); // login | register

  if (!showAuthModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length >= 2) {
      login(username.trim());
      setUsername("");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setShowAuthModal(false)}
      />
      <div className="relative bg-brand-gray rounded-2xl border border-white/10 w-full max-w-sm p-6">
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX size={20} />
        </button>
        <h2 className="font-display text-2xl text-white mb-1">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          {mode === "login"
            ? "Sign in to like, comment, and track orders."
            : "Join Ohio Breakers today!"}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              type="text"
              maxLength={20}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 bg-brand-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
              placeholder="Enter your username"
              required
              minLength={2}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2.5 bg-brand-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
              placeholder="Enter your password"
              defaultValue="demo1234"
            />
            <p className="text-xs text-gray-500 mt-1">Demo mode – any password works</p>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-brand-gold hover:underline"
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
