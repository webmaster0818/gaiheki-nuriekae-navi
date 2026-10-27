import type { Metadata } from "next";
import { OG_DEFAULT } from "@/lib/og";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaiheki-nuriekae-navi.com"),
  twitter: {
    card: "summary_large_image",
    images: [OG_DEFAULT],
  },
  title: "外壁ぬりかえナビ｜外壁塗装の一括見積もりサービス10社比較ランキング【2026年】",
  description:
    "外壁塗装の一括見積もりサービス10社（ヌリカエ・外壁塗装の窓口・プロタイムズほか）を費用・保証・対応エリアで比較しています。ヌリカエが2026年10月5日に発表した塗装店ランキングの集計方法、塗料別の耐用年数、助成金もまとめています。",
  keywords: [
    "外壁塗装",
    "外壁塗り替え",
    "業者比較",
    "塗料 費用",
    "外壁塗装 相場",
    "一括見積もり",
    "助成金",
    "補助金",
  ],
  openGraph: {
    title: "外壁ぬりかえナビ｜外壁塗装の一括見積もりサービス10社比較ランキング【2026年】",
    description:
      "外壁塗装の一括見積もりサービス10社（ヌリカエ・外壁塗装の窓口・プロタイムズほか）を費用・保証・対応エリアで比較しています。ヌリカエが2026年10月5日に発表した塗装店ランキングの集計方法、塗料別の耐用年数、助成金もまとめています。",
    type: "website",
    locale: "ja_JP",
    siteName: "外壁ぬりかえナビ",
    images: [OG_DEFAULT],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"外壁ぬりかえナビ\",\"url\":\"https://gaiheki-nuriekae-navi.com/\",\"logo\":\"https://gaiheki-nuriekae-navi.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://gaiheki-nuriekae-navi.com/about/\"]}" }}
        />
        </body>
    </html>
  );
}
