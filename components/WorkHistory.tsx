const history = [
  {
    period: "現在",
    company: "現職",
    role: "インフラ・セキュリティエンジニア",
    items: [
      "機器全般の管理・保守",
      "インフラ・セキュリティ監視",
      "各種権限の管理",
      "ネットワーク疎通確認・トラブルシューティング",
      "ClaudeCodeを活用したAI開発・自動化ツール構築",
    ],
  },
];

export default function WorkHistory() {
  return (
    <section id="history" className="py-24 px-6 bg-[#1e1a2e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">Career</span>
        </h2>
        <p className="text-[#c4b5fd]/50 text-center mb-16">職歴・実績</p>

        <div className="relative border-l border-[#2a2440] ml-4 md:ml-0 md:border-l-0">
          {history.map((h, i) => (
            <div key={i} className="md:grid md:grid-cols-[200px_1fr] gap-8 mb-12">
              <div className="md:text-right">
                <span className="text-[#a78bfa] text-sm font-mono">{h.period}</span>
                <p className="text-[#c4b5fd]/50 text-sm mt-1">{h.company}</p>
              </div>
              <div className="bg-[#1e1830] border border-[#2a2440] rounded-2xl p-6 ml-8 md:ml-0 relative">
                <div className="absolute -left-[41px] md:hidden top-6 w-3 h-3 rounded-full bg-[#7c3aed]" />
                <h3 className="text-lg font-semibold text-[#f0e6ff] mb-4">{h.role}</h3>
                <ul className="space-y-2">
                  {h.items.map((item) => (
                    <li key={item} className="text-[#c4b5fd]/60 text-sm flex gap-2">
                      <span className="text-[#a78bfa] mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
