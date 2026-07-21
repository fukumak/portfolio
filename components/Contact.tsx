export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#fdf8f1]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <span className="gradient-text">Contact</span>
      </h2>
      <p className="text-[#292524]/60 text-center mb-16">お気軽にご連絡ください</p>

      <div className="max-w-lg mx-auto bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-8 text-center">
        <p className="text-[#292524]/70 mb-8 leading-relaxed">
          転職・業務委託・技術相談など、お気軽にGitHubまたは
          YouTubeのコミュニティからご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/fukumak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#d97706] hover:bg-[#b45309] text-[#fdf8f1] rounded-full text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCJGiRvZIgvHNegEvJ7Jt3ZA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-600/10 hover:bg-red-600/20 text-red-600 border border-red-500/30 rounded-full text-sm font-medium transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
