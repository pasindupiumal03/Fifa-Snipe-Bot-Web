export default function CoreArchitecture() {
  const features = [
    {
      title: "Fastest Search",
      description: "Optimized multi-threaded search algorithms that query the market 10x faster than the standard web app limit without triggers.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      ),
      specs: ["> SUB-10MS LATENCY", "> MULTI-PAGE PARSING"]
    },
    {
      title: "Auto-Listing",
      description: "Dynamic price evaluation engine. Automatically lists sniped cards at current market value for maximum ROI and instant profit.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      ),
      specs: ["> PROFIT MARGIN TRACKING", "> INSTANT RELISTING"]
    },
    {
      title: "Ban Protection",
      description: "Human-emulation technology with randomized delay patterns and CAPTCHA handling to keep your account safe from detection.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      ),
      specs: ["> PROXY ROTATION", "> BEHAVIOR RANDOMIZATION"]
    }
  ];

  return (
    <section className="py-24 bg-panelGray/50 border-y border-white/5" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-neonGreen font-mono mb-4 tracking-[0.3em] uppercase">Core Architecture</h2>
            <h3 className="text-4xl lg:text-5xl font-black uppercase">Engineered for Victory</h3>
          </div>
          <div className="text-gray-500 font-mono text-sm">
            // PERFORMANCE_REPORT: 0.004S_LATENCY
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 border-l-4 border-l-neonGreen relative overflow-hidden group">
              <div className="text-neonGreen mb-6 text-4xl">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 uppercase">{feature.title}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="text-xs font-mono text-neonGreen/70 space-y-2">
                {feature.specs.map((spec, sIndex) => (
                  <li key={sIndex}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
