import { XMLParser } from "fast-xml-parser";

type Video = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
};

const CHANNEL_ID = "UCJGiRvZIgvHNegEvJ7Jt3ZA";

async function fetchVideos(): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    const parsed = parser.parse(xml);
    const entries = parsed?.feed?.entry ?? [];
    const list = Array.isArray(entries) ? entries : [entries];
    return list.slice(0, 6).map((e: Record<string, unknown>) => {
      const videoId = (e["yt:videoId"] as string) ?? "";
      return {
        id: videoId,
        title: (e.title as string) ?? "",
        published: (e.published as string)?.slice(0, 10) ?? "",
        thumbnail: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      };
    });
  } catch {
    return [];
  }
}

export default async function YouTube() {
  const videos = await fetchVideos();

  return (
    <section id="youtube" className="py-24 px-6 bg-[#0f0d1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="gradient-text">YouTube</span>
        </h2>
        <p className="text-[#c4b5fd]/50 text-center mb-4">
          AIを活用してIT技術を初心者向けに解説
        </p>
        <div className="text-center mb-12">
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 border border-red-500/30 rounded-full text-sm hover:bg-red-600/30 transition-colors"
          >
            ▶ チャンネルを見る
          </a>
        </div>

        {videos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover bg-[#1e1830] border border-[#2a2440] rounded-2xl overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <p className="text-[#f0e6ff] text-sm font-medium leading-snug group-hover:text-[#a78bfa] transition-colors line-clamp-2">
                    {v.title}
                  </p>
                  <p className="text-[#c4b5fd]/40 text-xs mt-2">{v.published}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#c4b5fd]/40 text-sm">動画を読み込み中...</p>
        )}
      </div>
    </section>
  );
}
