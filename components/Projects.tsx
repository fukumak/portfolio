const projects: {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  wip?: boolean;
}[] = [
  {
    title: "このポートフォリオサイト",
    desc: "Next.js + Tailwind CSS で構築した個人ポートフォリオ。ClaudeCodeと共同開発。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ClaudeCode"],
    github: "https://github.com/fukumak/portfolio",
    wip: false,
  },
  {
    title: "ポモドーロタイマー",
    desc: "25分集中・5分休憩のポモドーロテクニックをブラウザで実践できるタイマーアプリ。円形プログレスリング・自動モード切替・セッション履歴など搭載。HTML/CSS/JS のみで動作。",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fukumak/pomodoro-timer",
    demo: "https://fukumak.github.io/pomodoro-timer",
    wip: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#1e1a2e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#c4b5fd]/50 text-center mb-16">個人・サイドプロジェクト</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover bg-[#1e1830] border border-[#2a2440] rounded-2xl p-6 flex flex-col"
            >
              {p.wip && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-2 py-0.5 w-fit mb-3">
                  WIP
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#f0e6ff] mb-2">{p.title}</h3>
              <p className="text-[#c4b5fd]/60 text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-violet-500/10 text-[#a78bfa] border border-violet-500/20 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#c4b5fd]/40 hover:text-[#a78bfa] transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="border border-dashed border-[#2e1a4e] rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-[#c4b5fd]/30 text-sm">今後追加予定</p>
          </div>
        </div>
      </div>
    </section>
  );
}
