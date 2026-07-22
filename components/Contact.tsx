import Image from "next/image";

export default function Contact() {
  return (
    <section id="links" className="py-24 px-6 bg-[#fdf8f1]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <span className="gradient-text">Links</span>
      </h2>
      <p className="text-[#292524]/60 text-center mb-16">つながる場所</p>

      <div className="max-w-sm mx-auto bg-[#292524]/5 border border-[#292524]/10 rounded-2xl p-8 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#292524]/10 mb-5 relative">
          <Image
            src="/avatar.png"
            alt="Fukumoto"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-[#292524]">Fukumoto</h3>
        <p className="text-[#292524]/50 text-sm mb-6">GitHub: @fukumak</p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/fukumak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#292524]/10 hover:bg-[#d97706] text-[#292524] hover:text-[#fdf8f1] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.57.11.78-.25.78-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.44-2.71 5.42-5.29 5.7.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.79.56A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
