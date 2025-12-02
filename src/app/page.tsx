import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <Gallery />
      <About />
      <Footer />
    </main>
  );
}
