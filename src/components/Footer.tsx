import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Cookies', path: '/cookies' },
    { name: 'DMCA', path: '/dmca' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-[10px] text-slate-500 font-medium shrink-0 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-bold text-sm text-slate-800">SDevAI</span>
            <p className="mt-2 text-[11px] text-slate-500">
              The Future of Smart AI Tools is Here. AI tools for SEO, content writing, blogging, optimization and creator productivity.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="hover:text-blue-600 transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Contact Us</h3>
            <ul className="space-y-2 text-[11px] text-slate-500">
              <li className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-slate-400" />
                <a href="mailto:Sdofficalteam@gmail.com" className="hover:text-blue-600">
                  Sdofficalteam@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-slate-400" />
                <a href="https://wa.me/923127146088" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                  03127146088
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between">
          <p className="flex items-center gap-2">
             <span>© 2026 SDevAI</span>
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> All Systems Operational</span>
             <span className="text-slate-300">|</span>
             <span className="text-slate-800 font-bold">WA: 0312 7146088</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
