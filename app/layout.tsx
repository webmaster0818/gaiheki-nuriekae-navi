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
  title: "外壁ぬりかえナビ｜外壁塗装業者比較ランキング【2026年最新】",
  description:
    "外壁塗装の業者選びに役立つ情報を提供する総合情報サイトです。塗料の種類・費用相場・助成金・業者ランキングをご説明し、一括見積もりサービス10社を比較・掲載しています。",
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
    description: "外壁塗装の業者選びに役立つ情報を提供する総合情報サイトです。",
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
