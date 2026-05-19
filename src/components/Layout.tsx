import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AIAssistant } from './AIAssistant';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
