"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "私について" },
  { href: "#skills", label: "スキル" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#history", label: "キャリア" },
  { href: "#certs", label: "資格" },
  { href: "#links", label: "リンク" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 開いたメニューはEscキーでも閉じられるようにする
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      aria-label="メインナビゲーション"
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
              <a href={l.href} className="hover:text-[#92400e] transition-colors font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-[#292524]/70 hover:text-[#92400e]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" className="block w-6 h-0.5 bg-current mb-1.5" />
          <span aria-hidden="true" className="block w-6 h-0.5 bg-current mb-1.5" />
          <span aria-hidden="true" className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#fdf8f1]/95 border-b border-[#292524]/10 px-6 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[#292524]/70 hover:text-[#92400e] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
