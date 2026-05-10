import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import paints from "@/data/paints.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return paints.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paint = paints.find((p) => p.slug === slug);
  if (!paint) return {};
  return {
    title: `${paint.title}【2026年版】`,
    description: paint.description,
  };
}

export default async function PaintPage({ params }: Props) {
  const { slug } = await params;
  const paint = paints.find((p) => p.slug === slug);
  if (!paint) return notFound();

  const otherPaints = paints.filter((p) => p.slug !== slug);

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "塗料ガイド", href: "/paint/comparison/" },
            { label: paint.title },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          {paint.title}
        </h1>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">{paint.description}</p>

        {/* Key specs */}
        {slug !== "comparison" && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[var(--color-primary-light)] rounded-xl p-4 text-center">
              <div className="text-xs text-[var(--color-primary)] font-medium mb-1">耐用年数の目安</div>
              <div className="text-xl font-bold text-[var(--color-primary)]">{paint.durability}</div>
            </div>
            <div className="bg-[var(--color-secondary-light)] rounded-xl p-4 text-center">
              <div className="text-xs text-[var(--color-secondary-dark)] font-medium mb-1">塗装単価の目安</div>
              <div className="text-lg font-bold text-[var(--color-secondary-dark)]">{paint.costPerSqm}</div>
            </div>
          </div>
        )}

        {/* Comparison table for comparison page */}
        {"comparisonTable" in paint && paint.comparisonTable && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">4種類の塗料を比較</h2>
            <div className="table-wrapper rounded-xl border border-[var(--color-border)] overflow-hidden">
              <table className="comparison-table w-full">
                <thead>
                  <tr>
                    <th>塗料の種類</th>
                    <th>耐用年数</th>
                    <th>塗装単価</th>
                    <th>特徴</th>
                    <th>向いている方</th>
                  </tr>
                </thead>
                <tbody>
                  {paint.comparisonTable.map((row) => (
                    <tr key={row.type}>
                      <td className="font-medium">{row.type}</td>
                      <td>{row.durability}</td>
                      <td>{row.costPerSqm}</td>
                      <td>{row.feature}</td>
                      <td>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pros/Cons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-green-200 p-5">
            <h3 className="font-bold text-[var(--color-accent)] mb-4">メリット</h3>
            <ul className="space-y-2">
              {paint.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M3.5 8.5L6.5 11.5L12.5 5.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-red-200 p-5">
            <h3 className="font-bold text-[var(--color-danger)] mb-4">デメリット・注意点</h3>
            <ul className="space-y-2">
              {paint.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-danger)" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M5 5L11 11M11 5L5 11" strokeLinecap="round"/>
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended for */}
        <div className="mt-6 p-4 bg-[var(--color-accent-light)] rounded-xl border border-[var(--color-accent)]">
          <h3 className="font-bold text-[var(--color-accent-dark)] mb-2">こんな方におすすめ</h3>
          <p className="text-sm text-[var(--color-text-sub)]">{paint.recommendedFor}</p>
        </div>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">よくある質問</h2>
          <div className="space-y-4">
            {paint.faqs.map((faq, index) => (
              <details key={index} className="group border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer hover:bg-[var(--color-bg)] font-medium text-[var(--color-text)] list-none">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold flex items-center justify-center">Q</span>
                    <span className="text-sm">{faq.q}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-bold flex items-center justify-center">A</span>
                  <p className="text-[var(--color-text-sub)] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-2">どの塗料がいいか業者に相談する</h3>
          <p className="text-white/80 text-sm mb-4">複数社に無料見積もりを依頼して、塗料の最適な選択を確認しましょう</p>
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors"
          >
            無料で業者を比較する
          </Link>
        </div>

        {/* Other paints */}
        <section className="mt-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">他の塗料を比較する</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherPaints.map((p) => (
              <Link
                key={p.slug}
                href={`/paint/${p.slug}/`}
                className="p-3 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors text-center text-sm"
              >
                <div className="font-medium text-[var(--color-text)] text-xs leading-tight">{p.title.split("｜")[0]}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
