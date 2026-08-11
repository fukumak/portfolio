import { ImageResponse } from "next/og";

export const alt =
  "Fukumoto Portfolio — Infrastructure & Security x AI Development x Business Improvement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 日本語はSatoriの既定フォントに含まれないため、カード上の文言は英字で構成している。
// （CJKフォントを同梱すると500KBのバンドル上限を超えるため）
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 88px",
          backgroundColor: "#fdf8f1",
          color: "#292524",
          position: "relative",
        }}
      >
        {/* 背景のアクセント */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: 9999,
            backgroundColor: "rgba(217, 119, 6, 0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "rgba(180, 83, 9, 0.10)",
          }}
        />

        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            color: "#b45309",
            marginBottom: 28,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Fukumoto
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 40,
            fontWeight: 600,
            color: "#7c4a12",
            lineHeight: 1.35,
          }}
        >
          <div>Infrastructure &amp; Security</div>
          <div>x AI Development x Business Improvement</div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 88,
            bottom: 64,
            fontSize: 28,
            color: "#6b5f57",
          }}
        >
          github.com/fukumak
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 14,
            backgroundColor: "#d97706",
          }}
        />
      </div>
    ),
    size,
  );
}
