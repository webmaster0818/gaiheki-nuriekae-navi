import GuideArticle, { Src, In, type GuideBlock, type GuideSection } from "@/components/GuideArticle";
import companies from "@/data/companies.json";

// /paint/product/[slug]/ と /paint/maker/[slug]/ の共通描画（data/paint-products.json・data/paint-makers.json）
// 本文は各メーカー公式ページの記載のみ。出典は節ごとに確認日つきで表示する。

export type DocSource = { label: string; url: string };
export type DocBlock =
  | { kind: "text"; paras: string[] }
  | { kind: "list"; items: { h: string; b: string }[] }
  | { kind: "table"; head: string[]; rows: string[][] };
export type DocSection = { id: string; title: string; intro?: string; blocks: DocBlock[]; source: DocSource[]; checked?: string };
export type PaintDoc = {
  slug: string;
  maker?: string;
  checked: string;
  updatedAt: string;
  officialUrl?: string;
  seoTitle: string;
  h1: string;
  description: string;
  lead: string;
  sections: DocSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; title: string; desc: string }[];
  productLinks?: { href: string; title: string; desc: string }[];
};

function SourceLine({ sources, checked }: { sources: DocSource[]; checked: string }) {
  return (
    <>
      出典：
      {sources.map((s, i) => (
        <span key={s.url}>
          {i > 0 && "、"}
          <Src href={s.url}>{s.label}</Src>
        </span>
      ))}
      （{checked}確認）
    </>
  );
}

export default function PaintDocPage({ doc, crumbs }: { doc: PaintDoc; crumbs: { label: string; href?: string }[] }) {
  const sections: GuideSection[] = doc.sections.map((s) => ({
    id: s.id,
    title: s.title,
    intro: s.intro,
    blocks: s.blocks as GuideBlock[],
    source: <SourceLine sources={s.source} checked={s.checked ?? doc.checked} />,
  }));

  if (doc.productLinks && doc.productLinks.length > 0) {
    sections.push({
      id: "products",
      title: "当サイトの製品ページ",
      blocks: [{ kind: "list", items: doc.productLinks.map((p) => ({ h: p.title, b: <In href={p.href}>{p.desc}</In> })) }],
    });
  }

  sections.push({
    id: "contractors",
    title: "見積もりの依頼先",
    blocks: [
      {
        kind: "text",
        paras: [
          <>
            見積もりの依頼先は、当サイトの業者ページ（
            {companies.map((c, i) => (
              <span key={c.slug}>
                {i > 0 && "、"}
                <In href={`/company/${c.slug}/`}>{c.name}</In>
              </span>
            ))}
            ）から探せます。
          </>,
        ],
      },
    ],
  });

  return (
    <GuideArticle
      crumbs={crumbs}
      h1={doc.h1}
      updatedAt={doc.updatedAt}
      lead={
        <>
          {doc.lead}
          <span className="block mt-2 text-xs text-[var(--color-text-muted)]">
            出典の確認日：{doc.checked}
            {doc.officialUrl && doc.maker ? (
              <>
                （<Src href={doc.officialUrl}>{doc.maker}の公式ページ</Src>）
              </>
            ) : (
              "（出典は各節の末尾に記載）"
            )}
          </span>
        </>
      }
      sections={sections}
      faqs={doc.faqs}
      related={doc.related}
    />
  );
}
