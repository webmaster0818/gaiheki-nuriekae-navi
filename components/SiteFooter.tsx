import Link from "next/link";

export default function SiteFooter() {
  const currentYear = 2026;
  return (
    <footer className="bg-[var(--color-text)] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-[var(--color-primary)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
                  <rect x="10" y="2" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                  <rect x="2" y="10" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                  <rect x="10" y="10" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-white">外壁ぬりかえナビ</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              外壁塗装の業者選びで失敗しないための総合情報サイト。塗料の種類・費用・助成金・優良業者を徹底解説。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-300">コンテンツ</h3>
            <ul className="space-y-2">
              {[
                { href: "/ranking/", label: "業者ランキング" },
                { href: "/ranking/cheap/", label: "安い業者ランキング" },
                { href: "/cost/price/", label: "費用・相場" },
                { href: "/cost/subsidy/", label: "助成金・補助金" },
                { href: "/paint/comparison/", label: "塗料を比較する" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-300">サイト情報</h3>
            <ul className="space-y-2">
              {[
                { href: "/terms/", label: "利用規約" },
                { href: "/privacy/", label: "プライバシーポリシー" },
                { href: "/content-policy/", label: "コンテンツポリシー" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded-lg text-xs text-gray-400 leading-relaxed">
              <p className="font-medium text-gray-300 mb-1">運営会社</p>
              <p>株式会社MediaX</p>
              <p className="mt-1 text-xs">
                ※当サイトは広告収益（アフィリエイト）により運営されています。掲載内容はコンテンツポリシーに基づき公正に作成しています。
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} 外壁ぬりかえナビ (MediaX Inc.) All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">利用規約</Link>
            <Link href="/privacy/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">プライバシー</Link>
            <Link href="/content-policy/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">コンテンツポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
