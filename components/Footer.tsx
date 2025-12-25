
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-cyan-600">
              SATEMADES<span className="text-gray-400 font-light">BOTTLES</span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Design-driven hydration for a more sustainable world. Purity you can see, quality you can feel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-500 hover:text-cyan-600 transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-cyan-600 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-cyan-600 transition-colors">Contact Support</Link></li>
              <li><Link to="/cart" className="text-gray-500 hover:text-cyan-600 transition-colors">Shopping Bag</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Sustainability</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">Materials Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">Impact Report 2023</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">Eco Partners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">B Corp Certification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">The Lab Newsletter</h4>
            <p className="text-gray-500 mb-6 text-sm">Get hydration science and early product drops.</p>
            <div className="flex bg-gray-50 rounded-xl overflow-hidden p-1">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-cyan-600 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
          <div>© 2024 Satemades Bottles. All rights reserved.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
