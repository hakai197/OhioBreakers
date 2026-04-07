export default function FilterBar({ filters, active, onSelect, label }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && <span className="text-sm text-gray-400 mr-1">{label}:</span>}
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === f
              ? "bg-brand-red text-white"
              : "bg-brand-gray border border-white/10 text-gray-300 hover:border-brand-gold/50 hover:text-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
