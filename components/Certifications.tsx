const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    abbr: "CLF",
    org: "Amazon Web Services",
    color: "from-[#d97706]/20 to-[#b45309]/10 border-[#d97706]/30 text-[#d97706]",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    abbr: "SAA",
    org: "Amazon Web Services",
    color: "from-[#d97706]/20 to-[#b45309]/10 border-[#d97706]/30 text-[#d97706]",
  },
  {
    name: "AWS Certified Developer – Associate",
    abbr: "DVA",
    org: "Amazon Web Services",
    color: "from-[#d97706]/20 to-[#b45309]/10 border-[#d97706]/30 text-[#d97706]",
  },
  {
    name: "ITパスポート",
    abbr: "IP",
    org: "IPA 独立行政法人情報処理推進機構",
    color: "from-[#292524]/10 to-[#292524]/5 border-[#292524]/20 text-[#292524]/80",
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-6 bg-[#f3ead9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-[#292524]/60 text-center mb-16">保有資格</p>

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
