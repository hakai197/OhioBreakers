import { createContext, useContext, useState, useCallback } from "react";

const LikesContext = createContext();

const STORAGE_KEY = "ohio_breakers_likes";

function loadLikes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLikes(likes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
}

export function LikesProvider({ children }) {
  const [likes, setLikes] = useState(loadLikes);

  const toggleLike = useCallback((type, id) => {
    setLikes((prev) => {
      const key = `${type}_${id}`;
      const next = { ...prev, [key]: !prev[key] };
      saveLikes(next);
      return next;
    });
  }, []);

  const isLiked = useCallback(
    (type, id) => !!likes[`${type}_${id}`],
    [likes]
  );

  return (
    <LikesContext.Provider value={{ toggleLike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  return useContext(LikesContext);
}
