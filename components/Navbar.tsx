"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "私について" },
  { href: "#skills", label: "スキル" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#history", label: "キャリア" },
  { href: "#certs", label: "資格" },
  { href: "#links", label: "Links" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fdf8f1]/90 backdrop-blur-md border-b border-[#292524]/10 shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold gradient-text">
          My Portfolio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm text-[#292524]/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#d97706] transition-colors font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#292524]/70 hover:text-[#d97706]"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fdf8f1]/95 border-b border-[#292524]/10 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[#292524]/70 hover:text-[#d97706] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
