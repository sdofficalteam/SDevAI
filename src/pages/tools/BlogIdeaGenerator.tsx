import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../../components/AdPlaceholder';
import { Lightbulb, Copy } from 'lucide-react';

export function BlogIdeaGenerator() {
  const [keyword, setKeyword] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIdeas = () => {
    if (!keyword) return;
    setLoading(true);
    setTimeout(() => {
      const templates = [
        `10 Surprising Benefits of ${keyword} You Must Know`,
        `The Ultimate Guide to ${keyword} for Beginners`,
        `How to Master ${keyword} in 2026: A Step-by-Step Tutorial`,
        `${keyword} vs The Competition: Which is Better?`,
        `Top 5 Mistakes People Make With ${keyword} (And How to Fix Them)`,
        `The Future of ${keyword}: Trends to Watch`,
        `Why ${keyword} is Essential for Your Business Growth`
      ];
      setIdeas(templates.sort(() => 0.5 - Math.random()).slice(0, 5));
      setLoading(false);
    }, 1200);
  };

  const copyIdea = (idea: string) => {
    navigator.clipboard.writeText(idea);
    alert('Idea copied!');
  };

  return (
    <>
      <Helmet>
        <title>Blog Idea Generator - SDevAI</title>
      </Helmet>
      <div className="py-12 px-4 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Idea Generator</h1>
        <AdPlaceholder position="top" />
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <input 
                 type="text" 
                 value={keyword}
                 onChange={e => setKeyword(e.target.value)}
                 className="flex-1 p-3 border rounded-xl focus:outline-none focus:border-blue-500" 
                 placeholder="Enter a keyword or niche (e.g. remote work)" 
               />
               <button 
                 onClick={generateIdeas}
                 disabled={loading || !keyword}
                 className="bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 flex justify-center items-center gap-2 disabled:opacity-50"
               >
                 <Lightbulb className="w-4 h-4" /> {loading ? 'Brainstorming...' : 'Get Ideas'}
               </button>
            </div>

            {ideas.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-700 mb-4">SEO Blog Topics:</h3>
                {ideas.map((idea, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-lg hover:border-gray-300 transition">
                    <span className="font-medium text-gray-900">{idea}</span>
                    <button onClick={() => copyIdea(idea)} className="p-2 text-gray-500 hover:text-green-600 bg-white rounded shadow-sm border border-gray-200"><Copy className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  );
}
