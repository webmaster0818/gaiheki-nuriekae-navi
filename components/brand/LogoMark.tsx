import { logoSvg, GW_NAVY, GW_PAINT } from "./marks";

// ヘッダー・フッター・ファビコン共通のロゴマーク（塗り替え中の家）。
export default function LogoMark({ size = 36, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const a = tone === "light" ? "#FFFFFF" : GW_NAVY;
  const b = tone === "light" ? "#8FBBE0" : GW_PAINT;
  const cut = tone === "light" ? "#1E293B" : "#FFFFFF";
  return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logoSvg(a, b, cut) }} />;
}
