
import React from 'react';
import { Target, Heart, Zap, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Story Hero */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/about-bg/1920/1080" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Purity In Every Pour.</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Satemades was born from a simple observation: the world is beautiful, and the water we drink should be too.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that hydration is more than just a biological necessity—it's a moment of clarity. Our mission is to eliminate single-use plastics by providing a product so beautiful and functional that you'll never want to put it down.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Target className="text-cyan-600 mb-4" />
                  <h4 className="font-bold mb-1">Precision</h4>
                  <p className="text-xs text-gray-500">Every cap and seal is engineered for perfection.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Heart className="text-pink-500 mb-4" />
                  <h4 className="font-bold mb-1">Passion</h4>
                  <p className="text-xs text-gray-500">Founded by designers and environmentalists.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Zap className="text-yellow-500 mb-4" />
                  <h4 className="font-bold mb-1">Innovation</h4>
                  <p className="text-xs text-gray-500">Using advanced borosilicate and heat-resistant tech.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Shield className="text-green-500 mb-4" />
                  <h4 className="font-bold mb-1">Integrity</h4>
                  <p className="text-xs text-gray-500">Ethical manufacturing and fair wages for all.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/bottle-process/800/1000" alt="Process" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                 <p className="text-gray-900 font-bold text-lg mb-2">The Golden Standard</p>
                 <p className="text-gray-500 text-sm italic">"We spent 18 months just perfecting the transparency. It had to look like nothing was there."</p>
                 <p className="text-cyan-600 font-bold mt-4 text-xs tracking-widest uppercase">— Leo Sate, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Impact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold text-cyan-600 mb-4">12M+</div>
              <h4 className="text-xl font-bold mb-2">Plastic Bottles Avoided</h4>
              <p className="text-gray-500">Estimated cumulative impact since our founding in 2021.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-cyan-600 mb-4">42</div>
              <h4 className="text-xl font-bold mb-2">Countries Reached</h4>
              <p className="text-gray-500">Providing pure hydration to communities worldwide.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-cyan-600 mb-4">100%</div>
              <h4 className="text-xl font-bold mb-2">Carbon Neutral</h4>
              <p className="text-gray-500">We offset every gram of CO2 produced in shipping.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
