import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";
import { getVerifiedRating } from "@/lib/verifiedRating";
import RelatedGuides, { GUIDES } from "@/components/RelatedGuides";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/" },
  title: "外壁塗装業者ランキング2026｜1位ヌリカエ・2位外壁塗装の窓口・3位プロタイムズ（10社比較）",
  description: "外壁塗装の業者探しに使われるサービス10社の当サイトの順位は、1位ヌリカエ、2位外壁塗装の窓口、3位プロタイムズです。紹介サービス・塗装会社のチェーン・マッチングの違い、申し込み後の電話連絡、断り方を各社公式（2026年10月22日確認）にもとづきご説明します。",
};

const CHECKED = "2026年10月22日";

const types = [
  {
    type: "紹介・一括見積もりサービス",
    how: "条件を伝えると、登録された塗装会社の中から紹介を受け、複数社の見積もりを比べられます。工事の契約は塗装会社と結びます。",
    names: "ヌリカエ、外壁塗装の窓口、リショップナビ外壁塗装、外壁塗装ほっとらいん、リビロペイント、外壁塗装の案内所",
  },
  {
    type: "塗装会社のチェーン",
    how: "本部の看板で営業する加盟店に、見積もりと工事を直接依頼します。他社と比べる場合は、別に見積もりを取ります。",
    names: "プロタイムズ、ガイソー",
  },
  {
    type: "マッチングサービス",
    how: "掲載業者の料金や口コミを見て選ぶ（くらしのマーケット）か、質問に答えて届いた見積もりから選びます（ミツモア）。",
    names: "くらしのマーケット、ミツモア",
  },
];

const faqs = [
  {
    q: "外壁塗装の業者ランキングで1位はどこですか？",
    a: "当サイトの順位は、1位ヌリカエ、2位外壁塗装の窓口、3位プロタイムズです。対応エリア、紹介できる会社の数、保証、口コミの公開状況を編集部が比べて付けた順位で、料金の安さの順ではありません。費用を重視する場合は、安い業者ランキングもあわせてご覧ください。",
  },
  {
    q: "紹介サービスと塗装会社のチェーンは、何が違いますか？",
    a: "ヌリカエや外壁塗装の窓口は、審査を通った塗装会社を紹介するサービスで、複数社の見積もりを比べられます（外壁塗装の窓口は最大4社）。プロタイムズやガイソーは塗装会社のチェーンで、加盟店に直接依頼します。プロタイムズは加盟店の保証に加えて本部（アステックペイント）の保証を発行し、ガイソーは工事内容に応じて最長20年の自社発行保証書を出すと公式サイトに記載しています（一部の補修工事を除く）。",
  },
  {
    q: "紹介サービスに申し込むと、複数の会社から電話がかかってきますか？",
    a: "ヌリカエは、アドバイザー相談の場合はまずヌリカエから状況確認の電話があり、いきなり複数の会社から連絡が入ることはないとしています。自分で会社を選んで問い合わせた場合は、その会社からのみ連絡が入ります。外壁塗装の窓口は、入力内容をもとに外壁アドバイザーが電話でヒアリングを行い、要望に沿った施工店を紹介する流れです。",
  },
  {
    q: "見積もりを取った後に断ってもよいですか？",
    a: "ヌリカエ、外壁塗装の窓口とも、見積もり後に契約しなくてもよいと公式サイトに記載しています。断りにくい場合は、両社とも塗装会社への断りの連絡を代行するサービスがあります。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const officialSources = [
  { name: "ヌリカエ", url: "https://www.nuri-kae.jp/" },
  { name: "外壁塗装の窓口", url: "https://gaiheki-madoguchi.com/" },
  { name: "プロタイムズ", url: "https://www.protimes.jp/" },
  { name: "ガイソー", url: "https://www.gaiso.co/" },
];

export default function RankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "業者ランキング" }]} />

        <div className="mt-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            外壁塗装業者ランキング2026
          </h1>
          <div className="mt-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
            <p className="text-[var(--color-text)] leading-relaxed">
              外壁塗装の業者探しに使われるサービス10社の当サイトの順位は、<strong>1位ヌリカエ、2位外壁塗装の窓口、3位プロタイムズ</strong>です。ヌリカエは財務状況・工事実績・クレームの有無などの審査を通った会社だけを掲載する紹介サービス、外壁塗装の窓口は全国5,500社以上の加盟店から最大4社の相見積もりを取れる紹介サービスです。プロタイムズは塗料メーカーのアステックペイントを本部とする塗装会社のチェーン（全国約265店舗・2026年時点の公式表記）で、紹介サービスとは仕組みが異なります。
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
              順位は、対応エリア、紹介できる会社の数、保証、口コミの公開状況を編集部が比べて付けたもので、料金の安さや工事の品質を保証するものではありません。各社の数値は{CHECKED}に公式サイトで確認しました。
            </p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-[var(--color-text)]">
                  <th className="p-2 text-left border border-[var(--color-border)]">種類</th>
                  <th className="p-2 text-left border border-[var(--color-border)]">依頼の仕方</th>
                  <th className="p-2 text-left border border-[var(--color-border)]">当ページの該当サービス</th>
                </tr>
              </thead>
              <tbody>
                {types.map((t) => (
                  <tr key={t.type}>
                    <td className="p-2 align-top font-bold border border-[var(--color-border)]">{t.type}</td>
                    <td className="p-2 align-top text-[var(--color-text-sub)] border border-[var(--color-border)]">{t.how}</td>
                    <td className="p-2 align-top text-[var(--color-text-sub)] border border-[var(--color-border)]">{t.names}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-lg text-xs text-[var(--color-text-sub)]">
            ※当ランキングはアフィリエイト広告を含みます（PR）。編集部による独自基準で評価しています。
          </div>
        </div>

        <div className="space-y-5">
          {companies.map((company) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl border-2 p-6 ${
                company.rank <= 3 ? "border-[var(--color-secondary)]" : "border-[var(--color-border)]"
              } shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0 ${
                    company.rank === 1 ? "bg-[var(--color-secondary)]" :
                    company.rank === 2 ? "bg-gray-400" :
                    company.rank === 3 ? "bg-amber-600" :
                    "bg-[var(--color-primary)]"
                  }`}
                >
                  {company.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{company.name}</h2>
                    {company.rank <= 3 && (
                      <span className="px-2 py-0.5 bg-[var(--color-secondary-light)] text-[var(--color-secondary-dark)] text-xs font-bold rounded-md border border-[var(--color-secondary)]">
                        TOP{company.rank}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-sub)] mb-2">{company.tagline}</p>
                  {(() => {
                    const rb = getVerifiedRating(company.slug);
                    return (
                      <div className="flex items-center gap-2 flex-wrap">
                        {rb ? (
                          <>
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill={i < Math.floor(rb.rating) ? "var(--color-secondary)" : "var(--color-border)"} aria-hidden="true">
                                  <path d="M8 0L9.8 5.6H15.6L10.9 9L12.7 14.6L8 11.2L3.3 14.6L5.1 9L0.4 5.6H6.2L8 0Z"/>
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm font-bold text-[var(--color-text)]">{rb.rating}</span>
                            <span className="text-xs text-[var(--color-text-muted)]">({rb.reviewCount.toLocaleString()}件・出典：{rb.sourceLabel}／{rb.fetchedAt}取得)</span>
                          </>
                        ) : (
                          <span className="text-xs text-[var(--color-text-muted)]">Googleマップ評価：未取得</span>
                        )}
                        <span className="text-xs text-[var(--color-text-muted)] ml-2">対応エリア: {company.coverage}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {company.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-[var(--color-bg-alt)] text-[var(--color-text-sub)] text-xs rounded-md">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                {company.officialUrl ? (
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 py-3 text-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors text-sm"
                >
                  公式サイトで無料見積もり
                </a>
                ) : null}
                <Link
                  href={`/company/${company.slug}/`}
                  className="sm:w-32 py-3 text-center border border-[var(--color-border)] text-[var(--color-text-sub)] font-medium rounded-xl hover:bg-[var(--color-bg)] transition-colors text-sm"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                <h3 className="font-bold text-[var(--color-text)] text-sm mb-2">{f.q}</h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            出典（{CHECKED}確認）：
            {officialSources.map((o, i) => (
              <span key={o.url}>
                {i > 0 && "／"}
                <a href={o.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{o.name} 公式サイト</a>
              </span>
            ))}
          </p>
        </section>

        <div className="mt-10 p-6 bg-[var(--color-primary-light)] rounded-2xl border border-[var(--color-primary)]">
          <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">費用を重視する場合のランキング</h3>
          <p className="text-sm text-[var(--color-text-sub)] mb-3">価格を重視したランキングです。費用を抑えて外壁塗装を依頼できる業者を比較しています。</p>
          <Link href="/ranking/cheap/" className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-primary)] text-white font-bold rounded-lg text-sm hover:bg-[var(--color-primary-dark)] transition-colors">
            安い業者ランキングを見る
          </Link>
        </div>
        <RelatedGuides
          title="業者を選ぶ際の関連ガイド"
          items={[GUIDES.contractorCheck, GUIDES.warranty, GUIDES.contract, GUIDES.compare]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
