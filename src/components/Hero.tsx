import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" data-purpose="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neonGreen/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-neonGreen/30 bg-neonGreen/5 rounded-full">
          <span className="text-neonGreen text-xs font-mono tracking-widest uppercase">Status: Undetected - FC 26 Ready</span>
        </div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter mb-8 leading-none italic uppercase">
          The Ultimate Edge in <br />
          <span className="text-neonGreen neon-text-glow">FC 26 Trading</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg lg:text-xl mb-12 font-light leading-relaxed">
          Dominate the Ultimate Team market with millisecond execution. Our neural-processing sniping engine ensures you hit every target before the competition even blinks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link className="w-full sm:w-auto px-10 py-5 bg-neonGreen text-black font-black text-lg tracking-widest uppercase hover:scale-105 transition-transform shadow-neonStrong" href="#pricing">
            Register Now
          </Link>
        </div>
        <div className="mt-20 relative mx-auto w-fit max-w-full group">
          <div className="absolute -inset-1 bg-neonGreen/20 blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative glass-panel rounded-lg overflow-hidden border border-white/10 p-2">
            <img 
              alt="FutSnipe BOT Interface" 
              className="rounded shadow-2xl" 
              src="/image.png" 
            />
            <div className="scanline"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
