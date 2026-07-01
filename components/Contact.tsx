export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#1e1a2e]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <span className="gradient-text">Contact</span>
      </h2>
      <p className="text-[#c4b5fd]/50 text-center mb-16">お気軽にご連絡ください</p>

      <div className="max-w-lg mx-auto bg-[#1e1830] border border-[#2a2440] rounded-2xl p-8 text-center">
        <p className="text-[#c4b5fd]/60 mb-8 leading-relaxed">
          転職・業務委託・技術相談など、お気軽にGitHubまたは
          YouTubeのコミュニティからご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/fukumak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-[#f0e6ff] rounded-full text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCJGiRvZIgvHNegEvJ7Jt3ZA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 rounded-full text-sm font-medium transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
