const strengths = [
  {
    icon: "🛡️",
    title: "インフラ・セキュリティ",
    desc: "・PCやスマートフォンなど、MDMを活用した社内デバイス全般の一元管理を担当\n・ネットワークの安定稼働を支える保守業務や、各システムの厳密なアカウント権限管理など、インフラ運用の幅広い実務に対応可能",
  },
  {
    icon: "🤖",
    title: "AI開発",
    desc: "・ClaudeCodeを活用したAIアプリ開発\n・自動化・効率化ツールの構築が得意\n・機器の入出庫管理システム、マニュアル作成ツールなどを開発",
  },
  {
    icon: "📈",
    title: "業務改善",
    desc: "・Excelベースの手動管理業務に対し、ETLツールおよびAIを導入してプロセスを自動化\n・人為的ミスの防止と大幅な工数削減を実現し、業務効率化に大きく貢献",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fdf8f1]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <span className="gradient-text">私について</span>
      </h2>
      <p className="text-[#292524]/60 text-center mb-16">About Me</p>

      <div className="grid md:grid-cols-3 gap-6">
        {strengths.map((s) => (
          <div
            key={s.title}
            className="card-hover bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-6"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#292524]">{s.title}</h3>
            <p className="text-[#292524]/70 text-sm leading-relaxed whitespace-pre-line">{s.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
