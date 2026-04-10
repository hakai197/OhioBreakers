import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";

export default function Cart() {
  const { items, removeFromCart, updateQty, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-4xl text-white mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Add some cards to get started!</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          <FiArrowLeft size={18} /> Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-4xl text-white">
          Shopping <span className="text-brand-gold">Cart</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-gray-400 hover:text-brand-red transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-brand-gray rounded-xl border border-white/5 p-4 flex gap-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm truncate">{item.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{item.category} &middot; {item.set}</p>
              <p className="text-brand-gold font-bold mt-1">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                disabled={item.qty <= 1}
                className="w-8 h-8 flex items-center justify-center rounded bg-brand-dark border border-white/10 text-gray-300 hover:text-white disabled:opacity-30"
              >
                <FiMinus size={14} />
              </button>
              <span className="w-8 text-center text-white text-sm font-medium">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="w-8 h-8 flex items-center justify-center rounded bg-brand-dark border border-white/10 text-gray-300 hover:text-white"
              >
                <FiPlus size={14} />
              </button>
            </div>

            {/* Line total */}
            <div className="text-right w-20 flex-shrink-0">
              <p className="text-white font-bold">${(item.price * item.qty).toFixed(2)}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-brand-red transition-colors p-1"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-brand-gray rounded-xl border border-white/5 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white font-bold text-xl">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <button className="w-full py-3 bg-brand-gold hover:bg-sky-500 text-white font-bold rounded-lg transition-colors text-lg">
          Proceed to Checkout
        </button>
        <Link
          to="/shop"
          className="block text-center text-sm text-brand-gold hover:underline mt-4"
        >
          &larr; Continue Shopping
        </Link>
      </div>
    </div>
  );
}
