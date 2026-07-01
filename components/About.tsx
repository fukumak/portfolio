const strengths = [
  {
    icon: "🛡️",
    title: "インフラ・セキュリティ",
    desc: "機器全般の管理・セキュリティ監視・ネットワーク疎通確認・権限管理など現場経験あり",
  },
  {
    icon: "🤖",
    title: "AI開発",
    desc: "ClaudeCodeを活用したAIアプリ開発。自動化・効率化ツールの構築が得意",
  },
  {
    icon: "🎬",
    title: "IT教育発信",
    desc: "AIを活用してYouTubeでClaudeCode入門・セキュリティ入門などを初心者向けに発信中",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#1e1a2e]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="text-[#c4b5fd]/50 text-center mb-16">3つの強みが重なるエンジニア</p>

      <div className="grid md:grid-cols-3 gap-6">
        {strengths.map((s) => (
          <div
            key={s.title}
            className="card-hover bg-[#1e1830] border border-[#2a2440] rounded-2xl p-6"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#f0e6ff]">{s.title}</h3>
            <p className="text-[#c4b5fd]/60 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
