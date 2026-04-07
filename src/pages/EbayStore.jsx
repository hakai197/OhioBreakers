import { FiExternalLink, FiShoppingBag, FiStar, FiTruck } from "react-icons/fi";

const ebayListings = [
  {
    id: 1,
    title: "PSA 10 Charizard VMAX Rainbow - Champion's Path",
    price: "$349.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=PSA+10+Charizard",
    bids: 12,
    timeLeft: "2d 4h",
  },
  {
    id: 2,
    title: "2024 Topps Chrome Hobby Box SEALED",
    price: "$289.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=Topps+Chrome+Box",
    bids: 8,
    timeLeft: "1d 12h",
  },
  {
    id: 3,
    title: "MTG Black Lotus (Collectors Edition) EX",
    price: "$1,499.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=Black+Lotus",
    bids: 24,
    timeLeft: "5d 8h",
  },
  {
    id: 4,
    title: "Pokémon 151 Ultra Premium Collection SEALED",
    price: "$129.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=151+UPC",
    bids: 6,
    timeLeft: "3d 1h",
  },
  {
    id: 5,
    title: "Luka Doncic Prizm Silver RC PSA 9",
    price: "$599.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=Luka+PSA+9",
    bids: 18,
    timeLeft: "6h 30m",
  },
  {
    id: 6,
    title: "One Piece OP-09 Sealed Case (12 Boxes)",
    price: "$899.99",
    image: "https://placehold.co/300x300/1D3557/007ACC?text=OP-09+Case",
    bids: 3,
    timeLeft: "4d 16h",
  },
];

export default function EbayStore() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-white">
          eBay <span className="text-brand-gold">Store</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Shop our verified eBay listings for graded cards, sealed product, and more.
        </p>
      </div>

      {/* eBay CTA Banner */}
      <div className="bg-gradient-to-r from-brand-blue/40 to-brand-red/20 rounded-2xl border border-white/10 p-6 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
            Visit Our Official eBay Store
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            100% positive feedback &bull; Fast shipping &bull; Thousands of satisfied customers
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><FiStar className="text-brand-gold" /> Top Rated Seller</span>
            <span className="flex items-center gap-1"><FiTruck className="text-brand-gold" /> Free Shipping on $50+</span>
            <span className="flex items-center gap-1"><FiShoppingBag className="text-brand-gold" /> 2,400+ Items Sold</span>
          </div>
        </div>
        <a
          href="https://www.ebay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 bg-[#0064D2] hover:bg-[#004BA0] text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          <FiExternalLink size={18} />
          Open eBay Store
        </a>
      </div>

      {/* Featured listings */}
      <h2 className="font-display text-2xl text-white mb-6">
        Featured <span className="text-brand-red">Listings</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebayListings.map((item) => (
          <a
            key={item.id}
            href="https://www.ebay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all group"
          >
            <div className="aspect-square bg-brand-blue/20">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-brand-gold">{item.price}</span>
                <span className="text-xs text-gray-400">{item.bids} bids</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">Ends in {item.timeLeft}</span>
                <span className="text-xs text-brand-gold flex items-center gap-1">
                  View <FiExternalLink size={12} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <a
          href="https://www.ebay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-semibold rounded-lg transition-colors"
        >
          Browse All eBay Listings <FiExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
