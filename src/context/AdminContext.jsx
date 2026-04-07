import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

const STORAGE_KEY = "ohio_breakers_admin";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "ohiobreakers2026";

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "authenticated";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem(STORAGE_KEY, "authenticated");
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [isAdmin]);

  const adminLogin = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const adminLogout = () => setIsAdmin(false);

  return (
    <AdminContext.Provider value={{ isAdmin, adminLogin, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
