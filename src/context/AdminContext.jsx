import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();


const ADMIN_JWT_KEY = "ohio_breakers_admin_jwt";


import PropTypes from "prop-types";

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      const jwt = localStorage.getItem(ADMIN_JWT_KEY);
      return !!jwt;
    } catch {
      return false;
    }
  });
  const [adminJwt, setAdminJwt] = useState(() => localStorage.getItem(ADMIN_JWT_KEY) || "");
  const [adminError, setAdminError] = useState("");

  useEffect(() => {
    if (isAdmin && adminJwt) {
      localStorage.setItem(ADMIN_JWT_KEY, adminJwt);
    } else {
      localStorage.removeItem(ADMIN_JWT_KEY);
    }
  }, [isAdmin, adminJwt]);

  // Login using backend
  const adminLogin = async (username, password) => {
    setAdminError("");
    try {
      const res = await fetch("/api/auth/login", {
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
      // Optionally: decode JWT and check for admin role here
      setAdminJwt(jwt);
      setIsAdmin(true);
      setAdminError("");
      return true;
    } catch (e) {
      setIsAdmin(false);
      setAdminJwt("");
      setAdminError(e.message);
      return false;
    }
  };

  const adminLogout = () => {
    setIsAdmin(false);
    setAdminJwt("");
    setAdminError("");
  };

  const contextValue = React.useMemo(() => ({
    isAdmin, adminLogin, adminLogout, adminJwt, adminError
  }), [isAdmin, adminJwt, adminError]);
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAdmin() {
  return useContext(AdminContext);
}
