
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 px-4 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-6">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center">
          It looks like you haven't added any Satemade bottles to your cart yet. 
          Start shopping to discover our crystal clear collection.
        </p>
        <Link 
          to="/products" 
          className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-500 transition-all flex items-center space-x-2 shadow-lg"
        >
          <ArrowLeft size={18} />
          <span>Browse Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Shopping Bag ({totalItems})</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-gray-100">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-[10px] uppercase tracking-widest font-bold text-cyan-600 mb-1">
                  <span>{item.category}</span>
                  <span className="text-gray-300">•</span>
                  <span>{item.capacity}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.tagline}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-white rounded-full transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-white rounded-full transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-full"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <Link to="/products" className="inline-flex items-center space-x-2 text-cyan-600 font-bold hover:underline">
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-green-400 font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span className="text-white font-medium">$0.00</span>
              </div>
              <div className="h-px bg-white/10 my-6"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-cyan-400">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-2xl font-bold text-center block transition-all shadow-lg shadow-cyan-500/20 mb-4"
            >
              Checkout Now
            </Link>
            
            <div className="flex items-center justify-center space-x-3 text-gray-400 text-xs">
              <CreditCard size={14} />
              <span>Secure Encrypted Payment</span>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-100 rounded-[2rem] p-6">
            <h4 className="font-bold text-cyan-800 mb-2 flex items-center">
              <span className="mr-2">🌱</span> Eco-Impact
            </h4>
            <p className="text-sm text-cyan-700 leading-relaxed">
              This order will prevent roughly <strong>{(totalItems * 1500).toLocaleString()}</strong> plastic bottles from entering our oceans this year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
