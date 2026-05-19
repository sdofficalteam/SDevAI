import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../../components/AdPlaceholder';
import { Copy, Sparkles } from 'lucide-react';

export function YouTubeTitleGenerator() {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateTitles = () => {
    if (!topic) return;
    setLoading(true);
    // Simulate AI generation with rule-based array
    setTimeout(() => {
      const templates = [
        `The ULTIMATE Guide to ${topic} (2026)`,
        `How to Master ${topic} in 10 Minutes`,
        `I Tried ${topic} for 30 Days (SHOCKING Results)`,
        `10 Secret Hacks for ${topic} You Didn't Know`,
        `${topic} Explained for Beginners!`,
        `Stop Doing ${topic} LIKE THIS (Do This Instead)`,
        `The Only ${topic} Tutorial You Will Ever Need`,
        `Why Everyone is Talking About ${topic} Today`
      ];
      setTitles(templates.sort(() => 0.5 - Math.random()).slice(0, 5));
      setLoading(false);
    }, 1000);
  };

  const copyTitle = (title: string) => {
    navigator.clipboard.writeText(title);
    alert('Title copied!');
  };

  return (
    <>
      <Helmet>
        <title>YouTube Title Generator - SDevAI</title>
      </Helmet>
      <div className="py-12 px-4 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center mb-8">YouTube Title Generator</h1>
        <AdPlaceholder position="top" />
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <input 
                 type="text" 
                 value={topic}
                 onChange={e => setTopic(e.target.value)}
                 className="flex-1 p-3 border rounded-xl focus:outline-none focus:border-blue-500" 
                 placeholder="Enter your video topic (e.g. ChatGPT For Writers)" 
               />
               <button 
                 onClick={generateTitles}
                 disabled={loading || !topic}
                 className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 flex justify-center items-center gap-2 disabled:opacity-50"
               >
                 <Sparkles className="w-4 h-4" /> {loading ? 'Generating...' : 'Generate Viral Titles'}
               </button>
            </div>

            {titles.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-700 mb-4">Trending SEO Titles:</h3>
                {titles.map((t, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-lg hover:border-gray-300 transition cursor-default">
                    <span className="font-medium text-gray-900">{t}</span>
                    <button onClick={() => copyTitle(t)} className="p-2 text-gray-500 hover:text-blue-600 bg-white rounded shadow-sm border border-gray-200"><Copy className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  );
}
