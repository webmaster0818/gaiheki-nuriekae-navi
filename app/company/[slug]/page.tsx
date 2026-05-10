import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の評判・口コミ｜外壁塗装業者比較【2026年最新】`,
    description: `${company.name}の特徴・料金・メリット・デメリット・口コミを詳しく解説。外壁塗装の見積もり依頼前に確認しておきたい情報をまとめました。`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return notFound();

  const rankLabel = company.rank === 1 ? "第1位" : company.rank === 2 ? "第2位" : company.rank === 3 ? "第3位" : `第${company.rank}位`;

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: company.name },
          ]}
        />

        {/* Company header */}
        <div className="mt-4 bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0 ${
              company.rank === 1 ? "bg-[var(--color-secondary)]" : company.rank === 2 ? "bg-gray-400" : company.rank === 3 ? "bg-amber-600" : "bg-[var(--color-primary)]"
            }`}>
              {company.rank}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl font-bold text-[var(--color-text)]">{company.name}</h1>
                <span className="px-2 py-0.5 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold rounded-md">
                  総合{rankLabel}
                </span>
              </div>
              <p className="text-[var(--color-text-sub)] text-sm mb-3">{company.tagline}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < Math.floor(company.rating) ? "var(--color-secondary)" : "var(--color-border)"} aria-hidden="true">
                      <path d="M8 0L9.8 5.6H15.6L10.9 9L12.7 14.6L8 11.2L3.3 14.6L5.1 9L0.4 5.6H6.2L8 0Z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-[var(--color-text)]">{company.rating}</span>
                <span className="text-xs text-[var(--color-text-muted)]">({company.reviewCount.toLocaleString()}件の評価)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {company.features.map((feature, i) => (
              <span key={i} className="px-3 py-1 bg-[var(--color-bg-alt)] text-[var(--color-text-sub)] text-xs rounded-full border border-[var(--color-border)]">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href={company.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 py-3 text-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors text-sm"
            >
              公式サイトで無料見積もり
            </a>
            <Link
              href="/ranking/"
              className="px-4 py-3 border border-[var(--color-border)] text-[var(--color-text-sub)] font-medium rounded-xl hover:bg-[var(--color-bg)] transition-colors text-sm"
            >
              他社と比較
            </Link>
          </div>
          <p className="mt-2 text-center text-xs text-[var(--color-text-muted)]">
            ※当サイトはアフィリエイト広告を掲載しています（PR）
          </p>
        </div>

        {/* Description */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">{company.name}とは？</h2>
          <p className="text-[var(--color-text-sub)] leading-relaxed">{company.description}</p>
          <div className="mt-4 p-3 bg-[var(--color-bg)] rounded-lg text-sm text-[var(--color-text-sub)]">
            <span className="font-medium text-[var(--color-text)]">対応エリア：</span>{company.coverage}
          </div>
        </section>

        {/* Pros/Cons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-green-200 p-5">
            <h3 className="font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 10L8.5 13.5L15 7" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="9"/>
              </svg>
              メリット・強み
            </h3>
            <ul className="space-y-2">
              {company.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--color-accent)" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M3 7L5.5 9.5L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="7" cy="7" r="7" opacity="0.2"/>
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-red-200 p-5">
            <h3 className="font-bold text-[var(--color-danger)] mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 7L13 13M13 7L7 13" strokeLinecap="round"/>
                <circle cx="10" cy="10" r="9"/>
              </svg>
              デメリット・注意点
            </h3>
            <ul className="space-y-2">
              {company.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--color-danger)" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M5 5L9 9M9 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <circle cx="7" cy="7" r="7" opacity="0.2"/>
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl border border-[var(--color-primary)] text-center">
          <h3 className="font-bold text-xl text-[var(--color-text)] mb-2">{company.name}で無料見積もりを依頼する</h3>
          <p className="text-sm text-[var(--color-text-sub)] mb-4">しつこい営業なし。見積もり後のキャンセルも無料</p>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl text-lg transition-colors"
          >
            公式サイトへ（無料）
          </a>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">PR・外部サイトへ移動します</p>
        </div>

        {/* Other companies */}
        <section className="mt-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">他の業者と比較する</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {companies
              .filter((c) => c.slug !== slug)
              .slice(0, 6)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/company/${c.slug}/`}
                  className="p-3 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors text-sm"
                >
                  <div className="font-medium text-[var(--color-text)] mb-1">{c.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">評価: {c.rating}</div>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
