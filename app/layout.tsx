import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaiheki-nuriekae-navi-deploy.pages.dev"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: "外壁ぬりかえナビ｜外壁塗装業者比較ランキング【2026年最新】",
  description:
    "外壁塗装の業者選びで失敗しないための総合情報サイト。塗料の種類・費用相場・助成金・優良業者ランキングをわかりやすく解説。一括見積もりサービス10社を徹底比較。",
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
    title: "外壁ぬりかえナビ｜外壁塗装業者比較ランキング【2026年最新】",
    description: "外壁塗装の業者選びで失敗しないための総合情報サイト。",
    type: "website",
    locale: "ja_JP",
    siteName: "外壁ぬりかえナビ",
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
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"外壁ぬりかえナビ\",\"url\":\"https://gaiheki-nuriekae-navi-deploy.pages.dev/\",\"logo\":\"https://gaiheki-nuriekae-navi-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://gaiheki-nuriekae-navi-deploy.pages.dev/about/\"]}" }}
        />
        </body>
    </html>
  );
}
