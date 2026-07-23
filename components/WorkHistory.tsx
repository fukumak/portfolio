const pastCareer = [
  "実家が中華料理屋",
  "調理師専門学校を卒業",
  "ミシュラン星付き料亭で修行",
  "地鶏居酒屋の店長を経験",
  "30歳でIT業界へ転職",
];

const duties = [
  "MDMによる社内デバイス（PC・スマホ等）の一元管理",
  "インフラ・セキュリティ監視、脆弱性管理・ログ分析",
  "インシデント対応、各種システムのアカウント権限管理",
  "ネットワーク疎通確認・トラブルシューティング",
];

const achievements: {
  title: string;
  description: string;
  result: string;
  ongoing?: boolean;
}[] = [
  {
    title: "全店舗タブレットの大規模リプレイス（約4,000台）",
    description:
      "データベースから既存の機器情報を正確に取得・集計し、店舗ごとの必要機器台数を自動で抽出する仕組みを構築。",
    result: "大規模な入れ替え作業における台数把握のミスを防ぎ、プロジェクトの滞りないスムーズな完遂に貢献。",
  },
  {
    title: "全店舗トランシーバーの入れ替え（約6,500台）",
    description:
      "ETLツールを活用し、データベースから人事データと必要機器台数を正確に抽出・紐付けする処理を実装。",
    result: "手作業での集計を排除したことでヒューマンエラーを防止し、作業工数の大幅な削減に貢献。",
  },
  {
    title: "キッティング自動化ツールの改修・機能改善",
    description: "1回で最大7台まで同時キッティングが可能な自動化ツールのスクリプト改修・機能改善を実施。",
    result: "作業時間の大幅な短縮と、設定ミスの削減（品質向上）に大きく貢献。",
  },
  {
    title: "機器入出庫管理のシステム化",
    description:
      "多数のExcelファイルによる煩雑な入出庫管理から脱却するため、新たな入出庫管理システムの構築を推進中。",
    result: "データの分散と入力ミスを解消し、正確な入出庫ログの記録によるガバナンスと管理体制の強化を見込む。",
    ongoing: true,
  },
  {
    title: "人事異動に伴うアカウント・デバイス管理の自動化",
    description:
      "ETLツールとVBAを活用し、人事異動データから異動者を自動抽出する仕組みを構築。",
    result: "アカウント権限やデバイスの棚卸し漏れを防止し、確認・対応にかかる手間を大幅に削減。",
  },
  {
    title: "業務マニュアルの整備",
    description: "誰が見ても迷わず実施できるよう、各業務の手順を体系化したマニュアルを作成。",
    result: "業務の属人化を解消し、作業の効率化とヒューマンエラーの軽減に貢献。",
  },
];

export default function WorkHistory() {
  return (
    <section id="history" className="py-24 px-6 bg-[#fdf8f1]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">キャリア</span>
        </h2>
        <p className="text-[#292524]/60 text-center mb-16">Career</p>

        {/* 過去のキャリア */}
        <div className="relative border-l border-[#292524]/10 pl-8 mb-12 max-w-2xl mx-auto md:mx-0 md:pl-0 md:border-l-0 md:grid md:grid-cols-[140px_1fr] md:gap-6">
          <div className="md:text-right mb-4 md:mb-0">
            <span className="text-[#292524]/40 text-sm font-mono">これまで</span>
            <p className="text-[#292524]/60 text-sm mt-1">料理人からの転身</p>
          </div>
          <div className="relative border-l border-[#292524]/15 md:pl-8">
            <ul className="space-y-6">
              {pastCareer.map((step) => (
                <li key={step} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#292524]/30 -translate-x-1/2" />
                  <span className="text-[#292524]/70 text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 現在 */}
        <div className="relative border-l border-[#292524]/10 md:ml-0 md:border-l-0">
          <div className="md:grid md:grid-cols-[140px_1fr] gap-6 md:pr-4">
            <div className="md:text-right">
              <span className="text-[#b45309] text-sm font-mono">現在</span>
              <p className="text-[#292524]/60 text-sm mt-1">現職</p>
            </div>
            <div className="ml-8 md:ml-0 relative">
              <div className="absolute -left-[41px] md:hidden top-6 w-3 h-3 rounded-full bg-[#d97706]" />

              <div className="bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#292524] mb-4">インフラ・セキュリティエンジニア</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {duties.map((d) => (
                    <li key={d} className="text-[#292524]/70 text-sm flex gap-2">
                      <span className="text-[#d97706] mt-0.5">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-sm font-semibold text-[#b45309] mb-4 uppercase tracking-wider">
                業務改善・プロジェクト実績
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="card-hover bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-[#292524] font-semibold text-sm">{a.title}</h5>
                      {a.ongoing && (
                        <span className="text-xs bg-yellow-500/15 text-yellow-700 border border-yellow-500/40 rounded-full px-2 py-0.5">
                          進行中
                        </span>
                      )}
                    </div>
                    <p className="text-[#292524]/70 text-sm leading-relaxed mb-2">{a.description}</p>
                    <p className="text-[#d97706] text-sm leading-relaxed">→ {a.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
