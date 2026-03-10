import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-deepCharcoal flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full text-white">
        <h1 className="text-4xl font-black uppercase mb-8 text-neonGreen">Refund Policy</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="mb-4">
              Due to FutSnipe BOT being a digital product, <strong className="text-white">All sales are final</strong>.
            </p>
            <p className="mb-4">
              However, refunds will only be considered under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
              <li>You have not been able to set up or activate the bot.</li>
              <li>It has been less than 24 hours since your purchase.</li>
            </ul>
            <p>
              If both these conditions are met, you may be eligible for a refund, but it is handled on a case-by-case basis. FutSnipe BOT will do everything possible to assist with setup before a refund is considered. If the bot has been activated (meaning the bot has been set up and used), you are no longer eligible for a refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">DISPUTE RESOLUTION:</h2>
            <p>
              If you encounter any issues with the service, we encourage you to contact FutSnipe BOT directly to address and resolve the matter as quickly as possible. Our team is committed to resolving any concerns you may have. Please note that disputes related to account bans or penalties imposed by EA or any third-party services will not be considered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">LICENSE RESTRICTIONS:</h2>
            <p className="mb-4">
              Your purchase grants you a personal, non-transferable license to use FutSnipe BOT with your unique FutSnipe BOT Key (your username). This key allows you to access the bot's features, and it must not be shared or distributed.
            </p>
            <p>
              Users are prohibited from copying, modifying, or distributing the bot software. Any violation will result in termination of access without a refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">USE LIMITATION:</h2>
            <p>
              Each FutSnipe BOT Key (your username and password) is tied to a single user account and may not be shared across multiple accounts or with other users. Any attempt to bypass this will result in immediate termination of access without refund.
            </p>
          </section>
        </div>
        
        <div className="mt-16 flex justify-end">
          <Link 
            href="/" 
            className="group flex items-center gap-3 bg-[#1A1A1A] border border-white/10 hover:border-neonGreen/50 py-3 px-6 rounded-xl transition-all"
          >
            <span className="material-symbols-outlined text-gray-400 group-hover:text-neonGreen transition-colors duration-300">
              home
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-neonGreen transition-colors duration-300">
              Return Home
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
