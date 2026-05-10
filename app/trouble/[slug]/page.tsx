import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import troubles from "@/data/troubles.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return troubles.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trouble = troubles.find((t) => t.slug === slug);
  if (!trouble) return {};
  return {
    title: `${trouble.title}【2026年版】`,
    description: trouble.description,
  };
}

export default async function TroublePage({ params }: Props) {
  const { slug } = await params;
  const trouble = troubles.find((t) => t.slug === slug);
  if (!trouble) return notFound();

  const severityColor = trouble.severity === "最高" ? "bg-red-100 text-red-700 border-red-300" :
    trouble.severity === "高" ? "bg-orange-100 text-orange-700 border-orange-300" :
    trouble.severity === "中〜高" ? "bg-amber-100 text-amber-700 border-amber-300" :
    "bg-yellow-100 text-yellow-700 border-yellow-300";

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "劣化・トラブル" },
            { label: trouble.title },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          {trouble.title}
        </h1>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">{trouble.description}</p>

        {/* Severity / Urgency */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`rounded-xl p-4 border ${severityColor}`}>
            <div className="text-xs font-medium mb-1">深刻度</div>
            <div className="text-lg font-bold">{trouble.severity}</div>
          </div>
          <div className="bg-[var(--color-warning)]/10 border border-[var(--color-warning)] rounded-xl p-4">
            <div className="text-xs font-medium text-[var(--color-warning)] mb-1">対応の緊急度</div>
            <div className="text-sm font-bold text-[var(--color-text)]">{trouble.urgency}</div>
          </div>
        </div>

        {/* Symptoms */}
        {"symptoms" in trouble && trouble.symptoms && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">このような症状がある場合</h2>
            <ul className="space-y-2">
              {trouble.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-[var(--color-text-sub)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="var(--color-danger)" opacity="0.2"/>
                    <path d="M8 5V8.5" stroke="var(--color-danger)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="8" cy="11" r="0.75" fill="var(--color-danger)"/>
                  </svg>
                  {symptom}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Causes */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">主な原因</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {trouble.causes.map((cause, i) => (
              <li key={i} className="flex items-start gap-2 p-3 bg-white border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-sub)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="8" cy="8" r="3" fill="var(--color-primary)" opacity="0.5"/>
                </svg>
                {cause}
              </li>
            ))}
          </ul>
        </section>

        {/* Types (if available) */}
        {"types" in trouble && trouble.types && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">種類・レベル別の特徴</h2>
            <div className="space-y-3">
              {trouble.types.map((type, i) => (
                <div key={i} className="p-4 bg-white border border-[var(--color-border)] rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-[var(--color-text)]">{type.name}</span>
                    {"width" in type && (
                      <span className="text-xs px-2 py-0.5 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full">幅 {type.width}</span>
                    )}
                    {"risk" in type && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${type.risk === "高" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                        リスク: {type.risk}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-sub)]">{type.description}</p>
                  {"urgency" in type && (
                    <p className="mt-1 text-xs text-[var(--color-warning)] font-medium">{type.urgency}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Emergency actions (for rain-leak) */}
        {"emergencyActions" in trouble && trouble.emergencyActions && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">応急処置の手順</h2>
            <ol className="space-y-3">
              {trouble.emergencyActions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-secondary)] text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--color-text-sub)] leading-relaxed">{action}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Risk factors (for mold) */}
        {"riskFactors" in trouble && trouble.riskFactors && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">発生しやすい条件</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trouble.riskFactors.map((factor, i) => (
                <li key={i} className="flex items-start gap-2 p-3 bg-orange-50 border border-orange-200 rounded-lg text-sm text-[var(--color-text-sub)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--color-warning)" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M7 1L13 12H1L7 1Z" opacity="0.3"/>
                    <path d="M7 5V8M7 10H7.01" stroke="var(--color-warning)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {factor}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Repair methods */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">補修・対処方法</h2>
          <ul className="space-y-2">
            {trouble.repairMethods.map((method, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-[var(--color-accent-light)] border border-[var(--color-accent)] rounded-lg text-sm text-[var(--color-text-sub)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M3 8L6 11L13 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {method}
              </li>
            ))}
          </ul>
          <div className="mt-3 p-3 bg-[var(--color-bg)] rounded-lg text-sm">
            <span className="font-medium text-[var(--color-text)]">補修費用の目安：</span>
            <span className="text-[var(--color-text-sub)]">{trouble.repairCost}</span>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">よくある質問</h2>
          <div className="space-y-4">
            {trouble.faqs.map((faq, index) => (
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
        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-danger)] to-red-700 text-white rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-2">外壁のトラブルは早期発見・早期対処が重要</h3>
          <p className="text-white/80 text-sm mb-4">放置すると修繕費が大幅に増加します。今すぐ無料で業者に診断を依頼しましょう。</p>
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors"
          >
            無料で業者に診断を依頼する
          </Link>
        </div>

        {/* Other troubles */}
        <section className="mt-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">他のトラブル・劣化症状を調べる</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {troubles
              .filter((t) => t.slug !== slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/trouble/${t.slug}/`}
                  className="p-3 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-danger)] transition-colors text-sm"
                >
                  <div className="font-medium text-[var(--color-text)] text-xs leading-tight">{t.title.split("｜")[0]}</div>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
