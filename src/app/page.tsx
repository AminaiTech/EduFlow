import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sustainability from "@/components/Sustainability";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Sustainability />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
