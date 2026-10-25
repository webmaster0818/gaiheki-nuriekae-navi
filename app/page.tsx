import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import companies from "@/data/companies.json";
import { getVerifiedRating } from "@/lib/verifiedRating";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "外壁ぬりかえナビ｜外壁塗装業者比較ランキング【2026年最新】",
  description: "外壁の塗り替えに役立つ情報を提供する総合情報サイトです。業者ランキング・塗料の種類・費用相場・助成金情報をご説明し、一括見積もりサービス10社を比較・掲載しています。",
};

const paintTypes = [
  { slug: "silicon", name: "シリコン塗料", durability: "10〜15年", cost: "2,300〜3,000円/㎡", icon: "S", color: "bg-blue-100 text-blue-700" },
  { slug: "fluorine", name: "フッ素塗料", durability: "15〜20年", cost: "3,500〜4,500円/㎡", icon: "F", color: "bg-purple-100 text-purple-700" },
  { slug: "urethane", name: "ウレタン塗料", durability: "7〜10年", cost: "1,700〜2,200円/㎡", icon: "U", color: "bg-green-100 text-green-700" },
  { slug: "ceramic", name: "セラミック塗料", durability: "10〜25年", cost: "", icon: "C", color: "bg-amber-100 text-amber-700" },
];

const checklist = [
  "外壁を手で触ると白い粉が付く（チョーキング）",
  "外壁にひび割れ（クラック）が見える",
  "塗装が剥がれたり膨れたりしている",
  "カビ・コケ・変色が目立つ",
  "シーリング材が割れている・隙間がある",
  "雨漏りや室内への水染みがある",
  "前回の塗装から10年以上経過している",
];

const faqs = [
  {
    q: "外壁塗装の費用は平均いくらですか？",
    a: "外壁塗装の窓口は、延床面積30坪前後（外壁面積120〜150㎡ほど）の戸建てをシリコン塗料で塗り替える場合の目安を60万〜100万円としています（足場の設置・高圧洗浄・下地処理・3回塗り・養生・清掃を含む。税込・税別の記載なし。2026年10月25日確認）。塗料のグレードや建物の状態によって変わるため、金額は業者の見積もりで確認してください。",
  },
  {
    q: "外壁塗装の業者選びでは、どのような点に注意すべきですか？",
    a: "1）複数社（最低3社）から見積もりを取る、2）極端に安い・高い見積もりに注意する、3）施工実績・保証内容を確認する、4）訪問販売や契約を急がせる業者を避ける、の4点が重要です。",
  },
  {
    q: "外壁塗装に補助金・助成金はありますか？",
    a: "国や自治体によって省エネ・断熱改修への補助金が用意されている場合があります。環境省の「先進的窓リノベ2026事業」（窓の断熱改修が対象）や、国土交通省の「みらいエコ住宅2026事業」、各自治体の独自補助金をご確認ください。",
  },
  {
    q: "外壁塗装は何年ごとに塗り替えが必要ですか？",
    a: "使用する塗料によって異なります。ウレタン塗料：7〜10年、シリコン塗料：10〜15年、フッ素塗料：15〜20年が目安です。チョーキング・ひび割れ・色あせが見られる場合は、塗り替えを検討する時期です。",
  },
  {
    q: "一括見積もりサービスを利用するメリットは何ですか？",
    a: "複数の業者に一度で見積もりを依頼できるため、費用の相場を把握しやすく、価格交渉もしやすくなります。業者を個別に探す手間を省ける点もメリットです。ただし、紹介された業者の評判・実績は、ご自身でもご確認ください。",
  },
];

const top3 = companies.filter((c) => c.rank <= 3);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm mb-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M7 0L8.56 4.67H13.5L9.47 7.56L11.03 12.23L7 9.34L2.97 12.23L4.53 7.56L0.5 4.67H5.44L7 0Z"/>
              </svg>
              2026年最新版・10社を比較
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              外壁塗装の業者選びを<br/>比較情報で支援します
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              一括見積もりサービス10社を、費用・保証・対応エリアの観点で比較しています。塗料の選び方から助成金まで、外壁塗装に関する情報を掲載しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ranking/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl text-lg transition-colors shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 11L12 8M12 8L15 11M12 8V16M5 7C5 5.34 6.34 4 8 4H12C13.66 4 15 5.34 15 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                業者ランキングを見る
              </Link>
              <Link
                href="/cost/price/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl text-lg transition-colors border border-white/30"
              >
                費用・相場を調べる
              </Link>
            </div>
          </div>
        </section>

        {/* Paint type nav */}
        <section className="bg-white border-b border-[var(--color-border)] py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-xl font-bold text-[var(--color-text)] mb-6">塗料の種類から選ぶ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {paintTypes.map((paint) => (
                <Link
                  key={paint.slug}
                  href={`/paint/${paint.slug}/`}
                  className="flex flex-col items-center p-4 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${paint.color}`}>
                    {paint.icon}
                  </div>
                  <h3 className="font-bold text-sm text-[var(--color-text)] mb-1 text-center">{paint.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] text-center">耐用: {paint.durability}</p>
                  {paint.cost && <p className="text-xs text-[var(--color-text-muted)] text-center">{paint.cost}</p>}
                </Link>
              ))}
            </div>
            <p className="mt-3 text-xs text-[var(--color-text-muted)] text-center">
              平米単価の目安は、外壁塗装の窓口「
              <a href="https://gaiheki-madoguchi.com/articles/2693" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">2026年外壁塗装の価格表</a>
              」の塗料別の価格表によります（税込・税別の記載なし。2026年10月25日確認）。セラミック塗料の単価は、公式の情報で確認できないため記載していません。
            </p>
            <div className="text-center mt-4">
              <Link href="/paint/comparison/" className="text-sm text-[var(--color-primary)] hover:underline font-medium">
                4種類の比較一覧 &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* TOP3 Ranking */}
        <section className="py-12 px-4 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold rounded-full mb-3">
                編集部おすすめ
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                外壁塗装業者ランキングTOP3
              </h2>
            </div>
            <div className="space-y-4">
              {top3.map((company) => (
                <div
                  key={company.slug}
                  className={`bg-white rounded-2xl border-2 p-6 ${
                    company.rank === 1
                      ? "border-[var(--color-secondary)] shadow-lg"
                      : "border-[var(--color-border)]"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0 ${
                          company.rank === 1
                            ? "bg-[var(--color-secondary)]"
                            : company.rank === 2
                            ? "bg-gray-400"
                            : "bg-amber-600"
                        }`}
                      >
                        {company.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-[var(--color-text)]">{company.name}</h3>
                          {company.rank === 1 && (
                            <span className="px-2 py-0.5 bg-[var(--color-secondary-light)] text-[var(--color-secondary-dark)] text-xs font-bold rounded-md border border-[var(--color-secondary)]">
                              NO.1
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[var(--color-text-sub)]">{company.tagline}</p>
                      </div>
                    </div>
                    <div className="md:ml-auto flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                      {(() => {
                        const rb = getVerifiedRating(company.slug);
                        if (!rb) return null;
                        return (
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill={i < Math.floor(rb.rating) ? "var(--color-secondary)" : "var(--color-border)"}
                                  aria-hidden="true"
                                >
                                  <path d="M8 0L9.8 5.6H15.6L10.9 9L12.7 14.6L8 11.2L3.3 14.6L5.1 9L0.4 5.6H6.2L8 0Z"/>
                                </svg>
                              ))}
                              <span className="text-sm font-bold text-[var(--color-text)]">{rb.rating}</span>
                              <span className="text-xs text-[var(--color-text-muted)]">({rb.reviewCount.toLocaleString()}件)</span>
                            </div>
                            <span className="text-[11px] text-[var(--color-text-muted)]">出典：{rb.sourceLabel}（{rb.fetchedAt}取得）</span>
                          </div>
                        );
                      })()}
                      <Link
                        href={`/company/${company.slug}/`}
                        className="px-5 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        詳細を見る
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {company.features.slice(0, 4).map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-[var(--color-bg-alt)] text-[var(--color-text-sub)] text-xs rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/ranking/"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
              >
                全10社のランキングを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
              外壁塗装の費用相場
            </h2>
            <p className="mt-4 text-[var(--color-text-sub)] text-sm leading-relaxed">
              外壁塗装の費用は、塗料の種類・外壁面積・劣化状況によって変わります。塗料別の目安と費用の内訳は、出典とともに費用ページにまとめています。金額は業者の見積もりで確認してください。
            </p>
            <div className="mt-4">
              <Link href="/cost/price/" className="text-sm text-[var(--color-primary)] hover:underline font-medium">
                費用の詳細 &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Deterioration checklist */}
        <section className="py-12 px-4 bg-[var(--color-bg-alt)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-bold rounded-full mb-3">
                劣化診断チェックリスト
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                外壁の劣化状況の確認項目
              </h2>
              <p className="mt-2 text-[var(--color-text-sub)] text-sm">1つでも当てはまる場合は、早めの診断・見積もりをおすすめします</p>
            </div>
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-3">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-[var(--color-bg)] rounded-lg transition-colors">
                  <div className="w-6 h-6 rounded border-2 border-[var(--color-border)] flex-shrink-0 mt-0.5"/>
                  <span className="text-[var(--color-text-sub)] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[var(--color-accent-light)] rounded-xl text-center border border-[var(--color-accent)]">
              <p className="text-[var(--color-accent-dark)] font-bold mb-3">1つでも当てはまる場合は、無料見積もりのご利用をおすすめします</p>
              <Link
                href="/ranking/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold rounded-xl transition-colors"
              >
                無料で見積もりを依頼する
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8 text-center">
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-[var(--color-border)] rounded-xl overflow-hidden"
                >
                  <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer hover:bg-[var(--color-bg)] font-medium text-[var(--color-text)] list-none">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold flex items-center justify-center">Q</span>
                      <span>{faq.q}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden="true">
                      <path d="M5 8L10 13L15 8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-bold flex items-center justify-center">A</span>
                    <p className="text-[var(--color-text-sub)] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trouble guides */}
        <section className="py-12 px-4 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 text-center">外壁トラブル・劣化症状から調べる</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { slug: "crack", title: "ひび割れ", icon: "C", desc: "構造クラックは早期の補修が必要です" },
                { slug: "peeling", title: "剥がれ・膨れ", icon: "P", desc: "チョーキングは塗り替え時期の目安です" },
                { slug: "discoloration", title: "色あせ・変色", icon: "D", desc: "紫外線による劣化が主な原因です" },
                { slug: "mold", title: "カビ・コケ", icon: "M", desc: "北面・日陰で多く発生します" },
                { slug: "rain-leak", title: "雨漏り", icon: "R", desc: "発見した時点で早急な対処が必要です" },
              ].map((trouble) => (
                <Link
                  key={trouble.slug}
                  href={`/trouble/${trouble.slug}/`}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-danger)] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {trouble.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">{trouble.title}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{trouble.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
