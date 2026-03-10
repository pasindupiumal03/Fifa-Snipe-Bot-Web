"use client";

import Link from 'next/link';
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel" data-purpose="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src="/32.png" alt="FutSnipe BOT" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tighter uppercase font-mono">
              FutSnipe <span className="text-neonGreen">BOT</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
            <Link className="hover:text-neonGreen transition-colors" href="#features">Features</Link>
            <Link className="hover:text-neonGreen transition-colors" href="#comparison">Performance</Link>
            <Link className="hover:text-neonGreen transition-colors" href="#pricing">Pricing</Link>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="px-6 py-2 border border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-black transition-all duration-300 font-bold shadow-neon"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
}
