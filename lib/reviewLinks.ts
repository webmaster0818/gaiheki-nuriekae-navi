// 口コミページを会社ページへ統合した会社（旧 /review/{slug}/ は public/_redirects で /company/{slug}/ へ 301）
// 2026-10-28 okina 承認：「ヌリカエ 評判」を会社ページに寄せる
export const MERGED_REVIEW_SLUGS = new Set<string>(["nurikae"]);

export function reviewHref(slug: string): string {
  return MERGED_REVIEW_SLUGS.has(slug) ? `/company/${slug}/#voices` : `/review/${slug}/`;
}
