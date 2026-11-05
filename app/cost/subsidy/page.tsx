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
    example: "遮熱・断熱改修への助成（条件・金額は各区市町村による）",
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
    a: "補助金申請に慣れた業者であれば任せることも可能です。自治体の補助金では施主（家主）本人が申請者となる場合があるため、申請内容を十分に確認することが重要です。書類の偽造や不正申請は補助金返還・罰則の対象になります。なお、住宅省エネ2026キャンペーンの各事業（みらいエコ住宅2026事業・先進的窓リノベ2026事業など）は、登録された工事施工者等（住宅省エネ支援事業者）が交付申請を行う仕組みで、工事発注者が自ら申請することはできません。",
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
          当ページでは、外壁塗装に利用できる国・自治体の助成金・補助金をご説明します。条件を満たす場合、補助を受けられることがあります。
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

        {/* Area pages (2026-11-01) */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">自治体別の塗装助成（公式サイトで確認済み）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/cost/subsidy/tokyo-23ku/", title: "東京23区の外壁・屋根塗装の助成一覧", desc: "区ごとの対象・対象外と受付状況" },
              { href: "/cost/subsidy/seirei-shi/", title: "政令指定都市20市の外壁塗装の助成一覧", desc: "塗装を対象外と明記している市など" },
              { href: "/cost/subsidy/ota-ku/", title: "大田区の住宅リフォーム助成", desc: "外壁・屋根塗装が対象、上限20万円" },
              { href: "/cost/subsidy/suginami-ku/", title: "杉並区の高日射反射率塗装の助成", desc: "屋根・外壁合わせて上限15万円" },
              { href: "/cost/subsidy/shinagawa-ku/", title: "品川区の住宅改善工事助成", desc: "遮熱性塗装、区民は上限20万円" },
              { href: "/cost/subsidy/adachi-ku/", title: "足立区の省エネリフォーム補助金", desc: "遮熱塗装は上限5万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/setagaya-ku/", title: "世田谷区のエコ住宅補助金", desc: "令和8年度は外壁塗装が対象外" },
              { href: "/cost/subsidy/chiyoda-ku/", title: "千代田区のヒートアイランド対策助成", desc: "屋上・壁面の高反射率塗料、上限50万円" },
              { href: "/cost/subsidy/minato-ku/", title: "港区の高反射率塗料等の助成", desc: "外壁は対象外、屋上・屋根は区民上限30万円" },
              { href: "/cost/subsidy/shinjuku-ku/", title: "新宿区の高反射率塗装の補助", desc: "屋根・屋上が対象、上限20万円" },
              { href: "/cost/subsidy/bunkyo-ku/", title: "文京区の高日射反射率塗料の助成", desc: "外壁は対象外、屋根・屋上の全面塗装は上限40万円" },
              { href: "/cost/subsidy/sumida-ku/", title: "墨田区の遮熱塗装の助成", desc: "屋根全体と壁全面、戸建て上限15万円" },
              { href: "/cost/subsidy/koto-ku/", title: "江東区の高反射率塗装の助成", desc: "屋根・屋上・ベランダが対象、上限20万円" },
              { href: "/cost/subsidy/katsushika-ku/", title: "葛飾区のかつしかエコ助成金", desc: "屋根等又は壁で一律5万円、両方で10万円" },
              { href: "/cost/subsidy/kawaguchi-shi/", title: "川口市の住宅リフォーム補助金", desc: "外壁の塗装が対象、工事費の5%・上限10万円（令和8年度は終了）" },
              { href: "/cost/subsidy/kawagoe-shi/", title: "川越市の住宅改修補助金", desc: "外壁の塗装が対象、工事費の5%・上限5万円" },
              { href: "/cost/subsidy/koshigaya-shi/", title: "越谷市の住宅・店舗改修促進補助金", desc: "外壁の塗装が対象、第2期は11月16日まで" },
              { href: "/cost/subsidy/hachioji-shi/", title: "八王子市の居住環境整備補助金", desc: "屋根・外壁の塗装は上限5万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/maebashi-shi/", title: "前橋市の住宅リフォーム補助金", desc: "外壁・屋根の改修、上限10万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/takasaki-shi/", title: "高崎市の住環境改善助成事業", desc: "外壁・屋根の塗装、上限20万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/nagasaki-shi/", title: "長崎市の快適住まいづくり支援費補助金", desc: "遮熱・断熱塗装、上限10万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/sasebo-shi/", title: "佐世保市の住宅性能向上リフォーム支援事業", desc: "断熱・遮熱塗料の塗装、最大20万円（先着順・受付中）" },
              { href: "/cost/subsidy/mito-shi/", title: "水戸市の安心住宅リフォーム支援補助金", desc: "屋根・外壁の塗装・防水、上限10万円（後期の申請期間は終了）" },
              { href: "/cost/subsidy/nishinomiya-shi/", title: "西宮市の住宅リフォーム助成事業", desc: "屋根や外壁の塗装・防水、最高15万円（令和8年度は募集終了）" },
              { href: "/cost/subsidy/matsuyama-shi/", title: "松山市のわが家のリフォーム応援事業", desc: "屋根・外壁の塗装、上限20万円＋加算（令和8年度は受付終了）" },
              { href: "/cost/subsidy/yamagata-shi/", title: "山形市の住宅リフォーム総合支援事業", desc: "市補助タイプは塗装が対象、20万円限度（募集期間は終了）" },
              { href: "/cost/subsidy/akita-shi/", title: "秋田市の住宅リフォーム支援事業", desc: "外装の塗装が対象、5万円（令和8年度は受付終了）" },
              { href: "/cost/subsidy/asahikawa-shi/", title: "旭川市の住宅改修補助金", desc: "維持保全型で屋根・外壁の塗装、一律5万円（受付終了）" },
              { href: "/cost/subsidy/morioka-shi/", title: "盛岡市のリフォーム支援事業2026", desc: "外壁の塗替え等、6万円分の電子商品券（受付終了）" },
              { href: "/cost/subsidy/yokosuka-shi/", title: "横須賀市の高齢者住宅リフォーム補助金", desc: "65歳以上と同居、一律10万円（令和8年度は受付終了）" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
                <span className="block font-bold text-sm text-[var(--color-text)]">{l.title}</span>
                <span className="block mt-1 text-xs text-[var(--color-text-sub)]">{l.desc}</span>
              </Link>
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
