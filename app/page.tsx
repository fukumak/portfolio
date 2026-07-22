import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkHistory from "@/components/WorkHistory";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f1] text-[#292524]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkHistory />
      <Certifications />
      <Contact />
      <footer className="text-center py-8 text-[#292524]/40 text-sm border-t border-[#292524]/10">
        © 2025 Fukumoto. Built with Next.js & ClaudeCode.
      </footer>
    </div>
  );
}
