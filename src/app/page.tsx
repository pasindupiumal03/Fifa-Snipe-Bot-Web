import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import CoreArchitecture from "@/components/CoreArchitecture";
import KeyFeatures from "@/components/KeyFeatures";
import Performance from "@/components/Performance";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deepCharcoal">
      <Navbar />
      <Hero />
      <Intro />
      <CoreArchitecture />
      <KeyFeatures />
      <Performance />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
