import { useState } from "react";
import { useData } from "../../context/DataContext";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiRefreshCw } from "react-icons/fi";

const emptyProduct = {
  name: "",
  category: "Pokemon",
  type: "Booster Box",
  price: 0,
  image: "",
  description: "",
  inStock: true,
  set: "",
};

const categories = ["Pokemon", "MTG", "Sports"];
const productTypes = [
  "Booster Box",
  "Elite Trainer Box",
  "Collector Box",
  "Hobby Box",
  "Blaster Box",
  "Booster Bundle",
  "Bundle",
  "Single Pack",
];

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyProduct);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const startAdd = () => {
    setEditing("new");
    setForm(emptyProduct);
  };

  const startEdit = (product) => {
    setEditing(product.id);
    setForm({ ...product });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm(emptyProduct);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = { ...form, price: parseFloat(form.price) || 0 };
    if (editing === "new") {
      addProduct(data);
    } else {
      updateProduct(editing, data);
    }
    cancelEdit();
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    setConfirmDelete(null);
    if (editing === id) cancelEdit();
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Actions bar */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm">
          {products.length} products &middot;{" "}
          {products.filter((p) => p.inStock).length} in stock
        </p>
        <div className="flex gap-2">
          <button
            onClick={resetProducts}
            className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-400 hover:text-white bg-brand-dark border border-white/10 rounded-lg transition-colors"
          >
            <FiRefreshCw size={14} /> Reset Defaults
          </button>
          <button
            onClick={startAdd}
            disabled={editing === "new"}
            className="flex items-center gap-1.5 px-4 py-2 text-sm bg-brand-red hover:bg-red-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            <FiPlus size={16} /> Add Product
          </button>
        </div>
      </div>

      {/* Add/Edit form */}
      {editing !== null && (
        <form
          onSubmit={handleSave}
          className="bg-brand-dark rounded-xl border border-brand-gold/30 p-5 mb-4 space-y-4"
        >
          <h3 className="font-display text-xl text-brand-gold">
            {editing === "new" ? "Add New Product" : "Edit Product"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Product Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Category</label>
              <select
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Product Type</label>
              <select
                value={form.type}
                onChange={(e) => updateField("type", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
              >
                {productTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Price ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={form.price}
                onChange={(e) => updateField("price", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Set Name</label>
              <input
                type="text"
                value={form.set}
                onChange={(e) => updateField("set", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                placeholder="e.g. Scarlet & Violet"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Image URL</label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => updateField("image", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold"
                placeholder="https://..."
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="w-full px-3 py-2 bg-brand-gray border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold resize-none"
                rows={2}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="inStock"
                checked={form.inStock}
                onChange={(e) => updateField("inStock", e.target.checked)}
                className="w-4 h-4 accent-brand-gold"
              />
              <label htmlFor="inStock" className="text-sm text-gray-300">
                In Stock
              </label>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-sm bg-brand-gold hover:bg-yellow-500 text-brand-dark font-semibold rounded-lg transition-colors"
            >
              <FiCheck size={16} /> {editing === "new" ? "Add Product" : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors"
            >
              <FiX size={16} /> Cancel
            </button>
          </div>
        </form>
      )}

      {/* Product list */}
      <div className="space-y-2">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
              editing === product.id
                ? "bg-brand-dark border-brand-gold/30"
                : "bg-brand-gray border-white/5 hover:border-white/10"
            }`}
          >
            {/* Image thumbnail */}
            <div className="w-12 h-12 rounded-lg bg-brand-blue/20 overflow-hidden flex-shrink-0">
              {product.image && (
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{product.name}</p>
              <p className="text-gray-500 text-xs">
                {product.category} &middot; {product.type} &middot; ${product.price.toFixed(2)}
                {!product.inStock && (
                  <span className="ml-2 text-red-400 font-semibold">SOLD OUT</span>
                )}
              </p>
            </div>

            {/* Stock badge */}
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${
                product.inStock
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {product.inStock ? "In Stock" : "Out"}
            </span>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => startEdit(product)}
                className="p-2 text-gray-400 hover:text-brand-gold rounded-lg hover:bg-white/5 transition-colors"
                title="Edit"
              >
                <FiEdit2 size={16} />
              </button>
              {confirmDelete === product.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="px-2 py-1 text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmDelete(product.id)}
                  className="p-2 text-gray-400 hover:text-brand-red rounded-lg hover:bg-white/5 transition-colors"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p>No products yet. Click "Add Product" to get started.</p>
        </div>
      )}
    </div>
  );
}
