import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </main>
  );
}
