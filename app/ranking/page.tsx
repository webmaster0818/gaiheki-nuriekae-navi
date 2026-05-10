import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "外壁塗装業者ランキング【2026年最新】10社を徹底比較",
  description: "外壁塗装の一括見積もりサービス10社を料金・対応エリア・保証・口コミで徹底比較。あなたに最適な業者が見つかります。",
};

export default function RankingPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "業者ランキング" }]} />

        <div className="mt-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            外壁塗装業者ランキング【2026年最新】
          </h1>
          <p className="mt-2 text-[var(--color-text-sub)]">
            一括見積もりサービス10社を対応エリア・業者数・保証・口コミで徹底比較しました。
          </p>
          <div className="mt-3 p-3 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-lg text-xs text-[var(--color-text-sub)]">
            ※当ランキングはアフィリエイト広告を含みます（PR）。編集部による独自基準で評価しています。
          </div>
        </div>

        <div className="space-y-5">
          {companies.map((company) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl border-2 p-6 ${
                company.rank <= 3 ? "border-[var(--color-secondary)]" : "border-[var(--color-border)]"
              } shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0 ${
                    company.rank === 1 ? "bg-[var(--color-secondary)]" :
                    company.rank === 2 ? "bg-gray-400" :
                    company.rank === 3 ? "bg-amber-600" :
                    "bg-[var(--color-primary)]"
                  }`}
                >
                  {company.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{company.name}</h2>
                    {company.rank <= 3 && (
                      <span className="px-2 py-0.5 bg-[var(--color-secondary-light)] text-[var(--color-secondary-dark)] text-xs font-bold rounded-md border border-[var(--color-secondary)]">
                        TOP{company.rank}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-sub)] mb-2">{company.tagline}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill={i < Math.floor(company.rating) ? "var(--color-secondary)" : "var(--color-border)"} aria-hidden="true">
                          <path d="M8 0L9.8 5.6H15.6L10.9 9L12.7 14.6L8 11.2L3.3 14.6L5.1 9L0.4 5.6H6.2L8 0Z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[var(--color-text)]">{company.rating}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">({company.reviewCount.toLocaleString()}件)</span>
                    <span className="text-xs text-[var(--color-text-muted)] ml-2">対応: {company.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {company.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-[var(--color-bg-alt)] text-[var(--color-text-sub)] text-xs rounded-md">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 py-3 text-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors text-sm"
                >
                  公式サイトで無料見積もり
                </a>
                <Link
                  href={`/company/${company.slug}/`}
                  className="sm:w-32 py-3 text-center border border-[var(--color-border)] text-[var(--color-text-sub)] font-medium rounded-xl hover:bg-[var(--color-bg)] transition-colors text-sm"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-[var(--color-primary-light)] rounded-2xl border border-[var(--color-primary)]">
          <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">費用を抑えたい方はこちら</h3>
          <p className="text-sm text-[var(--color-text-sub)] mb-3">価格重視でランキング。安く外壁塗装できる業者を比較しています。</p>
          <Link href="/ranking/cheap/" className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-primary)] text-white font-bold rounded-lg text-sm hover:bg-[var(--color-primary-dark)] transition-colors">
            安い業者ランキングを見る
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
