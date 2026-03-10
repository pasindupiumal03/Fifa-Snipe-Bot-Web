export default function Performance() {
  const tableData = [
    { label: "Search Frequency", standard: "1-2s Interval", pro: "Variable (min 100ms)" },
    { label: "Request Throttling", standard: "Fixed", pro: "Smart-Adapt Technology" },
    { label: "Multi-Targeting", standard: "Max 3 Filters", pro: "Unlimited Sessions" },
    { label: "CAPTCHA Solver", standard: "Manual", pro: "AI-Driven Auto-Solve" },
    { label: "Success Rate", standard: "~45% Snipes", pro: "98.4% Win Rate" },
  ];

  return (
    <section className="py-24" id="comparison">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">Unmatched Speed</h2>
          <p className="text-gray-500 font-mono italic">COMPETITOR BENCHMARK DATA v2.1</p>
        </div>
        <div className="overflow-x-auto glass-panel p-1 rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 uppercase font-mono text-sm">
                <th className="p-6">Feature</th>
                <th className="p-6">Standard Bots</th>
                <th className="p-6 text-neonGreen">FutSnipe BOT</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {tableData.map((row, index) => (
                <tr key={index} className={index !== tableData.length - 1 ? "border-b border-white/5" : ""}>
                  <td className="p-6 font-bold">{row.label}</td>
                  <td className="p-6">{row.standard}</td>
                  <td className={`p-6 text-neonGreen font-bold`}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
