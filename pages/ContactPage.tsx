
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Connect.</h1>
          <p className="text-xl text-gray-500 mb-12">
            Have questions about our bottles? Need help with an order? 
            Our hydration specialists are here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p className="text-gray-500">support@satemades.com</p>
                <p className="text-xs text-cyan-600 mt-1">Response time: &lt; 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-500">+1 (888) SATE-MADE</p>
                <p className="text-xs text-blue-600 mt-1">Mon-Fri: 9am - 6pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Visit Our Studio</h4>
                <p className="text-gray-500">123 Crystal Blvd, Suite 400<br />Clearwater, FL 33755</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Subject</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>Order Support</option>
                  <option>Product Inquiries</option>
                  <option>Wholesale</option>
                  <option>Sustainability Partners</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          ) : (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
              <p className="text-gray-500 mb-8">
                Thank you for reaching out. One of our hydration specialists will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-cyan-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
