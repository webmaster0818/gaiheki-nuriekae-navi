import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "外壁塗装の費用・相場【2026年】塗料別・面積別で徹底解説",
  description: "外壁塗装の費用は塗料や面積によって大きく変わります。塗料別（ウレタン・シリコン・フッ素・セラミック）・面積別の詳細な費用相場と、費用を左右する要素を解説。",
};

const paintCostTable = [
  { paint: "ウレタン塗料", durability: "7〜10年", perSqm: "1,800〜2,500円", total30tsubo: "55〜80万円", feature: "低コスト・弾力性あり" },
  { paint: "シリコン塗料", durability: "10〜15年", perSqm: "2,500〜3,500円", total30tsubo: "80〜110万円", feature: "コスパ最高・人気No.1" },
  { paint: "セラミック塗料", durability: "10〜25年", perSqm: "3,000〜5,500円", total30tsubo: "90〜160万円", feature: "断熱・光触媒機能あり" },
  { paint: "フッ素塗料", durability: "15〜20年", perSqm: "3,500〜5,000円", total30tsubo: "100〜140万円", feature: "最高耐久・長寿命" },
];

const areaTable = [
  { area: "80m2（約20坪）", urethane: "45〜60万円", silicon: "60〜80万円", fluorine: "80〜105万円" },
  { area: "100m2（約25坪）", urethane: "55〜70万円", silicon: "75〜95万円", fluorine: "95〜125万円" },
  { area: "120m2（約30坪）", urethane: "65〜85万円", silicon: "90〜115万円", fluorine: "115〜150万円" },
  { area: "150m2（約37坪）", urethane: "80〜105万円", silicon: "110〜140万円", fluorine: "140〜180万円" },
  { area: "180m2（約45坪）", urethane: "95〜125万円", silicon: "130〜170万円", fluorine: "165〜215万円" },
];

const costBreakdown = [
  { item: "足場設置・撤去費", percent: "20〜25%", example: "15〜25万円", note: "外壁面積・高さによる" },
  { item: "高圧洗浄費", percent: "3〜5%", example: "2〜5万円", note: "洗浄業者・面積による" },
  { item: "下地処理・補修費", percent: "5〜15%", example: "5〜20万円", note: "劣化状況による変動大" },
  { item: "シーリング工事費", percent: "5〜10%", example: "5〜15万円", note: "サッシ・目地周りの処理" },
  { item: "塗料・塗装工事費", percent: "40〜55%", example: "35〜80万円", note: "塗料グレードによる" },
  { item: "諸経費・管理費", percent: "5〜10%", example: "5〜10万円", note: "業者の間接費用" },
];

const faqs = [
  {
    q: "30坪の家の外壁塗装はいくらかかりますか？",
    a: "30坪（延べ床面積）の2階建て住宅の場合、外壁面積は約120m2前後が目安です。ウレタン塗料で65〜85万円、シリコン塗料で90〜115万円、フッ素塗料で115〜150万円程度が相場です。ただし建物の形状・劣化状況・地域によって変動します。",
  },
  {
    q: "見積もりが極端に安い業者は大丈夫ですか？",
    a: "相場より極端に安い見積もりには注意が必要です。塗料の品質が低い、施工回数を減らす（3回塗りを2回にする）、追加費用を後から請求するなどのケースがあります。相見積もりで相場感を確認しましょう。",
  },
  {
    q: "足場代の相場はいくらですか？",
    a: "足場代は外壁面積・建物の高さによって異なりますが、一般的な2階建て住宅で15〜25万円程度が相場です。外壁塗装のみより屋根塗装も同時施工にすると、足場代を1回分節約できます。",
  },
  {
    q: "分割払い・ローンは使えますか？",
    a: "多くの業者でリフォームローンや信販会社のクレジット払いに対応しています。また、省エネ改修の場合はグリーン住宅ポイントや省エネ補助金を活用することで実質負担を軽減できます。",
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
          外壁塗装の費用・相場【2026年版】塗料別・面積別で解説
        </h1>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          外壁塗装の費用は塗料の種類・外壁面積・劣化状況によって大きく変わります。このページでは塗料別・面積別の詳細な費用相場と、費用に影響する要素を徹底解説します。
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
                  <th>塗装単価</th>
                  <th>総費用の目安<br/><span className="font-normal text-xs opacity-80">（30坪・2階建て）</span></th>
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
            ※足場代・高圧洗浄・下地処理・シーリング含む。劣化状況・地域・業者により変動します。
          </p>
        </section>

        {/* Area table */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">外壁面積別・費用相場</h2>
          <div className="table-wrapper rounded-xl border border-[var(--color-border)] overflow-hidden">
            <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th>外壁面積（坪数目安）</th>
                  <th>ウレタン</th>
                  <th>シリコン</th>
                  <th>フッ素</th>
                </tr>
              </thead>
              <tbody>
                {areaTable.map((row) => (
                  <tr key={row.area}>
                    <td className="font-medium">{row.area}</td>
                    <td>{row.urethane}</td>
                    <td className="font-medium text-[var(--color-primary)]">{row.silicon}</td>
                    <td>{row.fluorine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  <div className="text-xs text-[var(--color-text-muted)]">{item.percent}</div>
                </div>
              </div>
            ))}
          </div>
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
            <div className="text-xs text-[var(--color-text-sub)]">最大数十万円の補助が受けられる場合があります</div>
          </Link>
          <Link href="/ranking/" className="flex-1 p-4 bg-[var(--color-primary-light)] border border-[var(--color-primary)] rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-[var(--color-primary)] mb-1">無料見積もりを依頼する</div>
            <div className="text-xs text-[var(--color-text-sub)]">複数社比較で適正価格を確認</div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
