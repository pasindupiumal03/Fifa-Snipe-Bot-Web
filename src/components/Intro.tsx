export default function Intro() {
  const cards = [
    {
      icon: "rocket_launch",
      title: "THE FASTEST BOT ON THE MARKET",
      description: (
        <>
          Outperform <span className="text-neonGreen">every competitor</span> with unmatched performance. Snipe players <span className="text-neonGreen">faster than anyone</span>.
        </>
      ),
    },
    {
      icon: "speed",
      title: "EASY TO USE",
      description: (
        <>
          Our tutorial video will have you <span className="text-neonGreen">set up and sniping</span> in less than 5 minutes!
        </>
      ),
    },
    {
      icon: "engineering",
      title: "LEAVE THE WORK TO US",
      description: (
        <>
          Our <span className="text-neonGreen">algorithm is powerful</span>. Just pick a player to snipe, and let FutSnipe BOT handle the rest.
        </>
      ),
    },
    {
      icon: "star_rate",
      title: "SIMPLICITY AT ITS FINEST",
      description: (
        <>
          You&apos;ll be a sniping pro in minutes. <span className="text-neonGreen">No learning curve</span>—just watch our tutorial videos and <span className="text-neonGreen">get results</span>.
        </>
      ),
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-20 uppercase">
          EVERYTHING YOU NEED TO KNOW ABOUT <span className="text-neonGreen neon-text-glow">FutSnipe BOT</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-[#050505] border border-white/5 p-8 flex flex-col items-center text-center group hover:border-neonGreen/30 transition-colors"
            >
              <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                <span className="material-symbols-outlined text-neonGreen text-6xl">{card.icon}</span>
              </div>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <a 
          className="inline-flex items-center gap-2 px-10 py-4 font-bold uppercase tracking-widest transition-all rounded-sm bg-neonGreen text-black hover:scale-105" 
          href="#pricing"
        >
          PURCHASE NOW
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
      </div>
    </section>
  );
}
