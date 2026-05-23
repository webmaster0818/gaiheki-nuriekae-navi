import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "外壁ぬりかえナビ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #B85C2E 0%, #D4824D 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.1 }}>
          外壁ぬりかえナビ
        </div>
        <div style={{ fontSize: 38, fontWeight: 500, opacity: 0.92, lineHeight: 1.3, maxWidth: 1000 }}>
          外壁塗装業者比較ランキング
        </div>
        <div style={{ marginTop: 60, fontSize: 24, fontWeight: 400, opacity: 0.7 }}>
          2026年最新版
        </div>
      </div>
    ),
    size,
  );
}
