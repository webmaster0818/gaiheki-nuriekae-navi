import type { Metadata } from "next";
import { OG_DEFAULT } from "@/lib/og";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_TITLE = "外壁塗装の工事の流れと生活への影響｜着工前の準備から引き渡しまで";
const PAGE_URL = "https://gaiheki-nuriekae-navi.com/guide/construction-flow/";
const UPDATED_AT = "2026年9月17日";

export const metadata: Metadata = {
  title: `${PAGE_TITLE}【2026年版】`,
  description:
    "外壁塗装の工程を、着工前の準備から引き渡しまで順にご説明します。足場の設置、高圧洗浄、下地補修、養生、塗装の各段階で生じる生活上の制約と、工程表で確認すべき事項を掲載しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE}【2026年版】`,
    description: "外壁塗装の工程と、工事中の生活における注意点をご説明します。",
    url: PAGE_URL,
    type: "article",
    images: [OG_DEFAULT],
  },
  twitter: { card: "summary_large_image", images: [OG_DEFAULT] },
};

const steps = [
  {
    h: "近隣への挨拶",
    b: "着工前に、両隣と向かい、裏手の家へ工事の予定を伝えます。音や臭い、車両の出入りについて事前に知らせておくことで、工事中の問い合わせを減らせます。誰がいつ挨拶に回るのかを、契約時に決めておくことをおすすめします。",
  },
  {
    h: "足場の設置と飛散防止シート張り",
    b: "工事初日は足場を組む作業が中心となります。金属の部材を扱うため、作業音が発生します。足場を組んだ後に飛散防止のシートやネットを張り、以降は建物が覆われた状態となります。",
  },
  {
    h: "高圧洗浄と乾燥",
    b: "外壁や屋根に付いた汚れ、コケ、古い塗膜の粉を水圧で落とします。水しぶきが出るため、窓は閉め切ります。洗浄後は下地を乾燥させる時間が必要となり、この間は塗装作業を行いません。",
  },
  {
    h: "下地補修・シーリング工事",
    b: "ひび割れの補修や、目地のシーリングの打ち替え・増し打ちを行います。塗装前の下地を整える工程であり、仕上がりと耐久性に直結します。傷みが想定より進んでいた場合は、この段階で追加工事が提案されることがあります。",
  },
  {
    h: "養生",
    b: "窓、玄関まわり、給湯器、植木、車など、塗料の付着を避けるべき部分をシートやテープで覆います。養生中の窓は開閉できなくなるため、どの窓がいつ塞がるのかを事前に確認しておくことをおすすめします。",
  },
  {
    h: "下塗り・中塗り・上塗り",
    b: "下塗りで密着の基盤をつくり、中塗り・上塗りで色と機能を付与します。各工程の間には乾燥の時間が必要です。塗料ごとの特徴と耐用年数の目安は、塗料ガイドに掲載しています。",
  },
  {
    h: "付帯部の塗装",
    b: "雨樋、軒天、破風板、シャッターボックスなどの付帯部を塗装します。どこまでを塗装範囲に含めるかは契約内容によって変わるため、見積書の記載と照らして確認してください。",
  },
  {
    h: "点検・手直し・足場の解体",
    b: "塗り残しや養生の跡がないかを確認し、必要に応じて手直しを行ってから足場を外します。足場がある間のほうが高い位置の手直しを行いやすいため、不具合が疑われる箇所は解体前に伝えることをおすすめします。",
  },
  {
    h: "引き渡しと書類の受け取り",
    b: "仕上がりを一緒に確認し、保証書や施工内容の記録を受け取ります。使用した塗料の製品名を記録しておくことで、次回の塗り替えの検討材料になります。",
  },
];

const prepare = [
  { h: "外に置いているものを移動する", b: "自転車、鉢植え、物干し竿、エアコンの室外機まわりの物などは、足場を組む前に移動しておきます。" },
  { h: "駐車場所を決めておく", b: "工事車両の駐車場所と、自家用車の駐車場所を事前に決めておきます。" },
  { h: "色と艶を最終確認する", b: "小さな色見本と実際の壁面では印象が異なります。可能であれば、大きめの見本で確認することをおすすめします。" },
  { h: "工程表を受け取る", b: "各日の作業内容と、雨天時の順延の扱いが記載された工程表を受け取っておくことをおすすめします。" },
];

const dailyLife = [
  {
    h: "洗濯物は室内干しになる期間がある",
    b: "洗浄、塗装、乾燥の期間は屋外に洗濯物を干せません。室内干しとなる日数を工程表で確認し、必要に応じて乾燥機やコインランドリーの利用をご検討ください。",
  },
  {
    h: "窓の開閉に制限が出る",
    b: "養生中の窓は開けられません。換気が必要な部屋がある場合は、どの窓がいつ塞がるかを事前に確認し、調整を依頼することをおすすめします。",
  },
  {
    h: "塗料の臭いが生じる場合がある",
    b: "塗料には水性と溶剤（油性）があり、臭いの出方が異なります。臭いに敏感なご家族がいる場合は、契約前に相談することで、塗料の選択肢が広がります。",
  },
  {
    h: "不在時にも進められる工程が多い",
    b: "多くの工程は不在時でも進められますが、色の最終確認や引き渡しの立ち会いなど、在宅が望ましい日があります。どの日に立ち会いが必要かを確認してください。",
  },
  {
    h: "ペットや植物への配慮",
    b: "音や人の出入りに敏感な動物がいる場合や、養生により影響を受ける植物がある場合は、事前に伝えて対応を相談します。",
  },
];

const faqs = [
  {
    q: "工事は何日くらいかかりますか？",
    a: "建物の大きさ、外壁の傷み具合、天候によって変わるため、当サイトでは一律の日数を示していません。工程ごとに乾燥の時間が必要であり、雨が続く場合は順延となります。契約前に工程表を受け取り、予備日の設定をご確認ください。",
  },
  {
    q: "工事中は在宅している必要がありますか？",
    a: "多くの工程は不在時でも進められます。ただし、着工時の説明、色の最終確認、引き渡しの立ち会いなど、在宅が望ましい場面があります。立ち会いが必要な日を工程表とあわせて確認しておくことをおすすめします。",
  },
  {
    q: "雨が降ったらどうなりますか？",
    a: "塗装は下地が濡れている状態では行えないため、順延となるのが一般的です。順延した場合の工期の扱いと、追加費用の有無を契約前にご確認ください。",
  },
  {
    q: "工事完了後に確認すべき事項はありますか？",
    a: "足場を解体する前に、塗り残しや養生テープの跡がないかを業者と一緒に確認すると、手直しがしやすくなります。引き渡し時には、保証書と、使用した塗料の製品名が分かる書類を受け取ることをおすすめします。",
  },
];

const toc = [
  { id: "steps", label: "着工から引き渡しまでの工程" },
  { id: "prepare", label: "着工前の準備" },
  { id: "life", label: "工事中の生活上の制約" },
  { id: "schedule", label: "工程表で確認すべき事項" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連ページ" },
];

export default function ConstructionFlowGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "費用・相場", href: "/cost/price/" },
            { label: "工事の流れと生活への影響" },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          外壁塗装の工事の流れと生活への影響【2026年版】着工前の準備から引き渡しまで
        </h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">最終更新：{UPDATED_AT}</p>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          外壁塗装は、作業員が出入りし、複数日にわたって作業が続く工事です。工程の順番と、その間に生じる生活上の制約を把握しておくことで、契約前の確認事項が明確になります。当ページでは、着工前の準備から引き渡しまでを順にご説明します。
        </p>

        <nav className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white p-5" aria-label="目次">
          <p className="font-bold text-[var(--color-text)] mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm list-decimal list-inside marker:text-[var(--color-text-muted)]">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-[var(--color-primary)] hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="steps" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">着工から引き渡しまでの工程</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">
            現場によって細かな順番は前後しますが、おおまかな流れは以下のとおりです。各工程にかかる日数は建物の条件と天候により変わるため、ここでは順番と内容を示します。
          </p>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s.h} className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-start gap-2">
                  <span className="mono text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.h}</span>
                </h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
            足場の役割と見積書での確認点は
            <Link href="/guide/scaffold/" className="text-[var(--color-primary)] hover:underline mx-1">足場のページ</Link>
            でご説明しています。
          </p>
        </section>

        <section id="prepare" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">着工前の準備</h2>
          <ul className="space-y-3">
            {prepare.map((p) => (
              <li key={p.h} className="flex items-start gap-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span>
                  <span className="block font-medium text-sm text-[var(--color-text)]">{p.h}</span>
                  <span className="block mt-1 text-sm text-[var(--color-text-sub)] leading-relaxed">{p.b}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="life" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">工事中の生活上の制約</h2>
          <div className="space-y-4">
            {dailyLife.map((d) => (
              <div key={d.h} className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2">{d.h}</h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{d.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="schedule" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">工程表で確認すべき事項</h2>
          <div className="p-5 bg-white border-l-4 border-[var(--color-accent)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
              工程表は、工事中の生活を計画するための資料です。足場の設置日と解体日、洗浄の日、養生で塞がる窓、立ち会いが必要な日、雨天時の順延の扱いの5点が記載されているかをご確認ください。記載がない場合は口頭で確認し、追記を依頼することで、着工後の認識の違いを防げます。
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
              工事金額の内訳の考え方は
              <Link href="/cost/price/" className="text-[var(--color-primary)] hover:underline mx-1">費用・相場のページ</Link>
              に、助成金の申請には着工前の手続きが必要な場合があることは
              <Link href="/cost/subsidy/" className="text-[var(--color-primary)] hover:underline mx-1">助成金・補助金ガイド</Link>
              に掲載しています。申請を予定している場合は、工程を決める前にご確認ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-[var(--color-border)] rounded-xl overflow-hidden bg-white">
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

        <section id="related" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/scaffold/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装における足場の必要性</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">工程の基盤となる設備の役割</span>
            </Link>
            <Link href="/guide/door-to-door/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">訪問営業への対応方法</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">契約前の確認とクーリング・オフ</span>
            </Link>
            <Link href="/paint/comparison/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">塗料4種類の比較</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">耐用年数と特徴から選ぶ</span>
            </Link>
            <Link href="/area/yokohama/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">横浜の外壁塗装業者比較</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">敷地条件と現地調査の確認方法</span>
            </Link>
            <Link href="/guide/season/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装に適した時期と気象条件</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">気温5℃・湿度85%の基準と季節ごとの確認事項</span>
            </Link>
            <Link href="/guide/color/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装の色の選び方</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">色見本の見方と景観計画の色彩基準</span>
            </Link>
            <Link href="/guide/asbestos/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">石綿（アスベスト）の事前調査</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">対象となる工事と発注者が確認すること</span>
            </Link>
            <Link href="/guide/contract/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">契約前に確認する書類</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">見積書・契約書・約款と無料の見積チェック</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
