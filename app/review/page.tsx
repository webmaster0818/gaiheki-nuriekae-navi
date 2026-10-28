import type { Metadata } from "next";
import Link from "next/link";
import reviewsData from "@/data/reviews.json";
import Breadcrumb from "@/components/Breadcrumb";
import { reviewHref } from "@/lib/reviewLinks";

export const metadata: Metadata = {
  title: "外壁塗装業者の口コミ・評判まとめ｜Googleの口コミと公開情報で検証",
  description: "外壁塗装の見積もり比較サービス・業者を、Googleマップに投稿された口コミと運営会社の公開情報にもとづき、中立的な立場で検証しています。",
  alternates: { canonical: "https://gaiheki-nuriekae-navi.com/review/" },
};

export default function ReviewIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "口コミ・評判" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mt-2 mb-4">外壁塗装業者の口コミ・評判まとめ</h1>
      <p className="text-[15px] leading-8 text-text-secondary mb-8">
        当ページでは、Googleマップに投稿された口コミと各社の公開情報をもとに、外壁塗装の比較サービス・業者を中立的な立場で検証しています。掲載している口コミは、すべて実際に投稿された口コミ、または公式サイトに掲載された利用者の声です。
      </p>
      <div className="space-y-4">
        {reviewsData.map((r) => (
          <Link key={r.slug} href={reviewHref(r.slug)}
            className="block rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-colors">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="font-bold text-text-primary">{r.companyName}</h2>
              {(r as any).ratingBlock ? (
                <span className="text-sm text-text-muted whitespace-nowrap">
                  <span className="text-warning">★</span> {(r as any).ratingBlock.rating}（{(r as any).ratingBlock.reviewCount}件）
                  <span className="block text-[11px] text-right">Googleマップ・{(r as any).ratingBlock.fetchedAt}取得</span>
                </span>
              ) : (
                <span className="text-xs text-text-muted whitespace-nowrap">公式の声</span>
              )}
            </div>
            <p className="text-sm text-text-secondary line-clamp-2 leading-7">{r.summary}</p>
          </Link>
        ))}
      </div>
      <p className="text-center text-xs text-gray-500 py-4">本サイトはプロモーション(PR)を含みます。</p>
    </div>
  );
}
