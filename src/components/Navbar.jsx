import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/shop", label: "Shop" },
  { to: "/ebay", label: "eBay Store" },
  { to: "/community", label: "Community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout, setShowAuthModal } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-brand-gold ${
      isActive ? "text-brand-gold font-semibold" : "text-gray-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl text-brand-red tracking-wide">
            OHIO
          </span>
          <span className="font-display text-2xl md:text-3xl text-brand-gold tracking-wide">
            BREAKERS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={logout}
              className="hidden md:flex items-center gap-1 text-sm text-gray-300 hover:text-white"
            >
              <img src={user.avatar} alt="" className="w-7 h-7 rounded-full" />
              <span>{user.username}</span>
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="hidden md:flex items-center gap-1 text-gray-300 hover:text-brand-gold"
            >
              <FiUser size={20} />
            </button>
          )}
          <Link to="/cart" className="relative text-gray-300 hover:text-brand-gold">
            <FiShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-brand-dark">
          <div className="flex flex-col px-4 py-3 gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={navLinkClass}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            {user ? (
              <button onClick={logout} className="text-left text-gray-300 hover:text-white">
                Logout ({user.username})
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setOpen(false);
                }}
                className="text-left text-gray-300 hover:text-brand-gold"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
