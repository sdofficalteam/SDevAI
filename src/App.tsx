/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Tools } from './pages/Tools';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Maintenance } from './pages/Maintenance';
import { Legal } from './pages/Legal';

// Tools Pages
import { MetaTagsGenerator } from './pages/tools/MetaTagsGenerator';
import { YouTubeTitleGenerator } from './pages/tools/YouTubeTitleGenerator';
import { HashtagGenerator } from './pages/tools/HashtagGenerator';
import { BlogIdeaGenerator } from './pages/tools/BlogIdeaGenerator';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/maintenance" element={<Maintenance />} />
            
            {/* Legal Pages */}
            <Route path="/:page" element={<Legal />} />

            {/* Internal Tools Pages */}
            <Route path="/tools/meta-tags" element={<MetaTagsGenerator />} />
            <Route path="/tools/youtube-title" element={<YouTubeTitleGenerator />} />
            <Route path="/tools/hashtag-generator" element={<HashtagGenerator />} />
            <Route path="/tools/blog-idea-generator" element={<BlogIdeaGenerator />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
