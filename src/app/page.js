import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Ambient purple glow orbs */}
      <div className="ambient-orbs" aria-hidden="true">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
      </div>

      {/* Hero background image */}
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="" />
      </div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <About />
          <Features />
          <Advantages />
          <Gallery />
        </div>
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
