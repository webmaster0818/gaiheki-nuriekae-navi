import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/" },
  title: "外壁塗装の助成金・補助金ガイド【2026年版】申請方法と注意点",
  description: "外壁塗装に利用できる国・自治体の助成金・補助金をご説明します。申請条件・金額・申請方法・注意点を掲載しています。",
};

const nationalSubsidies = [
  {
    name: "みらいエコ住宅2026事業（国土交通省）",
    amount: "40万〜100万円／戸",
    condition: "平成28年以前に新築された住宅で、外皮に面する開口部を有する居室において、事業が定める組み合わせの断熱改修（要件化工事）を行うこと。リフォームはすべての世帯が対象です。補助額は住宅の新築時期と工事内容によって異なります。",
    note: "外壁塗装は補助対象工事のメニュー（開口部・躯体の断熱改修、エコ住宅設備の設置など）に含まれていません。交付申請の予約は遅くとも2026年11月16日まで、交付申請は遅くとも2026年12月31日までです（予算上限に達した時点で受付終了）。",
  },
  {
    name: "先進的窓リノベ2026事業（環境省）",
    amount: "最大100万円／戸",
    condition: "ガラス交換・内窓設置・外窓交換のいずれかの工事（ドア交換のみは申請できません）",
    note: "窓の断熱改修が対象です。外壁塗装と同じ時期に窓の工事を行う場合に検討できます。受付期間はみらいエコ住宅2026事業と同じです。",
  },
  {
    name: "長期優良住宅化リフォーム推進事業",
    amount: "補助率・上限額は公募要領をご確認ください",
    condition: "耐震・省エネ等の複合的な性能向上リフォーム",
    note: "外壁塗装を含む場合、対象になることがあります。",
  },
];

const localSubsidyInfo = [
  {
    pref: "東京都内各区市町村",
    example: "遮熱・断熱改修で工事費の20〜30%助成（上限10〜30万円）",
  },
  {
    pref: "大阪府・市内各区",
    example: "省エネ改修工事への助成（条件・金額は各自治体による）",
  },
  {
    pref: "神奈川県内各市町村",
    example: "エコ改修助成として外壁断熱工事への助成がある（自治体ごとに異なる）",
  },
  {
    pref: "全国の自治体",
    example: "住宅リフォーム補助金（条件・対象工事・金額は自治体ごとに大きく異なる）",
  },
];

const steps = [
  {
    step: "1",
    title: "お住まいの自治体の補助金を確認する",
    desc: "自治体の公式サイトや窓口で「住宅リフォーム補助金」「省エネ改修補助金」を確認します。外壁塗装が対象となるかをご確認ください。",
  },
  {
    step: "2",
    title: "補助金対応の業者を選ぶ",
    desc: "補助金申請には特定の条件（登録業者・認定製品の使用など）が必要な場合があります。補助金申請に対応している業者を選ぶことをおすすめします。",
  },
  {
    step: "3",
    title: "工事前に申請する（事前申請が必要）",
    desc: "多くの補助金は工事着工前の事前申請が必要です。工事後の申請では受付されない場合がほとんどです。",
  },
  {
    step: "4",
    title: "工事完了後に実績報告を行い、補助金を受領する",
    desc: "工事完了後に実績報告書・写真・領収書などを提出し、審査通過後に補助金が支払われます。",
  },
];

const faqs = [
  {
    q: "外壁塗装のみで補助金を受けられますか？",
    a: "外壁塗装単独では補助金対象外の自治体がほとんどです。ただし断熱塗料・遮熱塗料を使った省エネ目的の外壁塗装や、他のリフォームと組み合わせる場合は対象になることがあります。",
  },
  {
    q: "補助金の申請を業者に任せても問題ありませんか？",
    a: "補助金申請に慣れた業者であれば任せることも可能ですが、最終的な申請者は施主（家主）本人となるため、申請内容を十分に確認することが重要です。書類の偽造や不正申請は補助金返還・罰則の対象になります。",
  },
  {
    q: "確定申告（住宅ローン控除・リフォーム減税）は利用できますか？",
    a: "外壁塗装単独では所得税の住宅ローン控除の対象外ですが、省エネ改修工事として省エネ促進税制（投資型減税）が適用できる場合があります。詳細は、税務署または税理士にご確認ください。",
  },
];

export default function SubsidyPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "費用・相場", href: "/cost/price/" },
            { label: "助成金・補助金ガイド" },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)]">
          外壁塗装の助成金・補助金ガイド【2026年版】
        </h1>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          当ページでは、外壁塗装に利用できる国・自治体の助成金・補助金をご説明します。条件を満たす場合、数万〜数十万円の補助を受けられることがあります。
        </p>

        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
              <path d="M9 1L17 15H1L9 1Z" fill="var(--color-warning)" opacity="0.2" stroke="var(--color-warning)" strokeWidth="1.5"/>
              <path d="M9 7V10.5M9 13H9.01" stroke="var(--color-warning)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-sm text-amber-800">
              助成金・補助金の内容は自治体・制度によって異なり、随時変更されます。最新情報はお住まいの自治体または国土交通省の公式サイトでご確認ください。
            </p>
          </div>
        </div>

        {/* National subsidies */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">国の補助金・支援制度</h2>
          <div className="space-y-4">
            {nationalSubsidies.map((s) => (
              <div key={s.name} className="bg-white border border-[var(--color-border)] rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-[var(--color-text)]">{s.name}</h3>
                  <span className="flex-shrink-0 px-2 py-0.5 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs rounded-md border border-[var(--color-accent)]">
                    {s.amount}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-sub)]">
                  <span className="font-medium text-[var(--color-text)]">条件：</span>{s.condition}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-muted)] leading-relaxed">
            子育てエコホーム支援事業は、2024年12月31日で交付申請（予約を含む）の受付を終了しています。住宅省エネ2025キャンペーンの各事業（先進的窓リノベ2025事業・給湯省エネ2025事業など）は、2026年3月で事業を終了しました。
          </p>
          <p className="mt-2 text-xs text-[var(--color-text-muted)] leading-relaxed">
            出典（2026年10月17日に公式サイトで確認）：
            <a href="https://jutaku-shoene2026.mlit.go.jp/about/reform.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">住宅省エネ2026キャンペーン「リフォームについて」</a>
            ／
            <a href="https://mirai-eco2026.mlit.go.jp/reform/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">みらいエコ住宅2026事業「リフォーム」</a>
            ／
            <a href="https://kosodate-ecohome.mlit.go.jp/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">子育てエコホーム支援事業</a>
            ／
            <a href="https://jutaku-shoene2025.mlit.go.jp/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">住宅省エネ2025キャンペーン</a>
          </p>
        </section>

        {/* Local subsidies */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">自治体の補助金（例）</h2>
          <p className="text-sm text-[var(--color-text-sub)] mb-4">
            多くの都道府県・市区町村で独自の住宅リフォーム補助金が設けられています。以下は一例です。
          </p>
          <div className="space-y-3">
            {localSubsidyInfo.map((info) => (
              <div key={info.pref} className="p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
                <div className="font-medium text-[var(--color-text)] text-sm mb-1">{info.pref}</div>
                <div className="text-xs text-[var(--color-text-sub)]">{info.example}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Application steps */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">補助金申請の手順</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.step} className="flex items-start gap-4 p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-white font-bold text-lg flex items-center justify-center">
                  {step.step}
                </span>
                <div>
                  <div className="font-bold text-[var(--color-text)] mb-1">{step.title}</div>
                  <div className="text-sm text-[var(--color-text-sub)]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">助成金に関するよくある質問</h2>
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

        <div className="mt-10 p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl text-center">
          <h3 className="font-bold text-xl mb-2">補助金の活用による外壁塗装の費用削減</h3>
          <p className="text-white/80 text-sm mb-4">補助金申請に対応する業者への無料見積もりには、一括見積もりサービスをご活用ください</p>
          <Link href="/ranking/" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-xl transition-colors">
            無料で業者を比較する
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
