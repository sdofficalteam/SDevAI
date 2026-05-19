import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles, Send, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am SDevAI Assistant. How can I help you find the right tool today?',
    },
  ]);
  const [input, setInput] = useState('');

  const quickLinks = [
    { title: 'Open SEO Checker', url: 'https://ai-seochecker.netlify.app/' },
    { title: 'Word Counter', url: 'https://aiwordscounter.netlify.app/' },
    { title: 'AI Writer', url: 'https://ai-content-writer92.netlify.app/' },
    { title: 'Contact Support', path: '/contact' },
    { title: 'View Tools', path: '/tools' },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: 'Thanks for reaching out! Please check our Tools menu or Contact Page for more specific support.',
        },
      ]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white shadow-2xl border border-blue-100 rounded-2xl w-80 sm:w-[320px] flex flex-col overflow-hidden animate-bounce-subtle"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center text-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-xs">SDevAI Assistant</h3>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80 min-h-[250px] bg-white">
              <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                Hi! I'm your AI assistant. Need help finding an <strong>SEO tool</strong> or <strong>Word Counter</strong>?
              </p>
              {messages.slice(1).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-slate-50 border border-slate-100 text-slate-700 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick Suggestions */}
              {messages.length < 3 && (
                <div className="grid grid-cols-1 gap-1.5 mt-2">
                  {quickLinks.slice(0, 3).map((link, idx) => (
                    link.path ? (
                      <Link
                        key={idx}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="w-full py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold hover:bg-blue-100 flex items-center px-3 transition-colors"
                      >
                         <span className="mr-1">💬</span> {link.title}
                      </Link>
                    ) : (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold hover:bg-blue-100 flex items-center px-3 transition-colors"
                      >
                         <span className="mr-1">🔍</span> {link.title}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-slate-50 border-t border-slate-100 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 rounded-xl border border-slate-200 text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 top-1 p-1.5 text-blue-600 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 text-white cursor-pointer hover:scale-105 transition-transform"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
