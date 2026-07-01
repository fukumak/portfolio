import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import YouTube from "@/components/YouTube";
import WorkHistory from "@/components/WorkHistory";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a13] text-[#f0e6ff]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <YouTube />
      <WorkHistory />
      <Certifications />
      <Contact />
      <footer className="text-center py-8 text-[#c4b5fd]/30 text-sm border-t border-[#1e1a2e]">
        © 2025 Fukumoto. Built with Next.js & ClaudeCode.
      </footer>
    </div>
  );
}
