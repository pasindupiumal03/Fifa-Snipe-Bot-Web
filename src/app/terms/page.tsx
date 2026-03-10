import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-deepCharcoal flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full text-white">
        <h1 className="text-4xl font-black uppercase mb-8 text-neonGreen">Terms and Conditions</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. ACCEPTANCE OF TERMS</h2>
            <p>
              By accessing or using FutSnipe BOT services, including but not limited to our website, the bot, or any other products or services provided by FutSnipe BOT (collectively, the "Service"), you agree to be bound by these Terms. Your use of the Services signifies your acceptance of the Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. ACCOUNT CREATION</h2>
            <p>
              To use FutSnipe BOT and all its features, you are required to create an account. You must provide accurate and complete information during account creation. You are responsible for all activities that occur on your account and for keeping your password secure. FutSnipe BOT will not use your information for purposes other than what is necessary to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. USE OF THE SERVICES</h2>
            <p>
              FutSnipe BOT is a tool to assist enhance your Ultimate Team experience. We are not responsible for how you use it. The way you use the tool is up to you, and you should be aware that EA and other platforms have their own terms of service that you must comply with. FutSnipe BOT is not liable for any repercussions or penalties from third parties (e.g., EA) that result from using the bot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>
              All content and materials on FutSnipe BOT (including text, graphics, images, logos, and software) are the property of FutSnipe BOT. No license is granted for users to copy, modify, distribute, or use any of the software or content in any way. Sharing or distributing FutSnipe BOT software is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. DISCLAIMERS</h2>
            <p>
              FutSnipe BOT provides services on an "as is" and "as available" basis. We make no guarantees or warranties, express or implied, about the operation of the services, including uptime or error-free performance. FutSnipe BOT is not liable for any damages, direct or indirect, arising from the use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. LIMITATION OF LIABILITY</h2>
            <p>
              FutSnipe BOT is not responsible for any damages or losses arising from the use or inability to use the bot. This includes, but is not limited to, bans or restrictions from EA or other third parties.
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
