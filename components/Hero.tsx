export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-800/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative animate-fade-in-up">
        <p className="text-[#a78bfa] font-mono text-sm mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Fukumotoの<br />ポートフォリオサイト</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#c4b5fd]/80 font-light mb-2">
          インフラ・セキュリティ × AI開発 × IT教育発信
        </p>
        <p className="text-[#c4b5fd]/50 max-w-lg mx-auto mb-10 leading-relaxed">
          現場で培ったインフラ・セキュリティの知識と、ClaudeCodeを活用したAI開発を掛け合わせ、
          初心者向けIT教育コンテンツも発信しています。
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-[#f0e6ff] rounded-full font-medium transition-colors shadow-lg shadow-violet-900/50"
          >
            Projects を見る
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#2e1a4e] hover:border-[#a78bfa] text-[#c4b5fd]/70 hover:text-[#a78bfa] rounded-full font-medium transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center mt-10 text-[#c4b5fd]/40">
          <a
            href="https://github.com/fukumak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c4b5fd] transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCJGiRvZIgvHNegEvJ7Jt3ZA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors text-sm font-medium"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#c4b5fd]/30 text-xs">
        ↓ scroll
      </div>
    </section>
  );
}
