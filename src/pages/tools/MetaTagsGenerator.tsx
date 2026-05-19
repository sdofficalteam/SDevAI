import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdPlaceholder } from '../../components/AdPlaceholder';
import { Copy, Download, RefreshCw } from 'lucide-react';

export function MetaTagsGenerator() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    imageUrl: '',
    url: ''
  });
  const [generatedTags, setGeneratedTags] = useState('');

  const generateTags = () => {
    const { title, description, keywords, author, imageUrl, url } = formData;
    const tags = `
<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url}">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${description}">
<meta property="twitter:image" content="${imageUrl}">

<!-- Canonical & Robots -->
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow">
    `.trim();
    setGeneratedTags(tags);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTags);
    alert('Copied to clipboard!');
  };

  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedTags], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'meta-tags.html';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <Helmet>
        <title>Meta Tags Generator - SDevAI</title>
      </Helmet>
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Meta Tags Generator</h1>
        <AdPlaceholder position="top" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Input Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Site Title / SEO Title</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Best SEO Tools" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Meta Description</label>
                <textarea className="w-full p-2 border rounded resize-none" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Describe your site..."></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Keywords (comma separated)</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.keywords} onChange={e => setFormData({...formData, keywords: e.target.value})} placeholder="seo, tools, generator" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Author</label>
                  <input type="text" className="w-full p-2 border rounded" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} placeholder="John Doe" />
                </div>
                <div>
                   <label className="block text-sm text-gray-700 mb-1">Site URL</label>
                   <input type="url" className="w-full p-2 border rounded" value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} placeholder="https://example.com" />
                </div>
              </div>
               <div>
                  <label className="block text-sm text-gray-700 mb-1">OG Image URL</label>
                  <input type="url" className="w-full p-2 border rounded" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} placeholder="https://example.com/image.jpg" />
               </div>
               
               <button onClick={generateTags} className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 flex justify-center items-center gap-2">
                 <RefreshCw className="w-4 h-4" /> Generate Tags
               </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
             <h2 className="text-xl font-bold mb-4">Generated Tag Output</h2>
             {generatedTags ? (
               <>
                 <div className="bg-gray-900 text-green-400 p-4 rounded overflow-auto whitespace-pre text-sm font-mono h-[350px]">
                   {generatedTags}
                 </div>
                 <div className="flex gap-4 mt-4">
                   <button onClick={copyToClipboard} className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-100 flex justify-center items-center gap-2">
                     <Copy className="w-4 h-4" /> Copy Tags
                   </button>
                   <button onClick={downloadText} className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-100 flex justify-center items-center gap-2">
                     <Download className="w-4 h-4" /> Download HTML
                   </button>
                 </div>
               </>
             ) : (
               <div className="h-[350px] border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
                 Fill details and generate
               </div>
             )}
          </div>
        </div>
        <AdPlaceholder position="bottom" />
      </div>
    </>
  );
}
