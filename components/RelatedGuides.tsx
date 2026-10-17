import Link from "next/link";

// 既存ページから /guide/・/compare/ への関連リンク（2026-10-17 追加）
export type RelatedGuide = { href: string; title: string; desc: string };

export default function RelatedGuides({ items, title = "関連ガイド" }: { items: RelatedGuide[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-10">
      <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((r) => (
          <Link key={r.href} href={r.href} className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
            <span className="block font-bold text-sm text-[var(--color-text)]">{r.title}</span>
            <span className="block mt-1 text-xs text-[var(--color-text-sub)]">{r.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export const GUIDES = {
  compare: { href: "/compare/gaiso-vs-protimes/", title: "ガイソーとプロタイムズの違い", desc: "運営形態・保証・診断・塗料を公式情報で比較" },
  contract: { href: "/guide/contract/", title: "契約前に確認する書類", desc: "見積書・契約書・約款と無料の見積チェック" },
  warranty: { href: "/guide/warranty/", title: "外壁塗装の保証の確認方法", desc: "保証書の項目とリフォーム瑕疵保険" },
  contractorCheck: { href: "/guide/contractor-check/", title: "優良業者を見分ける公的な確認方法", desc: "建設業許可・登録団体・瑕疵保険の調べ方" },
  fireInsurance: { href: "/guide/fire-insurance/", title: "火災保険を使う勧誘への注意", desc: "国民生活センターの注意喚起と対応" },
  asbestos: { href: "/guide/asbestos/", title: "石綿（アスベスト）の事前調査", desc: "対象となる工事と発注者が確認すること" },
  season: { href: "/guide/season/", title: "外壁塗装に適した時期と気象条件", desc: "気温5℃・湿度85%の基準と季節ごとの確認事項" },
  color: { href: "/guide/color/", title: "外壁塗装の色の選び方", desc: "色見本の見方と景観計画の色彩基準" },
} satisfies Record<string, RelatedGuide>;
