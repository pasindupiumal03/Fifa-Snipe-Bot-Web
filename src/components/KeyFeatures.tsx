export default function KeyFeatures() {
  const features = [
    { icon: "target", title: "Snipe Automatically", desc: "Snipe players faster than any human with our millisecond-accurate execution engine." },
    { icon: "list_alt", title: "List Automatically", desc: "List players automatically on the market after being sniped for maximum efficiency." },
    { icon: "integration_instructions", title: "Futbin Integration", desc: "Get real-time prices from Futbin directly into the Web App for accurate market data." },
    { icon: "psychology", title: "Human-Like Algorithm", desc: "Special algorithms emulating human behavior to protect your account from detection." },
    { icon: "filter_list", title: "Multi-Filter Search", desc: "Apply multiple advanced filters at once to increase your sniping profit margins." },
    { icon: "grade", title: "Snipe by Rating", desc: "Snipe players based on specific rating ranges you provide for ultimate targeting." },
    { icon: "auto_fix_high", title: "Auto Rarity Filler", desc: "Automatically fills in player rarity based on your custom search settings." },
    { icon: "calculate", title: "Snipe Price Calculator", desc: "Calculates and sets the optimal sniping price for you based on market trends." },
    { icon: "payments", title: "Profit Calculator", desc: "Know exactly how much profit you're making in real-time with our dashboard." },
    { icon: "security", title: "Safe Sniping", desc: "Features designed to protect you from losing coins and account flags." },
    { icon: "play_circle", title: "Video Tutorials", desc: "Everything you need to get comfortable with the bot in minutes." },
    { icon: "shopping_cart_checkout", title: "One Time Purchase", desc: "Purchase once and get access throughout the game cycle with all updates included." },
  ];

  return (
    <section className="py-24 bg-black" id="key-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neonGreen font-mono mb-4 tracking-[0.3em] uppercase">Powerful Toolkit</h2>
          <h3 className="text-4xl lg:text-5xl font-black uppercase">Our Key Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 group hover:border-neonGreen/40 transition-all">
              <span className="material-symbols-outlined text-neonGreen text-4xl mb-6">{feature.icon}</span>
              <h4 className="text-xl font-bold mb-4 uppercase">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
