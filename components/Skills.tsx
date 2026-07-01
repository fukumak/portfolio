const categories = [
  {
    label: "インフラ・ネットワーク",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    skills: ["Linux", "Windows Server", "TCP/IP", "DNS", "VLAN", "VPN", "Firewall"],
  },
  {
    label: "セキュリティ",
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    skills: ["セキュリティ監視", "脆弱性管理", "権限管理", "ログ分析", "インシデント対応"],
  },
  {
    label: "クラウド",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "AWS Lambda"],
  },
  {
    label: "AI・開発",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    skills: ["ClaudeCode", "Python", "TypeScript", "Next.js", "React", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0812]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-[#c4b5fd]/50 text-center mb-16">技術スタック</p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-[#110e1e] border border-[#1e1a2e] rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-[#a78bfa]/60 mb-4 uppercase tracking-wider">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm border ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
