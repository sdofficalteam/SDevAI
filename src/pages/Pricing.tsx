import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - SDevAI</title>
        <meta name="description" content="Simple, transparent pricing for SDevAI awesome tools." />
      </Helmet>
      
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-slate-600">No hidden fees. Start for free and upgrade when you need more power.</p>
        </div>

        <AdPlaceholder position="top" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Plan</h3>
            <p className="text-slate-500 mb-6">Perfect for starters</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500">/ forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> Basic SEO Tools</li>
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> Standard Generation Limit</li>
              <li className="flex items-center text-slate-400 gap-3"><X className="w-5 h-5" /> Premium AI Models</li>
              <li className="flex items-center text-slate-400 gap-3"><X className="w-5 h-5" /> Priority Support</li>
            </ul>
            <Link to="/tools" className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition">
              Get Started
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-blue-600 rounded-3xl p-8 shadow-xl text-white transform md:-translate-y-4 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Recommended</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
            <p className="text-blue-200 mb-6">For creators & professionals</p>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-4xl font-extrabold">$19</span>
                <span className="text-blue-200">/ mo</span>
              </div>
              <span className="bg-blue-800 text-xs px-2 py-1 rounded inline-block font-semibold">Coming Soon</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-blue-200" /> All Free Features</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-blue-200" /> Premium AI Models</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-blue-200" /> Advanced SEO Analytics</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-blue-200" /> Priority Support</li>
            </ul>
            <Link to="/maintenance" className="block w-full text-center bg-gray-300 text-gray-500 cursor-not-allowed py-3 rounded-xl font-bold opacity-80" onClick={(e) => e.preventDefault()}>
              Upgrade to Premium
            </Link>
            <div className="mt-3 text-center">
               <Link to="/maintenance" className="text-blue-200 text-sm hover:underline">Learn more in Maintenance</Link>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Plan</h3>
            <p className="text-slate-500 mb-6">For large teams & agencies</p>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-4xl font-extrabold text-slate-900">$49</span>
                <span className="text-slate-500">/ mo</span>
              </div>
               <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded inline-block font-bold mt-2">Coming Soon</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> Everything in Premium</li>
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> API Access</li>
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> Custom Integrations</li>
              <li className="flex items-center text-slate-700 gap-3"><Check className="w-5 h-5 text-green-500" /> 24/7 Dedicated Support</li>
            </ul>
             <Link to="/contact" className="block w-full text-center border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:border-slate-300 hover:bg-slate-50 transition">
              Contact Sales
            </Link>
          </div>
        </div>

        <AdPlaceholder position="bottom" />
      </div>
    </>
  );
}
