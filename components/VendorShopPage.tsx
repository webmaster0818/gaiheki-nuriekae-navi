import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedGuides from "@/components/RelatedGuides";
import shops from "@/data/vendor-shops.json";

// 業者の店舗数・加盟店数（都道府県別）。2026-11-01 新設。数値は公式の店舗検索・都道府県別ページを確認日に開いて集計
export type VendorShop = (typeof shops)[number];

function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}年${m}月${day}日`;
}

export default function VendorShopPage({ v }: { v: VendorShop }) {
  const all = v.rows.flatMap((r) => r.prefs);
  const zero = all.filter((p) => p.count === 0).map((p) => p.name);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: v.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: v.name, href: `/company/${v.slug}/` },
            { label: v.path === "kameiten" ? "加盟店" : "店舗一覧" },
          ]}
        />
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)]">{v.h1}</h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">公式サイトで{formatDate(v.checkedAt)}に確認</p>

        <section className="mt-5 p-5 bg-white border-2 border-[var(--color-primary)] rounded-xl">
          <h2 className="font-bold text-[var(--color-text)] mb-2">結論</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{v.answer}</p>
          {zero.length > 0 && (
            <p className="mt-2 text-sm text-[var(--color-text)]">
              {v.countLabel}が0の都道府県：{zero.join("・")}
            </p>
          )}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">都道府県別の{v.countLabel}</h2>
          <div className="space-y-5">
            {v.rows.map((r) => (
              <div key={r.region}>
                <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">{r.region}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {r.prefs.map((p) => {
                    const url = (p as { url?: string }).url;
                    const inner = (
                      <>
                        <span className="text-[var(--color-text-sub)]">{p.name}</span>
                        <span className={`font-bold ${p.count === 0 ? "text-[var(--color-text-muted)]" : "text-[var(--color-text)]"}`}>
                          {p.count}
                          {v.unit}
                        </span>
                      </>
                    );
                    return url ? (
                      <a key={p.name} href={url} target="_blank" rel="noopener noreferrer nofollow" className="flex justify-between gap-2 px-3 py-2 text-sm bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)]">
                        {inner}
                      </a>
                    ) : (
                      <div key={p.name} className="flex justify-between gap-2 px-3 py-2 text-sm bg-white border border-[var(--color-border)] rounded-lg">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-muted)] leading-relaxed">{v.totalNote}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">集計の方法</h2>
          <ul className="space-y-2">
            {v.method.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">近くの{v.path === "kameiten" ? "加盟店" : "店舗"}の探し方</h2>
          <ul className="space-y-2">
            {v.howto.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">よくある質問</h2>
          <div className="space-y-3">
            {v.faqs.map((f, i) => (
              <details key={i} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="p-4 cursor-pointer font-medium text-sm text-[var(--color-text)]">{f.q}</summary>
                <p className="px-4 pb-4 text-sm text-[var(--color-text-sub)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
          <h2 className="font-bold text-sm text-[var(--color-text)] mb-2">出典（{formatDate(v.checkedAt)}に公式サイトで確認）</h2>
          <ul className="space-y-1">
            {v.sources.map((s) => (
              <li key={s.url} className="text-xs">
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[var(--color-primary)] hover:underline break-all">{s.name}</a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">店舗・加盟店の数は随時変わります。最新の情報は公式サイトでご確認ください。</p>
        </section>

        <RelatedGuides items={v.related} title="関連ページ" />

        <div className="mt-10 text-center">
          <Link href={`/company/${v.slug}/`} className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-xl transition-colors">
            {v.name}の特徴を見る
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
      <SiteFooter />
    </>
  );
}
