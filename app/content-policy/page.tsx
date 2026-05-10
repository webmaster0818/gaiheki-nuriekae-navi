import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー｜外壁ぬりかえナビ",
  description: "外壁ぬりかえナビのコンテンツ作成方針・編集ポリシーです。",
};

const principles = [
  {
    title: "正確性・信頼性",
    desc: "掲載する情報は、信頼できる情報源（国土交通省・業界団体・各社公式情報）をもとに、編集部が確認・作成しています。費用相場等の数値は定期的に見直しています。",
  },
  {
    title: "透明性・公正性",
    desc: "当サイトはアフィリエイト広告を収益源としています。広告掲載の有無がコンテンツの評価・ランキングに影響を与えることはありません。PRの場合は明示的に表示しています。",
  },
  {
    title: "ユーザーファースト",
    desc: "読者にとって有益な情報提供を最優先とし、不正確な情報・誇大広告・誤解を招く表現は掲載しません。",
  },
  {
    title: "定期的な情報更新",
    desc: "掲載情報は随時見直し・更新を行っています。情報に誤りや古い内容を発見した場合はお問い合わせよりご連絡ください。",
  },
  {
    title: "専門家による監修",
    desc: "技術的・専門的な内容については、外壁塗装の専門家・有識者の知見を参考に作成しています。",
  },
];

const adDisclosure = [
  "当サイトにはアフィリエイト広告が含まれます。",
  "一部のリンクは広告リンクであり、経由購入・申し込みにより当社が報酬を受ける場合があります。",
  "広告掲載料の支払いはランキング順位・評価に影響しません。",
  "各サービスの評価は編集部が独自基準で行っています。",
  "PRマークが付いたコンテンツは広告性コンテンツであることを示します。",
];

export default function ContentPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-text)]">コンテンツポリシー</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">最終更新日：2026年1月1日</p>

        <p className="mt-4 text-sm text-[var(--color-text-sub)] leading-relaxed">
          外壁ぬりかえナビは、外壁塗装の業者選びで失敗する方を減らすため、正確・公正・有益な情報を提供することを使命としています。以下のポリシーに基づいてコンテンツを作成しています。
        </p>

        {/* Editorial principles */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">編集方針</h2>
          <div className="space-y-4">
            {principles.map((p, i) => (
              <div key={i} className="p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true">
                    <path d="M4 9L7.5 12.5L14 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--color-text-sub)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad disclosure */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">広告表示・アフィリエイト開示</h2>
          <div className="p-5 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-xl">
            <ul className="space-y-2">
              {adDisclosure.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-secondary-dark)" strokeWidth="1.5" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="7" cy="7" r="6"/>
                    <path d="M5 7L6.5 8.5L9 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ranking criteria */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">ランキング評価基準</h2>
          <p className="text-sm text-[var(--color-text-sub)] mb-4">
            業者ランキングは以下の基準を編集部が総合的に評価して作成しています。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "業者の登録数・対応エリア",
              "審査・品質管理の厳格さ",
              "ユーザーの口コミ・評判",
              "無料見積もり制度",
              "保証・アフターサービス",
              "サービスの使いやすさ",
            ].map((criterion) => (
              <div key={criterion} className="p-3 bg-[var(--color-bg-alt)] rounded-lg text-xs text-[var(--color-text-sub)] text-center font-medium border border-[var(--color-border)]">
                {criterion}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">誤情報のご指摘・お問い合わせ</h2>
          <p className="text-sm text-[var(--color-text-sub)]">
            コンテンツに誤りがある場合や、情報の更新が必要な場合は、下記の運営者情報よりお問い合わせください。指摘いただいた内容は編集部が確認し、必要に応じて修正します。
          </p>
          <div className="mt-4 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
            <p className="font-medium text-[var(--color-text)] mb-1">運営者</p>
            <p className="text-sm text-[var(--color-text-sub)]">株式会社MediaX</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
