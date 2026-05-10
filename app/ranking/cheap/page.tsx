import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "安い外壁塗装業者ランキング【2026年版】費用を抑えるコツも解説",
  description: "外壁塗装を安く済ませたい方向けのランキング。費用相場・値引き交渉のコツ・注意点を合わせて解説。",
};

const cheapRanking = [9, 8, 7, 6, 5, 1, 2, 3, 4, 10];

const tips = [
  {
    title: "複数社に見積もりを依頼する",
    desc: "最低3社から見積もりを取ることで相場感がわかり、価格交渉もしやすくなります。",
  },
  {
    title: "閑散期（冬・梅雨）に工事をする",
    desc: "業者の繁忙期（春・秋）を避け、冬季や梅雨の時期に依頼すると値引き交渉に応じてもらえる場合があります。",
  },
  {
    title: "塗料のグレードを一段下げる",
    desc: "フッ素塗料をシリコン塗料に変えるだけで20〜30万円の節約になる場合があります。耐用年数との兼ね合いで検討しましょう。",
  },
  {
    title: "助成金・補助金を活用する",
    desc: "省エネ・断熱改修の補助金や自治体の助成金を活用することで実質的な費用を抑えられます。",
  },
  {
    title: "屋根塗装と同時に依頼する",
    desc: "外壁塗装と屋根塗装を別々に行うと足場代が2回かかりますが、同時施工なら足場代を一回に抑えられます。",
  },
];

const warnings = [
  "極端に安い見積もりは手抜き工事・手抜き塗料の可能性",
  "訪問販売・飛び込み営業は相場より高い場合が多い",
  "保証書がない業者は避ける",
  "材料費のみで人件費・足場代を後から追加請求する業者に注意",
];

export default function CheapRankingPage() {
  const rankedCompanies = cheapRanking
    .map((rank) => companies.find((c) => c.rank === rank))
    .filter(Boolean) as typeof companies;

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: "安い業者ランキング" },
          ]}
        />

        <div className="mt-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            安い外壁塗装業者ランキング【2026年版】
          </h1>
          <p className="mt-2 text-[var(--color-text-sub)]">
            コストパフォーマンスと価格競争力を重視したランキングです。費用を抑えながら品質を確保するためのコツも解説します。
          </p>
          <div className="mt-3 p-3 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-lg text-xs text-[var(--color-text-sub)]">
            ※当ランキングはアフィリエイト広告を含みます（PR）。編集部による独自基準で評価しています。
          </div>
        </div>

        {/* Cost tips */}
        <div className="mb-8 bg-[var(--color-accent-light)] rounded-2xl border border-[var(--color-accent)] p-5">
          <h2 className="text-lg font-bold text-[var(--color-accent-dark)] mb-4">外壁塗装を安くするコツ</h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[var(--color-text)]">{tip.title}</div>
                  <div className="text-xs text-[var(--color-text-sub)] mt-0.5">{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking */}
        <div className="space-y-5">
          {rankedCompanies.map((company, idx) => (
            <div key={company.slug} className="bg-white rounded-2xl border border-[var(--color-border)] p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-white flex-shrink-0 ${
                  idx === 0 ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]"
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-lg font-bold text-[var(--color-text)]">{company.name}</h2>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-bold rounded-md border border-[var(--color-accent)]">
                        コスパNO.1
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--color-text-sub)] mb-2">{company.tagline}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 py-2.5 text-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-lg transition-colors text-sm"
                >
                  無料で見積もり依頼
                </a>
                <Link
                  href={`/company/${company.slug}/`}
                  className="px-4 py-2.5 border border-[var(--color-border)] text-[var(--color-text-sub)] rounded-lg hover:bg-[var(--color-bg)] transition-colors text-sm"
                >
                  詳細
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Warnings */}
        <div className="mt-10 p-5 bg-red-50 rounded-2xl border border-red-200">
          <h3 className="font-bold text-[var(--color-danger)] mb-3 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 1L17 15H1L9 1Z" stroke="var(--color-danger)" strokeWidth="1.5" fill="var(--color-danger)" opacity="0.2"/>
              <path d="M9 7V10.5M9 13H9.01" stroke="var(--color-danger)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            安さだけで選ぶ際の注意点
          </h3>
          <ul className="space-y-2">
            {warnings.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--color-danger)" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="7" cy="7" r="7" opacity="0.2"/>
                </svg>
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link href="/ranking/" className="text-sm text-[var(--color-primary)] hover:underline font-medium">
            総合ランキングを見る &rarr;
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
