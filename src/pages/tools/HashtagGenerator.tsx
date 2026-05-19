import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../../components/AdPlaceholder';
import { Copy, Hash } from 'lucide-react';

export function HashtagGenerator() {
  const [topic, setTopic] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateTags = () => {
    if (!topic) return;
    setLoading(true);
    setTimeout(() => {
      const base = topic.toLowerCase().replace(/[^a-z0-9]/g, '');
      const generic = ['trending', 'viral', 'explorepage', 'foryou', 'fyp'];
      const contextual = [base, `${base}tips`, `${base}life`, `learn${base}`, `bestof${base}`, `daily${base}`, `${base}hacks`];
      
      const combined = [...contextual, ...generic.sort(() => 0.5 - Math.random()).slice(0, 3)];
      setTags(combined.map(t => `#${t}`));
      setLoading(false);
    }, 800);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(tags.join(' '));
    alert('All tags copied!');
  };

  return (
    <>
      <Helmet>
        <title>Hashtag Generator - SDevAI</title>
      </Helmet>
      <div className="py-12 px-4 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center mb-8">Viral Hashtag Generator</h1>
        <AdPlaceholder position="top" />
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <input 
                 type="text" 
                 value={topic}
                 onChange={e => setTopic(e.target.value)}
                 className="flex-1 p-3 border rounded-xl focus:outline-none focus:border-blue-500" 
                 placeholder="Enter a keyword (e.g. fitness, digitalmarketing)" 
               />
               <button 
                 onClick={generateTags}
                 disabled={loading || !topic}
                 className="bg-purple-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-purple-700 flex justify-center items-center gap-2 disabled:opacity-50"
               >
                 <Hash className="w-4 h-4" /> {loading ? 'Generating...' : 'Generate Tags'}
               </button>
            </div>

            {tags.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700">Generated AI Tags:</h3>
                  <button onClick={copyAll} className="text-sm bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full hover:bg-gray-200 flex items-center gap-1">
                    <Copy className="w-4 h-4" /> Copy All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 p-6 bg-purple-50 rounded-xl border border-purple-100">
                   {tags.map((t, i) => (
                     <span key={i} className="text-purple-700 font-medium">{t}</span>
                   ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
