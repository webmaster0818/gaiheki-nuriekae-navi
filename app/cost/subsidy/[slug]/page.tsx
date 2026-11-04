import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import wards from "@/data/subsidies-wards.json";

// 区別の塗装助成ページ（2026-11-01 新設）・市の塗装助成（2026-11-04 追加、kind: "city"）。金額・条件はすべて自治体公式ページを確認日に開いて転記
type Ward = (typeof wards)[number];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return wards.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = wards.find((x) => x.slug === slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.description,
    alternates: { canonical: `/cost/subsidy/${w.slug}/` },
  };
}

function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}年${m}月${day}日`;
}

export default async function WardSubsidyPage({ params }: Props) {
  const { slug } = await params;
  const w: Ward | undefined = wards.find((x) => x.slug === slug);
  if (!w) return notFound();

  const isCity = w.kind === "city";
  const org = isCity ? "市" : "区";
  const others = wards.filter((x) => x.slug !== w.slug && x.kind === w.kind);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: w.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const closed = w.status === "受付終了";

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "助成金・補助金ガイド", href: "/cost/subsidy/" },
            ...(isCity ? [] : [{ label: "東京23区の塗装助成", href: "/cost/subsidy/tokyo-23ku/" }]),
            { label: w.ward },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)]">{w.h1}</h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">
          {w.fiscalYear}・{org}公式サイトで{formatDate(w.checkedAt)}に確認
        </p>

        <section className="mt-5 p-5 bg-white border-2 border-[var(--color-primary)] rounded-xl">
          <h2 className="font-bold text-[var(--color-text)] mb-2">結論</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{w.answer}</p>
        </section>

        <div className={`mt-4 p-4 rounded-xl border ${closed ? "bg-amber-50 border-amber-200" : "bg-[var(--color-bg-alt)] border-[var(--color-border)]"}`}>
          <p className={`text-sm font-bold ${closed ? "text-amber-800" : "text-[var(--color-text)]"}`}>
            受付状況：{w.status}（{formatDate(w.checkedAt)}時点）
          </p>
          <p className={`mt-1 text-sm ${closed ? "text-amber-800" : "text-[var(--color-text-sub)]"}`}>{w.statusNote}</p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">{w.program}の概要（{w.fiscalYear}）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[var(--color-border)]">
              <tbody>
                {w.facts.map((f) => (
                  <tr key={f.label} className="border-b border-[var(--color-border)]">
                    <th className="w-1/3 md:w-1/4 text-left align-top p-3 bg-[var(--color-bg-alt)] font-medium text-[var(--color-text)]">{f.label}</th>
                    <td className="p-3 text-[var(--color-text-sub)] leading-relaxed">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {w.calc && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">{w.calc.heading}</h2>
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{w.calc.text}</p>
          </section>
        )}

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">申請前に確認すること</h2>
          <ul className="space-y-2">
            {w.cautions.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">問い合わせ先：{w.contact}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">よくある質問</h2>
          <div className="space-y-3">
            {w.faqs.map((f, i) => (
              <details key={i} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="p-4 cursor-pointer font-medium text-sm text-[var(--color-text)]">{f.q}</summary>
                <p className="px-4 pb-4 text-sm text-[var(--color-text-sub)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
          <h2 className="font-bold text-sm text-[var(--color-text)] mb-2">出典（{formatDate(w.checkedAt)}に公式サイトで確認）</h2>
          <ul className="space-y-1">
            {w.sources.map((s) => (
              <li key={s.url} className="text-xs">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline break-all">{s.name}</a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            助成制度の内容・受付状況は年度途中でも変わることがあります。申請前に必ず{org}の公式サイトまたは担当窓口でご確認ください。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">{isCity ? "ほかの市・区の塗装助成" : "ほかの区・自治体の塗装助成"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/cost/subsidy/${o.slug}/`} className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
                <span className="block font-bold text-sm text-[var(--color-text)]">{o.ward}（{o.status}）</span>
                <span className="block mt-1 text-xs text-[var(--color-text-sub)]">{o.program}</span>
              </Link>
            ))}
            <Link href="/cost/subsidy/tokyo-23ku/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-sm text-[var(--color-text)]">東京23区の一覧</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">区ごとの塗装助成の有無</span>
            </Link>
            <Link href="/cost/subsidy/seirei-shi/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-sm text-[var(--color-text)]">政令指定都市20市の一覧</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">市ごとの塗装助成の有無</span>
            </Link>
          </div>
        </section>

        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl text-center">
          <h2 className="font-bold text-xl mb-2">助成の条件に合う業者を探す</h2>
          <p className="text-white/80 text-sm mb-4">{org}の助成は施工業者の所在地や塗料の性能が条件になります。見積もりの段階で条件を伝えて比較してください。</p>
          <Link href="/ranking/" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors">
            一括見積もりサービスを比較する
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
      <SiteFooter />
    </>
  );
}
