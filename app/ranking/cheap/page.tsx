import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/cheap/" },
  title: "外壁塗装を安く頼む方法と安い業者ランキング【2026年版】格安見積もりの確認先",
  description: "外壁塗装を安く頼むには、同じ条件で複数社の見積もりを比べ、屋根と同時に施工して足場を1回にし、自治体の助成を確認します。格安の見積もりは住まいるダイヤルの無料の見積チェックで確認でき、訪問販売の契約は8日以内ならクーリング・オフができます（2026年11月7日確認）。",
};

const CHECKED = "2026年11月7日";

const faqs = [
  {
    q: "外壁塗装を安く頼むには、どうすればよいですか？",
    a: "同じ工事内容（塗る範囲・塗料・塗り回数）で複数社から見積もりを取って比べ、屋根も塗る予定があれば同時に依頼して足場を1回にします。お住まいの自治体に塗装を対象とする助成制度があるかも確認します。安さだけで選ぶと工程や塗料の内容が見積もりから分からないことがあるため、内訳を確認してから契約します。",
  },
  {
    q: "格安の見積もりが妥当かどうか、どこで確認できますか？",
    a: "住まいるダイヤル（公益財団法人 住宅リフォーム・紛争処理支援センター）の「リフォーム見積チェックサービス」は無料で、これから契約を予定している方が契約前の見積書を送ると、建築士の相談員が内容を確認して電話で回答します（2026年11月7日確認）。",
  },
  {
    q: "訪問販売で安いと言われて契約した場合、取り消せますか？",
    a: "特定商取引法により、訪問販売で契約した場合は、法律で決められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録でクーリング・オフ（申込みの撤回・契約の解除）ができます（消費者庁 特定商取引法ガイド、2026年11月7日確認）。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const cheapRanking = [9, 8, 7, 6, 5, 1, 2, 3, 4, 10];

const tips = [
  {
    title: "複数社に見積もりを依頼する",
    desc: "最低3社から見積もりを取ることで、費用の相場を把握でき、価格交渉もしやすくなります。",
  },
  {
    title: "塗料のグレードを一段下げる",
    desc: "フッ素塗料をシリコン塗料に変えると、費用を抑えられる場合があります。耐用年数との兼ね合いを考慮して検討することをおすすめします。金額は業者の見積もりで確認してください。",
  },
  {
    title: "助成金・補助金を活用する",
    desc: "省エネ・断熱改修の補助金や自治体の助成金を活用することで、実質的な費用を抑えられます。",
  },
  {
    title: "屋根塗装と同時に依頼する",
    desc: "外壁塗装と屋根塗装を別々に行うと足場代が2回かかりますが、同時に施工すれば足場代は1回で済みます。",
  },
];

const warnings = [
  "極端に安い見積もりは、工程の省略や塗料の品質に問題がある可能性がある",
  "訪問販売で契約した場合は、書面を受け取った日から8日以内ならクーリング・オフができる（特定商取引法）",
  "保証書を発行しない業者は避ける",
  "材料費のみを提示し、人件費・足場代を後から追加請求する業者に注意する",
];

export default function CheapRankingPage() {
  const rankedCompanies = cheapRanking
    .map((rank) => companies.find((c) => c.rank === rank))
    .filter(Boolean) as typeof companies;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: "安い業者ランキング" },
          ]}
        />

        <div className="mt-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            安い外壁塗装業者ランキング【2026年版】
          </h1>
          <div className="mt-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
            <p className="text-[var(--color-text)] leading-relaxed">
              外壁塗装を安く頼むには、<strong>同じ工事内容で複数社の見積もりを比べる、屋根と同時に施工して足場を1回にする、自治体の助成制度を確認する</strong>の3点が基本です。格安の見積もりが妥当かどうかは、住まいるダイヤルの無料の「リフォーム見積チェックサービス」に契約前の見積書を送って確認できます（回答は電話・建築士の相談員）。訪問販売で契約した場合は、書面を受け取った日から8日以内ならクーリング・オフができます。
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-sub)] leading-relaxed">
              出典：住宅リフォーム・紛争処理支援センター「
              <a href="https://www.chord.or.jp/reform/index.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">リフォームの見積書に関する相談｜住まいるダイヤル</a>
              」、消費者庁「
              <a href="https://www.no-trouble.caa.go.jp/what/doortodoorsales/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">訪問販売｜特定商取引法ガイド</a>
              」（{CHECKED}確認）。自治体の助成は
              <Link href="/cost/subsidy/" className="text-[var(--color-primary)] hover:underline">外壁塗装の助成金・補助金</Link>
              で地域ごとにまとめています。
            </p>
          </div>
          <p className="mt-3 text-[var(--color-text-sub)]">
            費用対効果と価格を重視したランキングです。費用を抑えながら品質を確保するための方法もご説明します。
          </p>
          <div className="mt-3 p-3 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-lg text-xs text-[var(--color-text-sub)]">
            ※当ランキングはアフィリエイト広告を含みます（PR）。編集部による独自基準で評価しています。
          </div>
        </div>

        {/* Cost tips */}
        <div className="mb-8 bg-[var(--color-accent-light)] rounded-2xl border border-[var(--color-accent)] p-5">
          <h2 className="text-lg font-bold text-[var(--color-accent-dark)] mb-4">外壁塗装の費用を抑える方法</h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[var(--color-text)]">{tip.title}</div>
                  <div className="text-xs text-[var(--color-text-sub)] mt-0.5">{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking */}
        <div className="space-y-5">
          {rankedCompanies.map((company, idx) => (
            <div key={company.slug} className="bg-white rounded-2xl border border-[var(--color-border)] p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-white flex-shrink-0 ${
                  idx === 0 ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]"
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-lg font-bold text-[var(--color-text)]">{company.name}</h2>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-bold rounded-md border border-[var(--color-accent)]">
                        費用対効果1位
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--color-text-sub)] mb-2">{company.tagline}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                {company.officialUrl ? (
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 py-2.5 text-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-lg transition-colors text-sm"
                >
                  無料で見積もり依頼
                </a>
                ) : null}
                <Link
                  href={`/company/${company.slug}/`}
                  className="px-4 py-2.5 border border-[var(--color-border)] text-[var(--color-text-sub)] rounded-lg hover:bg-[var(--color-bg)] transition-colors text-sm"
                >
                  詳細
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Warnings */}
        <div className="mt-10 p-5 bg-red-50 rounded-2xl border border-red-200">
          <h3 className="font-bold text-[var(--color-danger)] mb-3 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 1L17 15H1L9 1Z" stroke="var(--color-danger)" strokeWidth="1.5" fill="var(--color-danger)" opacity="0.2"/>
              <path d="M9 7V10.5M9 13H9.01" stroke="var(--color-danger)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            価格を重視して選ぶ際の注意点
          </h3>
          <ul className="space-y-2">
            {warnings.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-sub)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--color-danger)" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="7" cy="7" r="7" opacity="0.2"/>
                </svg>
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-[var(--color-border)] p-4">
                <h3 className="font-bold text-sm text-[var(--color-text)]">{f.q}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-sub)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/ranking/" className="text-sm text-[var(--color-primary)] hover:underline font-medium">
            総合ランキングを見る &rarr;
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
