const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    abbr: "CLF",
    org: "Amazon Web Services",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-300",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    abbr: "SAA",
    org: "Amazon Web Services",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-300",
  },
  {
    name: "AWS Certified Developer – Associate",
    abbr: "DVA",
    org: "Amazon Web Services",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-300",
  },
  {
    name: "ITパスポート",
    abbr: "IP",
    org: "IPA 独立行政法人情報処理推進機構",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300",
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-6 bg-[#0a0812]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-[#c4b5fd]/50 text-center mb-16">保有資格</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.abbr}
              className={`card-hover bg-gradient-to-br ${c.color} border rounded-2xl p-6`}
            >
              <div className="text-2xl font-bold mb-2">{c.abbr}</div>
              <p className="text-sm font-medium leading-snug mb-2">{c.name}</p>
              <p className="text-xs opacity-60">{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
