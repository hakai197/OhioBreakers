import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();


const USER_KEY = "ohio_breakers_user";
const JWT_KEY = "ohio_breakers_jwt";


export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      const jwt = localStorage.getItem(JWT_KEY);
      if (raw && jwt) {
        const u = JSON.parse(raw);
        return { ...u, jwt };
      }
      return null;
    } catch {
      return null;
    }
  });

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (user && user.jwt) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(JWT_KEY, user.jwt);
    } else {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(JWT_KEY);
    }
  }, [user]);

  // Async login: POST to backend, store JWT, update user state
  const login = async (username, password) => {
    setAuthError("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Login failed");
      }
      const data = await res.json();
      const jwt = data.token;
      const u = {
        username,
        jwt,
        avatar: `https://placehold.co/40x40/C8102E/fff?text=${username.charAt(0).toUpperCase()}`,
        joinedDate: new Date().toISOString(),
      };
      setUser(u);
      setShowAuthModal(false);
      setAuthError("");
      return true;
    } catch (e) {
      setAuthError(e.message);
      return false;
    }
  };

  // Async register: POST to backend, then login
  const register = async (username, password) => {
    setAuthError("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Registration failed");
      }
      // Auto-login after registration
      return await login(username, password);
    } catch (e) {
      setAuthError(e.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthError("");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, showAuthModal, setShowAuthModal, authError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
