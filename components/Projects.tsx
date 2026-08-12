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
    title: "マニュアル作成ツール",
    desc: "「ブロック」を組み合わせてステップ形式の手順書を作成できるWebアプリ。手順書づくりに不慣れな人でも迷わず操作できることを最優先に、UIを作り込んだ。\n見出し・手順・画像・表・注意書き・チェックリストなど12種類のブロックに対応。ドラッグ&ドロップでの並べ替え、手順番号の自動採番（1／1-1の2階層）、編集・プレビュー・分割（スクロール同期）の3表示モードを実装。\n画像はブラウザ側で圧縮して保持し、円・矢印・テキストなどの注記を書き込める。連続した変更をひとまとめにするUndoと自動保存にも対応。\n新しいブロック種別を1箇所の登録だけで追加できる構成にし、保存層も差し替え可能な設計としている。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "dnd-kit", "shiki"],
    github: "https://github.com/fukumak/manual-tool-portfolio",
    demo: "https://manual-tool-murex.vercel.app/",
    wip: false,
  },
  {
    title: "このポートフォリオサイト",
    desc: "Next.js + Tailwind CSS で構築した個人ポートフォリオ。\nClaudeCodeと共同開発。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ClaudeCode"],
    github: "https://github.com/fukumak/portfolio",
    wip: false,
  },
  {
    title: "機器管理システム（AssetFlow）",
    desc: "Excelで分散管理されていた機器台帳を1つのWebアプリに集約する試作。\nタブレット・業務携帯・モニターなど機器種別ごとに管理表を作成でき、在庫／設置中／故障／修理中などのステータスを画面上で更新。\n「誰が・いつ・どの状態に・なぜ変更したか」を変更ログとして自動で残し、入出庫の履歴を追跡できる。\n資産番号・電話番号・店舗名での横断検索、店舗マスタ、表示カラムのカスタマイズにも対応。",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fukumak/device-history",
    demo: "https://fukumak.github.io/device-history/",
    wip: false,
  },
  {
    title: "ログイン認証アプリ（Servlet / JSP）",
    desc: "Java の Servlet / JSP で構築した、ユーザー登録・ログイン機能のデモアプリ。\n独自の AuthFilter による保護ページのアクセス制御、HttpSession を使ったセッション管理、登録時のユーザー名重複チェックを実装。\nMaven で WAR にビルドし、Docker（Tomcat 9）でコンテナ化して Render にデプロイしている。\n※学習用のため、ユーザー情報はインメモリ保持（再起動で消去）。無料枠のため初回アクセスは起動に30秒ほどかかります。",
    tags: ["Java", "Servlet", "JSP", "Maven", "Docker", "Tomcat"],
    github: "https://github.com/fukumak/java-portfolio/tree/master/projects/servlet-login-app",
    demo: "https://java-portfolio-4syj.onrender.com",
    wip: false,
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
        <p className="text-[#292524]/70 text-center mb-16">Projects</p>

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
                    className="text-xs px-2 py-1 bg-[#d97706]/10 text-[#92400e] border border-[#d97706]/20 rounded-full"
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
                    className="text-xs text-[#292524]/70 hover:text-[#92400e] transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#92400e] hover:text-[#292524] transition-colors"
                  >
                    Demo →
                  </a>
                )}
                {p.pdf && (
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#92400e] hover:text-[#292524] transition-colors"
                  >
                    資料を見る →
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="border border-dashed border-[#292524]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-[#292524]/70 text-sm">今後追加予定</p>
          </div>
        </div>
      </div>
    </section>
  );
}
