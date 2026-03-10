import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 glass-panel" data-purpose="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 justify-center md:justify-start hover:opacity-80 transition-opacity">
              <img src="/64.png" alt="FutSnipe BOT" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold tracking-tighter uppercase font-mono">FutSnipe <span className="text-neonGreen">BOT</span></span>
            </Link>
            <p className="text-gray-500 max-w-sm">
              The world&apos;s most advanced FC 26 automation software. Designed for high-frequency traders who demand zero compromise on speed and security.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase mb-6 tracking-widest">Connect</h5>
            <ul className="text-gray-500 space-y-3 font-mono text-sm">
              <li><Link className="hover:text-neonGreen" href="#">Discord Server</Link></li>
              <li><Link className="hover:text-neonGreen" href="#">Twitter / X</Link></li>
              <li><Link className="hover:text-neonGreen" href="#">Telegram News</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase mb-6 tracking-widest">Legal</h5>
            <ul className="text-gray-500 space-y-3 font-mono text-sm">
              <li><Link className="hover:text-neonGreen" href="/terms">Terms of Service</Link></li>
              <li><Link className="hover:text-neonGreen" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-neonGreen" href="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
          <p>© 2026 FutSnipe BOT. ALL RIGHTS RESERVED.</p>
          <p>DISCLAIMER: NOT AFFILIATED WITH ELECTRONIC ARTS INC.</p>
        </div>
      </div>
    </footer>
  );
}
