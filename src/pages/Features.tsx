import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function Features() {
  return (
    <>
      <Helmet>
         <title>Features - SDevAI</title>
      </Helmet>
      <div className="py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">SDevAI Features</h1>
        <AdPlaceholder position="top" />
        <div className="prose prose-blue max-w-none text-gray-600">
           <h2>Why choose SDevAI?</h2>
           <p>We provide multiple high-quality tools for modern creators:</p>
           <ul>
             <li>100% Free Tools</li>
             <li>No Login or Registration</li>
             <li>Fast & Secure</li>
             <li>SEO Optimized output</li>
             <li>Adsense Friendly</li>
           </ul>
        </div>
        <AdPlaceholder position="bottom" />
      </div>
    </>
  );
}
