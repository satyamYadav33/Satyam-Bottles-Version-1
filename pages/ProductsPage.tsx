
import React, { useState } from 'react';
import { Filter, Star, Heart, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const filteredProducts = PRODUCTS
    .filter(p => filter === 'All' || p.category === filter)
    .sort((a, b) => {
      if (sortBy === 'PriceLow') return a.price - b.price;
      if (sortBy === 'PriceHigh') return b.price - a.price;
      return 0;
    });

  const categories = ['All', 'Daily', 'Sport', 'Office', 'Travel'];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop Our Collection</h1>
          <p className="text-gray-500">Premium transparent hydration for every moment of your day.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <Filter size={18} className="text-gray-400" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent focus:outline-none text-sm font-medium"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <span className="text-gray-400 text-sm">Sort:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Featured">Featured</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <Heart size={18} />
              </button>
              {product.isFeatured && (
                <div className="absolute top-4 left-4 bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Best Seller
                </div>
              )}
              <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-cyan-600 transition-colors"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs text-cyan-600 font-bold tracking-widest uppercase mb-2">
                {product.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
                <div className="flex items-center text-sm text-gray-400">
                  <Star size={14} className="text-yellow-400 fill-current mr-1" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No products found in this category.</p>
          <button 
            onClick={() => setFilter('All')}
            className="mt-4 text-cyan-600 font-bold underline"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
