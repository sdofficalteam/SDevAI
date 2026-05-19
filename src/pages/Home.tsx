import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { toolsList } from '../lib/data';
import * as Icons from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Search, Zap, Globe, Gauge } from 'lucide-react';

export function Home() {
  return (
    <>
      <Helmet>
        <title>SDevAI - The Future of Smart AI Tools is Here</title>
        <meta name="description" content="AI tools for SEO, content writing, blogging, optimization and creator productivity." />
      </Helmet>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10 text-center py-8">
            <div className="flex gap-2 items-center justify-center mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">New Version 2.0</span>
              <span className="text-slate-400 text-xs italic">No Signup Required</span>
            </div>
          
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6"
            >
              The Future of <span className="text-blue-600">Smart AI Tools</span> is Here
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto"
            >
              AI tools for SEO, content writing, blogging, optimization and creator productivity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/tools" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
                <Zap className="w-5 h-5" />
                <span>Start Free</span>
              </Link>
              <Link to="/tools" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition shadow-sm">
                <Search className="w-5 h-5" />
                <span>Explore Tools</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-100"
            >
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-2xl font-bold text-blue-600">50+</span>
                <span className="text-xs text-slate-500 font-medium uppercase mt-1">Tools</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-2xl font-bold text-blue-600">100%</span>
                <span className="text-xs text-slate-500 font-medium uppercase mt-1">SEO Ready</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-2xl font-bold text-blue-600">100%</span>
                <span className="text-xs text-slate-500 font-medium uppercase mt-1">Adsense Safe</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-2xl font-bold text-blue-600">0ms</span>
                <span className="text-xs text-slate-500 font-medium uppercase mt-1">Fast Performance</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AdPlaceholder position="top" />

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Discover Our Tools</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Boost your workflow with our suite of free and premium AI tools.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {toolsList.map((tool, index) => {
              const IconComponent = (Icons as any)[tool.icon] || Icons.Code;
              
              const Wrapper = tool.isExternal ? 'a' : Link;
              const props = tool.isExternal 
                ? { href: tool.url, target: '_blank', rel: 'noreferrer' }
                : { to: tool.path || '#' };

              if (tool.locked) {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={tool.id}
                    className="group relative"
                  >
                    <Wrapper
                      {...props}
                      className="block h-full p-4 bg-slate-100 border border-slate-200 rounded-2xl shadow-sm relative group cursor-not-allowed overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-200">COMING SOON</div>
                      </div>
                      <div className="w-10 h-10 bg-slate-200 text-slate-400 rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-500 mb-1">{tool.title}</h3>
                      <p className="text-xs text-slate-400 mb-4 line-clamp-2">{tool.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                         <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">Premium</span>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={tool.id}
                  className="group relative"
                >
                  <Wrapper
                    {...props}
                    className="block flex flex-col h-full bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">{tool.title}</h3>
                    <p className="text-xs text-slate-500 mb-4 flex-1 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                       <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">Active</span>
                       <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Open Tool &rarr;</span>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AdPlaceholder position="middle" />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-12 relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-blue-700/20 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-extrabold mb-4">Ready to scale your content?</h2>
          <p className="text-blue-100 mb-8 text-lg font-medium">Join us and start optimizing your workflow with SDevAI tools. No signup required.</p>
          <Link to="/tools" className="inline-flex bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition shadow-lg">
            Get Started Now
          </Link>
        </div>
      </section>

      <AdPlaceholder position="footer" />
    </>
  );
}
