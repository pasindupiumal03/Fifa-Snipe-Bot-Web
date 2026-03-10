"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user && user.name) {
          setUserName(user.name);
        }
      } catch (e) {
        console.error("Failed to parse user from local storage.");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserName(null);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel" data-purpose="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/32.png" alt="FutSnipe BOT" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tighter uppercase font-mono">
              FutSnipe <span className="text-neonGreen">BOT</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
            <Link className="hover:text-neonGreen transition-colors" href="/#features">Features</Link>
            <Link className="hover:text-neonGreen transition-colors" href="/#comparison">Performance</Link>
            <Link className="hover:text-neonGreen transition-colors" href="/#pricing">Pricing</Link>
            
            {userName ? (
              <div className="flex items-center gap-4">
                <span className="text-white font-bold">Hi, {userName}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-1.5 border border-white/20 text-white/70 hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all duration-300 rounded text-xs"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="px-6 py-2 border border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-black transition-all duration-300 font-bold shadow-neon"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={(name) => setUserName(name)}
      />
    </nav>
  );
}
