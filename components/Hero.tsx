export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d97706]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#b45309]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#d97706]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative animate-fade-in-up">
        <p className="text-[#d97706] font-mono text-sm mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">My Portfolio</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#292524]/80 font-bold mb-10">
          インフラ・セキュリティ × AI開発 × 業務改善
        </p>
        <p className="text-[#292524]/60 max-w-lg mx-auto mb-10 leading-relaxed">
          現場で培ったインフラ・セキュリティの知識とAI開発を組み合わせ、
          業務改善ツールなどを開発しています。
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#d97706] hover:bg-[#b45309] text-[#fdf8f1] rounded-full font-medium transition-colors shadow-lg shadow-[#b45309]/40"
          >
            Projects を見る
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#292524]/15 hover:border-[#d97706] text-[#292524]/70 hover:text-[#d97706] rounded-full font-medium transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center mt-10 text-[#292524]/50">
          <a
            href="https://github.com/fukumak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#292524] transition-colors text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#292524]/30 text-xs">
        ↓ scroll
      </div>
    </section>
  );
}
