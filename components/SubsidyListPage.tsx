import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

// 自治体別の塗装助成一覧（政令市・23区）。2026-11-01 新設
export type SubsidyRow = {
  name: string;
  verdict: string;
  program: string;
  summary: string;
  quote?: string;
  status?: string;
  detailHref?: string;
  sources: { name: string; url: string }[];
};

export type VerdictGroup = { verdict: string; desc: string };

type Props = {
  breadcrumbLabel: string;
  h1: string;
  lead: string;
  checkedAt: string;
  groups: VerdictGroup[];
  rows: SubsidyRow[];
  pendingNote?: string;
  notes: string[];
  faqs: { q: string; a: string }[];
};

function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}年${m}月${day}日`;
}

export default function SubsidyListPage(p: Props) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "助成金・補助金ガイド", href: "/cost/subsidy/" }, { label: p.breadcrumbLabel }]} />
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)]">{p.h1}</h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">各自治体の公式サイトを{formatDate(p.checkedAt)}に確認</p>
        <p className="mt-4 text-sm text-[var(--color-text-sub)] leading-relaxed">{p.lead}</p>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {p.groups.map((g) => {
            const count = p.rows.filter((r) => r.verdict === g.verdict).length;
            return (
              <div key={g.verdict} className="p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <div className="font-bold text-sm text-[var(--color-text)]">
                  {g.verdict}：{count}
                </div>
                <div className="mt-1 text-xs text-[var(--color-text-sub)]">{g.desc}</div>
              </div>
            );
          })}
        </section>

        {p.groups.map((g) => {
          const rows = p.rows.filter((r) => r.verdict === g.verdict);
          if (rows.length === 0) return null;
          return (
            <section key={g.verdict} className="mt-10">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">{g.verdict}</h2>
              <div className="space-y-4">
                {rows.map((r) => (
                  <div key={r.name} className="bg-white border border-[var(--color-border)] rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h3 className="font-bold text-[var(--color-text)]">{r.name}</h3>
                      {r.status && (
                        <span className="px-2 py-0.5 text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text-sub)]">{r.status}</span>
                      )}
                    </div>
                    {r.program && <p className="mt-1 text-xs text-[var(--color-text-muted)]">{r.program}</p>}
                    <p className="mt-2 text-sm text-[var(--color-text-sub)] leading-relaxed">{r.summary}</p>
                    {r.quote && (
                      <p className="mt-2 text-xs text-[var(--color-text-sub)] border-l-2 border-[var(--color-border)] pl-3">公式サイトの記載：「{r.quote}」</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                      {r.detailHref && (
                        <Link href={r.detailHref} className="font-bold text-[var(--color-primary)] hover:underline">詳しく見る</Link>
                      )}
                      {r.sources.map((s) => (
                        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">出典：{s.name}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {p.pendingNote && (
          <section className="mt-10 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
            <h2 className="font-bold text-sm text-[var(--color-text)] mb-1">確認中の自治体</h2>
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{p.pendingNote}</p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">一覧の見方と注意点</h2>
          <ul className="space-y-2">
            {p.notes.map((n, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">よくある質問</h2>
          <div className="space-y-3">
            {p.faqs.map((f, i) => (
              <details key={i} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="p-4 cursor-pointer font-medium text-sm text-[var(--color-text)]">{f.q}</summary>
                <p className="px-4 pb-4 text-sm text-[var(--color-text-sub)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/cost/subsidy/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
            <span className="block font-bold text-sm text-[var(--color-text)]">国の補助金と申請の流れ</span>
            <span className="block mt-1 text-xs text-[var(--color-text-sub)]">みらいエコ住宅2026事業などの対象工事</span>
          </Link>
          <Link href="/cost/price/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
            <span className="block font-bold text-sm text-[var(--color-text)]">外壁塗装の費用相場</span>
            <span className="block mt-1 text-xs text-[var(--color-text-sub)]">坪数・塗料別の目安</span>
          </Link>
        </section>

        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl text-center">
          <h2 className="font-bold text-xl mb-2">助成がなくても費用は比べて抑えられます</h2>
          <p className="text-white/80 text-sm mb-4">複数の業者から見積もりをとり、塗料と工事内容を比べて選んでください</p>
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
