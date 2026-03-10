export default function Pricing() {
  return (
    <section className="py-24 bg-panelGray/50 border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">Select Your Loadout</h2>
          <p className="text-gray-400">Invest in your trade, dominate the market.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Tier */}
          <div className="glass-panel p-10 flex flex-col items-center border border-white/10 hover:border-white/30 transition-all group">
            <div className="text-gray-400 font-mono tracking-widest uppercase mb-4 text-xs">Standard Tier</div>
            <div className="text-5xl font-black mb-8 italic">€19.99<span className="text-lg font-normal not-italic text-gray-500 uppercase">/Mo</span></div>
            <ul className="w-full space-y-4 mb-10 text-sm font-medium">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> 1 Active Instance
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> Basic Anti-Ban Patterns
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> Discord Community Access
              </li>
              <li className="flex items-center gap-3 opacity-30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg> AI Market Prediction
              </li>
            </ul>
            <button className="w-full py-4 border border-white/20 hover:bg-white/10 transition-colors font-bold uppercase tracking-widest">
              Deploy Standard
            </button>
          </div>
          {/* Pro Tier */}
          <div className="glass-panel p-10 flex flex-col items-center relative border-2 border-neonGreen shadow-neon overflow-hidden group">
            <div className="absolute top-0 right-0 bg-neonGreen text-black px-4 py-1 text-[10px] font-black uppercase tracking-tighter">Recommended</div>
            <div className="text-neonGreen font-mono tracking-widest uppercase mb-4 text-xs">Professional Tier</div>
            <div className="text-5xl font-black mb-8 italic text-neonGreen">€39.99<span className="text-lg font-normal not-italic text-neonGreen/60 uppercase">/Mo</span></div>
            <ul className="w-full space-y-4 mb-10 text-sm font-medium">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> 5 Concurrent Instances
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> Advanced AI Anti-Ban
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> Web-Interface Dashboard
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neonGreen" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293l-9.414 9.414L3.293 10.707l-1.414 1.414 5.414 5.414 10.828-10.828-1.414-1.414z"></path>
                </svg> Exclusive Trading Signals
              </li>
            </ul>
            <button className="w-full py-4 bg-neonGreen text-black font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Deploy Elite Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
