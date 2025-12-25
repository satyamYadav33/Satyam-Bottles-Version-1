
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ShieldCheck, Thermometer, Leaf, Droplet } from 'lucide-react';
import { PRODUCTS, FEATURES } from '../constants';
import { useCart } from '../context/CartContext';
import GeminiHydrationGuide from '../components/GeminiHydrationGuide';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const featured = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/satemade-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Crystal Clear.<br />
              <span className="text-cyan-400">Perfectly Pure.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Experience the pinnacle of sustainable hydration with Satemades. 
              Our transparent borosilicate bottles are designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-600/20"
              >
                <span>Shop Collection</span>
                <ChevronRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/30 transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Metrics */}
        <div className="absolute bottom-10 right-10 hidden xl:flex space-x-8 text-white z-10">
          <div className="text-center">
            <div className="text-3xl font-bold">50k+</div>
            <div className="text-xs uppercase tracking-widest text-gray-300">Bottles Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">120k</div>
            <div className="text-xs uppercase tracking-widest text-gray-300">Trees Planted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9/5</div>
            <div className="text-xs uppercase tracking-widest text-gray-300">Rating</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pure Quality, Zero Compromise</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => {
              const Icon = { ShieldCheck, Thermometer, Leaf, Droplet }[feature.icon] as any;
              return (
                <div key={idx} className="group p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="w-14 h-14 blue-gradient rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Best Sellers</h2>
              <p className="text-gray-600 max-w-lg">
                Crafted for those who value aesthetics as much as their health. 
                Explore the favorites of the Satemade community.
              </p>
            </div>
            <Link to="/products" className="text-cyan-600 font-bold flex items-center space-x-2 hover:underline">
              <span>View All Products</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featured.map(product => (
              <div key={product.id} className="group relative bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-2xl bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl font-bold text-gray-900 shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                  >
                    Quick Add to Cart
                  </button>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-sm font-bold text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
                  <div className="text-2xl font-bold text-cyan-600">${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Hydration Guide Section */}
      <GeminiHydrationGuide />

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Satemade Circle</h2>
             <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
               Subscribe to receive early access to new collections, sustainable living tips, and 15% off your first order.
             </p>
             <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
               />
               <button type="submit" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold transition-all shadow-lg shadow-cyan-600/20">
                 Join Now
               </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
