import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}
