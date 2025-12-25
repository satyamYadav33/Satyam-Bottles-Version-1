
import React, { useState } from 'react';
import { Bot, Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { getHydrationAdvice } from '../services/geminiService';

const GeminiHydrationGuide: React.FC = () => {
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.trim()) return;
    setLoading(true);
    const result = await getHydrationAdvice(profile);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-cyan-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Bot size={18} className="text-cyan-300" />
            <span className="text-sm font-semibold tracking-wider uppercase">AI Hydration Consultant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Ideal Hydration Ritual</h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Tell our AI about your lifestyle, activity level, and climate, and we'll recommend the perfect Satemade setup for you.
          </p>
        </div>

        {!advice ? (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <textarea
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder="e.g., I'm an avid runner living in a humid city. I spend 8 hours in an office but run 10k every evening."
              className="w-full h-32 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all mb-6"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading || !profile.trim()}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span>Analyzing Your Profile...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Get AI Recommendation</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="bg-white text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Your Personal Report</h3>
                <p className="text-cyan-600 font-medium">Recommended: {advice.recommendedSize} Satemade</p>
              </div>
              <button 
                onClick={() => setAdvice(null)}
                className="text-gray-400 hover:text-gray-600 text-sm underline"
              >
                Reset
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm">1</span>
                  <span>Why this bottle?</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">{advice.reasoning}</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">2</span>
                  <span>Pro Hydration Tips</span>
                </h4>
                <ul className="space-y-4">
                  {advice.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-600">
                      <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="mt-12 w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Shop {advice.recommendedSize} Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiHydrationGuide;
