import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-deepCharcoal flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full text-white">
        <h1 className="text-4xl font-black uppercase mb-2 text-neonGreen">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 font-mono text-sm">Effective Date: May 2026</p>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">INTRODUCTION</h2>
            <p className="mb-4">
              At FutSnipe BOT, we are committed to protecting your privacy. This Privacy Policy outlines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>The types of information we collect</li>
              <li>How we use it, and</li>
              <li>The measures we take to ensure its protected.</li>
            </ul>
            <p className="mt-4">
              By using our services, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">INFORMATION WE COLLECT</h2>
            <p className="mb-4">
              We only collect the minimum information necessary for account management and verification purposes. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Name</li>
              <li>Instagram Username</li>
              <li>Email Address</li>
            </ul>
            <p className="mt-4">
              We do not collect any information related to your EA account or the Web App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-4">
              The information we collect is used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Verifying customer accounts</li>
              <li>Managing access to FutSnipe BOT, and</li>
              <li>Ensuring customer support and service continuity.</li>
            </ul>
            <p className="mt-4">
              We do not use your information for marketing purposes or share it with third parties, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">DATA PROTECTION</h2>
            <p>
              We take reasonable measures to protect the information you provide from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">THIRD-PARTY LINKS</h2>
            <p>
              Our website or services may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">CHANGES TO THIS PRIVACY POLICY</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. By continuing to use our services after any changes become effective, you agree to the revised policy.
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
