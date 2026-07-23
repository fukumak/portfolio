const projects: {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  pdf?: string;
  wip?: boolean;
}[] = [
  {
    title: "このポートフォリオサイト",
    desc: "Next.js + Tailwind CSS で構築した個人ポートフォリオ。\nClaudeCodeと共同開発。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ClaudeCode"],
    github: "https://github.com/fukumak/portfolio",
    wip: false,
  },
  {
    title: "マニュアル作成ツール",
    desc: "「ブロック」を組み合わせてステップ形式の手順書を作成できるWebアプリ。\nドラッグ&ドロップでの並び替え、インライン編集、プレビュー表示に対応。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demo: "https://manual-tool-murex.vercel.app/",
    wip: true,
  },
  {
    title: "WordPressポートフォリオサイト",
    desc: "WordPressで構築した個人ポートフォリオサイト。ブログ機能とカテゴリ分類を備え、記事の投稿・整理ができる構成。\nローカル環境での構築・検証のため、PDFのみ公開。",
    tags: ["WordPress", "PHP", "MySQL"],
    pdf: "/WordPress.pdf",
    wip: false,
  },
  {
    title: "ポモドーロタイマー",
    desc: "作業中に適切なインターバルを取ることで集中力を維持したいという課題感から自作。\nタスクごとに時間を区切って管理できるようになり、業務を効率的に進められるように。\n円形プログレスリング・自動モード切替・セッション履歴など搭載。\nHTML/CSS/JS のみで動作。",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fukumak/pomodoro-timer",
    demo: "https://fukumak.github.io/pomodoro-timer",
    wip: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#fdf8f1]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">プロジェクト</span>
        </h2>
        <p className="text-[#292524]/60 text-center mb-16">Projects</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-6 flex flex-col"
            >
              {p.wip && (
                <span className="text-xs bg-yellow-500/15 text-yellow-700 border border-yellow-500/40 rounded-full px-2 py-0.5 w-fit mb-3">
                  進行中
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#292524] mb-2">{p.title}</h3>
              <p className="text-[#292524]/70 text-sm leading-relaxed flex-1 whitespace-pre-line">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-[#d97706]/10 text-[#d97706] border border-[#d97706]/20 rounded-full"
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
                    className="text-xs text-[#292524]/50 hover:text-[#d97706] transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#d97706] hover:text-[#292524] transition-colors"
                  >
                    Demo →
                  </a>
                )}
                {p.pdf && (
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#d97706] hover:text-[#292524] transition-colors"
                  >
                    資料を見る →
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="border border-dashed border-[#292524]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-[#292524]/40 text-sm">今後追加予定</p>
          </div>
        </div>
      </div>
    </section>
  );
}
