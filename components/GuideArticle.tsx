import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

// /guide/ 配下のガイド記事の共通レイアウト（/guide/door-to-door/ と同じ部品・クラス構成）

export type GuideItem = { h: string; b: ReactNode };

export type GuideBlock =
  | { kind: "text"; paras: ReactNode[] }
  | { kind: "cards"; items: GuideItem[] }
  | { kind: "list"; items: GuideItem[] }
  | { kind: "accent"; items: GuideItem[] }
  | { kind: "notice"; paras: ReactNode[] }
  | { kind: "table"; head: string[]; rows: ReactNode[][] };

export type GuideSection = {
  id: string;
  title: string;
  intro?: ReactNode;
  blocks: GuideBlock[];
  source?: ReactNode;
};

export type GuideFaq = { q: string; a: string };
export type GuideRelated = { href: string; title: string; desc: string };

type Props = {
  crumbs: { label: string; href?: string }[];
  h1: string;
  updatedAt: string;
  lead: ReactNode;
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: GuideRelated[];
};

export function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
      {children}
    </a>
  );
}

export function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--color-primary)] hover:underline mx-1">
      {children}
    </Link>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
          {block.paras.map((p, i) => (
            <p key={i} className={`${i > 0 ? "mt-3 " : ""}text-sm text-[var(--color-text-sub)] leading-relaxed`}>
              {p}
            </p>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className="space-y-4">
          {block.items.map((r, i) => (
            <div key={r.h} className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-start gap-2">
                <span className="mono text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                <span>{r.h}</span>
              </h3>
              <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{r.b}</p>
            </div>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((c) => (
            <li key={c.h} className="flex items-start gap-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
              <span>
                <span className="block font-medium text-sm text-[var(--color-text)]">{c.h}</span>
                <span className="block mt-1 text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</span>
              </span>
            </li>
          ))}
        </ul>
      );
    case "accent":
      return (
        <div className="space-y-4">
          {block.items.map((c) => (
            <div key={c.h} className="p-5 bg-white border-l-4 border-[var(--color-accent)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-bold text-[var(--color-text)] mb-2">{c.h}</h3>
              <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      );
    case "notice":
      return (
        <div className="p-5 bg-[var(--color-accent-light)] border border-[var(--color-accent)] rounded-xl">
          {block.paras.map((p, i) => (
            <p key={i} className={`${i > 0 ? "mt-3 " : ""}text-sm text-[var(--color-text-sub)] leading-relaxed`}>
              {p}
            </p>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[var(--color-bg-alt)]">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="p-3 text-left font-bold text-[var(--color-text)] whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-[var(--color-border)] align-top">
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className="p-3 text-left font-medium text-[var(--color-text)] whitespace-nowrap">
                        {cell}
                      </th>
                    ) : (
                      <td key={j} className="p-3 text-[var(--color-text-sub)] leading-relaxed">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function GuideArticle({ crumbs, h1, updatedAt, lead, sections, faqs, related }: Props) {
  const toc = [
    ...sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "faq", label: "よくある質問" },
    { id: "related", label: "関連ページ" },
  ];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <Breadcrumb items={crumbs} />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">{h1}</h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">最終更新：{updatedAt}</p>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">{lead}</p>

        <nav className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white p-5" aria-label="目次">
          <p className="font-bold text-[var(--color-text)] mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm list-decimal list-inside marker:text-[var(--color-text-muted)]">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-[var(--color-primary)] hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="mt-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">{s.title}</h2>
            {s.intro && <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">{s.intro}</p>}
            <div className="space-y-4">
              {s.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
            {s.source && <p className="mt-3 text-xs text-[var(--color-text-muted)] leading-relaxed">{s.source}</p>}
          </section>
        ))}

        <section id="faq" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-[var(--color-border)] rounded-xl overflow-hidden bg-white">
                <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer hover:bg-[var(--color-bg)] font-medium text-[var(--color-text)] list-none">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold flex items-center justify-center">Q</span>
                    <span className="text-sm">{faq.q}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round" />
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

        <section id="related" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
                <span className="block font-bold text-[var(--color-text)]">{r.title}</span>
                <span className="block mt-1 text-xs text-[var(--color-text-sub)]">{r.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
