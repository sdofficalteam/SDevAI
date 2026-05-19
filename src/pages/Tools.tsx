import { Helmet } from 'react-helmet-async';
import { toolsList } from '../lib/data';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function Tools() {
  return (
    <>
      <Helmet>
        <title>All AI Tools - SDevAI</title>
        <meta name="description" content="Explore our library of free and premium AI tools designed for SEO and creators." />
      </Helmet>
      
      <div className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">All AI Tools</h1>
          <p className="text-slate-600 text-lg">Everything you need to optimize and create, in one place.</p>
        </div>

        <AdPlaceholder position="top" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {toolsList.map((tool) => {
            const IconComponent = (Icons as any)[tool.icon] || Icons.Code;
            const Wrapper = tool.isExternal ? 'a' : Link;
            const props = tool.isExternal 
              ? { href: tool.url, target: '_blank', rel: 'noreferrer' }
              : { to: tool.path || '#' };

            if (tool.locked) {
                return (
                  <Wrapper
                    key={tool.id}
                    {...props}
                    className="block flex flex-col h-full p-4 bg-slate-100 border border-slate-200 rounded-2xl shadow-sm relative group cursor-not-allowed overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-200">COMING SOON</div>
                    </div>
                    <div className="w-10 h-10 bg-slate-200 text-slate-400 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-500 mb-1">{tool.title}</h3>
                    <p className="text-xs text-slate-400 mb-4 flex-1 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                       <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">Premium</span>
                    </div>
                  </Wrapper>
                );
            }

            return (
              <Wrapper
                key={tool.id}
                {...props}
                className="block flex flex-col h-full bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors group"
              >
                 <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                 </div>
                 <h3 className="font-bold text-slate-800 mb-1">{tool.title}</h3>
                 <p className="text-xs text-slate-500 mb-4 flex-1 line-clamp-2">{tool.description}</p>
                 <div className="flex items-center justify-between mt-auto pt-2">
                   <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">Active</span>
                   <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Open Tool &rarr;</span>
                 </div>
              </Wrapper>
            );
          })}
        </div>

        <AdPlaceholder position="bottom" />
      </div>
    </>
  );
}
