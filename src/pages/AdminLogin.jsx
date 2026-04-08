import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import { FiLock } from "react-icons/fi";


export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAdmin, adminLogin, adminError } = useAdmin();
  const navigate = useNavigate();

  if (isAdmin) {
    navigate("/admin/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const success = await adminLogin(username, password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError(adminError || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-brand-gray rounded-2xl border border-white/10 p-8">
          <div className="flex items-center justify-center w-14 h-14 bg-brand-red/20 rounded-full mx-auto mb-6">
            <FiLock className="text-brand-red" size={24} />
          </div>
          <h1 className="font-display text-3xl text-white text-center mb-1">Admin Login</h1>
          <p className="text-gray-400 text-sm text-center mb-6">
            Authorized personnel only
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-2.5 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-username" className="block text-sm text-gray-300 mb-1">Username</label>
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 bg-brand-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
                placeholder="Admin username"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="block text-sm text-gray-300 mb-1">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-brand-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
                placeholder="Admin password"
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
