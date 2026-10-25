import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedGuides, { GUIDES } from "@/components/RelatedGuides";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/price/" },
  title: "外壁塗装の費用・相場【2026年】塗料別の目安と費用の内訳",
  description: "外壁塗装の費用は塗料や面積によって大きく変わります。ウレタン・シリコン・フッ素の塗料別の目安と費用の内訳を、出典と確認日を付けてご説明します。",
};

const paintCostTable = [
  { paint: "ウレタン塗料", durability: "約8〜10年", perSqm: "1,700〜2,200円/㎡", total30tsubo: "55万〜80万円", feature: "低価格・弾力性がある" },
  { paint: "シリコン塗料", durability: "約10〜15年", perSqm: "2,300〜3,000円/㎡", total30tsubo: "60万〜100万円", feature: "費用対効果が高く、採用が多い" },
  { paint: "フッ素塗料", durability: "約15〜20年", perSqm: "3,500〜4,500円/㎡", total30tsubo: "80万〜130万円", feature: "耐久性が高く、長寿命" },
];

const costBreakdown = [
  { item: "足場設置・撤去費", example: "15万〜25万円", note: "外壁塗装の窓口（30坪程度）" },
  { item: "高圧洗浄費（水道水）", example: "2万〜5万円", note: "リショップナビ（30坪）" },
  { item: "下地補修（ひび割れ補修・ケレン）", example: "2万〜6万円", note: "リショップナビ（30坪）。補修箇所が多い場合はより高額" },
  { item: "シーリング", example: "9万〜20万円", note: "リショップナビ（30坪）" },
  { item: "塗装費用", example: "18万〜80万円", note: "リショップナビ（30坪）。塗料の種類による" },
  { item: "現場管理費", example: "2万〜5万円／一式", note: "リショップナビ（30坪）" },
];

const faqs = [
  {
    q: "30坪の家の外壁塗装はいくらかかりますか？",
    a: "外壁塗装の窓口は、30坪（外壁面積119㎡前後）の住宅で足場や諸経費まで含めた総額の目安を、ウレタン系55万〜80万円、シリコン系60万〜100万円、フッ素系80万〜130万円としています（税込・税別の記載なし。2026年10月25日確認）。建物の形状・劣化状況によって変わるため、金額は業者の見積もりで確認してください。",
  },
  {
    q: "見積もりが極端に安い業者に依頼しても問題ありませんか？",
    a: "相場より極端に安い見積もりには注意が必要です。塗料の品質が低い、施工回数を減らす（3回塗りを2回にする）、追加費用を後から請求するなどのケースがあります。相見積もりにより、費用の相場をご確認ください。",
  },
  {
    q: "足場代の相場はいくらですか？",
    a: "足場代は外壁面積・建物の高さによって異なります。外壁塗装の窓口は、30坪程度なら15万〜25万円ほどを目安としています（2026年10月25日確認）。外壁塗装と屋根塗装を同時に施工すると、足場代を1回分節約できます。",
  },
  {
    q: "分割払い・ローンは利用できますか？",
    a: "多くの業者でリフォームローンや信販会社のクレジット払いに対応しています。また、省エネ改修の場合は、住宅省エネ2026キャンペーン（みらいエコ住宅2026事業等）や自治体の省エネ改修補助を活用することで実質的な負担を軽減できます。",
  },
];

export default function CostPricePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "費用・相場" },
            { label: "塗料別・面積別費用" },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)]">
          外壁塗装の費用・相場【2026年版】塗料別の目安と費用の内訳
        </h1>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          外壁塗装の費用は塗料の種類・外壁面積・劣化状況によって大きく変わります。当ページでは、塗料別の費用の目安と費用の内訳を、出典とともにご説明します。金額は目安のため、実際の金額は業者の見積もりで確認してください。
        </p>

        {/* Paint cost table */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">塗料の種類別・費用相場</h2>
          <div className="table-wrapper rounded-xl border border-[var(--color-border)] overflow-hidden">
            <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th>塗料の種類</th>
                  <th>耐用年数</th>
                  <th>平米単価の目安</th>
                  <th>総費用の目安<br/><span className="font-normal text-xs opacity-80">（30坪・外壁面積119㎡前後）</span></th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                {paintCostTable.map((row) => (
                  <tr key={row.paint}>
                    <td className="font-medium">{row.paint}</td>
                    <td>{row.durability}</td>
                    <td>{row.perSqm}</td>
                    <td className="font-medium text-[var(--color-primary)]">{row.total30tsubo}</td>
                    <td className="text-sm">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            ※総費用の目安は、足場や諸経費まで含めた総額です。劣化状況・地域・業者により変わります。
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            出典：耐用年数・平米単価・総費用の目安は、外壁塗装の窓口「
            <a href="https://gaiheki-madoguchi.com/articles/2693" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">2026年外壁塗装の価格表 坪数別・塗料別の費用相場と見積もりの見方</a>
            」の「塗料の種類別の価格表」によります（税込・税別の記載なし。2026年10月25日確認）。セラミック塗料の金額は、公式の情報で確認できないため記載していません。
          </p>
        </section>

        {/* Cost breakdown */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">外壁塗装の費用内訳</h2>
          <div className="space-y-3">
            {costBreakdown.map((item) => (
              <div key={item.item} className="flex items-center gap-4 p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <div className="flex-1">
                  <div className="font-medium text-[var(--color-text)] text-sm">{item.item}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.note}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[var(--color-primary)] text-sm">{item.example}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)] leading-relaxed">
            出典：足場設置・撤去費は、外壁塗装の窓口「
            <a href="https://gaiheki-madoguchi.com/articles/2693" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">2026年外壁塗装の価格表 坪数別・塗料別の費用相場と見積もりの見方</a>
            」の「30坪程度なら15万〜25万円ほどが目安」によります（同ページは、足場代を全体の約20%としています）。そのほかの項目は、リショップナビ「
            <a href="https://pronuri.com/articles/2811" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">【30坪】外壁塗装の費用相場はいくら？</a>
            」の「30坪の外壁塗装費用の内訳・価格帯」の総額（30坪の場合）によります（税込・税別の記載なし。いずれも2026年10月25日確認）。内訳の項目は業者によって異なるため、金額は業者の見積もりで確認してください。
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">費用に関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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

        {/* Related */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/cost/subsidy/" className="flex-1 p-4 bg-[var(--color-accent-light)] border border-[var(--color-accent)] rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-[var(--color-accent-dark)] mb-1">助成金・補助金ガイド</div>
            <div className="text-xs text-[var(--color-text-sub)]">国・自治体の補助の対象と条件をご説明します</div>
          </Link>
          <Link href="/ranking/" className="flex-1 p-4 bg-[var(--color-primary-light)] border border-[var(--color-primary)] rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-[var(--color-primary)] mb-1">無料見積もりを依頼する</div>
            <div className="text-xs text-[var(--color-text-sub)]">複数社の比較により適正価格を確認できます</div>
          </Link>
        </div>
        <RelatedGuides items={[GUIDES.contract, GUIDES.sealing, GUIDES.roofWall, GUIDES.asbestos, GUIDES.season]} />
      </main>
      <SiteFooter />
    </>
  );
}
