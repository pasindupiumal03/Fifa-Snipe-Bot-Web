export default function FAQ() {
  const faqs = [
    {
      question: "What makes this the Best FIFA Sniping Bot for FC 26?",
      answer: "Our bot utilizes multi-threaded search technology and human-emulation delay patterns that outperform any existing competitor on the market."
    },
    {
      question: "Is there an FC 26 Autobuyer feature included?",
      answer: "Yes, we offer full automation features including autobuying, autolisting, and market monitoring for the upcoming game cycles."
    },
    {
      question: "How does the EA FC 26 SBC Solver work?",
      answer: "Our AI-driven solver identifies the cheapest players in your club and the market to complete any SBC with maximum coin efficiency."
    },
    {
      question: "Is it really a Safe Sniping Bot?",
      answer: "Safety is our priority. We use proxy rotation, randomized click delay, and behavior randomization to ensure account longevity."
    }
  ];

  return (
    <section className="py-24 bg-deepCharcoal" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neonGreen font-mono mb-4 tracking-[0.3em] uppercase">Support & Help</h2>
          <h3 className="text-4xl lg:text-5xl font-black uppercase">F.A.Q</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel p-6 hover:border-neonGreen/30 transition-all cursor-pointer group">
              <div className="flex justify-between items-center">
                <h4 className="font-bold uppercase">{faq.question}</h4>
                <span className="material-symbols-outlined text-neonGreen group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-4 text-gray-400 text-sm hidden group-active:block group-hover:block transition-all">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
