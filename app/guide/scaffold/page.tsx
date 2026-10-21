import type { Metadata } from "next";
import { OG_DEFAULT } from "@/lib/og";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_TITLE = "外壁塗装に足場は必要？役割と「足場なし」を提案された場合の確認事項";
const PAGE_URL = "https://gaiheki-nuriekae-navi.com/guide/scaffold/";
const UPDATED_AT = "2026年9月17日";

export const metadata: Metadata = {
  title: `${PAGE_TITLE}【2026年版】`,
  description:
    "外壁塗装で足場を組む理由、法令上の位置づけ、足場を組む回数の考え方、「足場なし」「足場代無料」と提示された場合の確認事項をご説明します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE}【2026年版】`,
    description: "外壁塗装で足場が必要な理由と、足場に関する提案を受けた際の確認事項をご説明します。",
    url: PAGE_URL,
    type: "article",
    images: [OG_DEFAULT],
  },
  twitter: { card: "summary_large_image", images: [OG_DEFAULT] },
};

const roles = [
  {
    h: "作業する人の安全を確保する",
    b: "外壁塗装は建物の外側の高い位置で行う作業です。安定した作業床がなければ、体勢を保ちながら塗装することが難しく、転落の危険もあります。足場は工事の付属品ではなく、作業を行うための基盤です。",
  },
  {
    h: "塗りムラを防ぎ、仕上がりを均一にする",
    b: "手が届く範囲でしか作業できない状態では、塗装時の力の入れ方や刷毛の運びが場所ごとに変わります。足場があれば壁面に正対した姿勢で作業でき、下塗り・中塗り・上塗りの各工程を同じ条件で進めやすくなります。",
  },
  {
    h: "洗浄水や塗料の飛散を抑える",
    b: "足場には飛散防止のネットやシートを張ります。高圧洗浄の水しぶきや塗料のミストが隣家や道路に飛散することを抑える役割があり、近隣への配慮の面でも足場は欠かせません。",
  },
  {
    h: "下地の状態を近くで確認できる",
    b: "地上や屋内からでは、外壁の上部にあるひび割れやシーリングの傷みまでは確認できません。足場を組むことで、施工中に高い位置の状態を間近で確認し、補修できます。劣化症状の見分け方は、劣化・トラブルのページでご説明しています。",
  },
];

const checkItems = [
  {
    h: "見積書に足場の数量や範囲の記載があるか",
    b: "「足場一式」とのみ記載されている場合、どの範囲に組む想定であるかが分かりません。数量や設置範囲が記載されていれば、他社の見積もりと比較できます。",
  },
  {
    h: "飛散防止ネットやシートが含まれているか",
    b: "足場本体とネットが別項目になっている場合があります。含まれているかを事前に確認することで、後から追加費用が発生することを避けられます。",
  },
  {
    h: "足場が組めない面があるかどうか",
    b: "隣家との距離が近い、敷地に高低差があるといった条件では、通常どおり組めない面が出ることがあります。その場合の施工方法と、品質への影響について説明を求めてください。",
  },
  {
    h: "設置日と解体日が工程表に入っているか",
    b: "足場が建っている期間は生活に影響が出ます。設置日と解体日を工程表で示すよう、業者に依頼することをおすすめします。",
  },
];

const cautions = [
  {
    h: "「足場代を無料にします」と提示された場合",
    b: "足場は材料と人手がかかる工程です。無料という表現が使われている場合、その分が他の項目に含まれている可能性があります。値引きの名目そのものに問題があるわけではありませんが、総額と各項目の内訳を確認し、どの項目がどのように変わったのかをご確認ください。",
  },
  {
    h: "「足場なしで塗れます」と提示された場合",
    b: "作業方法として足場以外の手段が選ばれる場合もありますが、その方法を選ぶ理由、適用する範囲、安全対策について説明を受ける必要があります。理由の説明がないまま省略が提案された場合は、他社の意見も確認することをおすすめします。",
  },
  {
    h: "近隣の敷地に足場がかかる場合",
    b: "隣地に立ち入る必要がある場合は、事前の了解が欠かせません。誰がいつ説明するのかを契約前に決めておくことで、着工後のトラブルを避けられます。",
  },
];

const faqs = [
  {
    q: "外壁塗装で足場を省略することはできますか？",
    a: "作業する高さや建物の形状によって判断が異なるため、当サイトでは一律に可否を示すことは控えます。労働安全衛生規則では、高さが2メートル以上の箇所で作業を行い墜落の危険があるときは、足場を組み立てるなどの方法で作業床を設けることが事業者に求められています（出典：労働安全衛生規則第518条／e-Gov法令検索）。省略の提案を受けた場合は、その根拠と安全対策を確認してください。",
  },
  {
    q: "足場代はどのくらいかかりますか？",
    a: "足場の費用は建物の大きさや形状、設置できる範囲によって変わります。当サイトでは地域別・条件別の単価を独自に調査していないため、当ページでは金額を掲載していません。費用の内訳の考え方は費用・相場のページに掲載しています。そちらをご確認のうえ、実際の金額は各社の見積もりで比較してください。",
  },
  {
    q: "屋根も塗装する場合、足場は二重に必要ですか？",
    a: "外壁と屋根を同じ時期に施工する場合、同じ足場を使って両方の作業を行う形が一般的です。別々の時期に工事をすると、そのたびに設置と解体が必要になります。時期をそろえるかどうかは屋根の傷み具合にもよるため、現地を確認した業者に両方の場合の見積もりを依頼すると判断しやすくなります。屋根材ごとの注意と確認事項は、外壁と屋根の塗装を同時に行う場合のページでご説明しています。",
  },
  {
    q: "足場が建っている間、窓は開けられますか？",
    a: "工程によって変わります。飛散防止シートで覆われている間や、洗浄・塗装の当日は開けられないことがあります。どの日にどの制約があるのかは工程表で確認してください。工事中の生活への影響は、工事の流れのページでご説明しています。",
  },
];

const toc = [
  { id: "role", label: "足場が必要とされる理由" },
  { id: "law", label: "法令上の定め" },
  { id: "check", label: "見積書で確認すべき足場の項目" },
  { id: "caution", label: "足場について説明を求めるべきケース" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連ページ" },
];

export default function ScaffoldGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "費用・相場", href: "/cost/price/" },
            { label: "外壁塗装の足場" },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          外壁塗装に足場は必要？役割と「足場なし」を提案された場合の確認事項【2026年版】
        </h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">最終更新：{UPDATED_AT}</p>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          外壁塗装の見積書で、塗料と並んで大きな項目となるのが足場です。当ページでは、足場の必要性や費用に疑問を感じた際に確認すべき事項を整理しています。金額そのものではなく、足場という工程の役割と、提案を受けた際の確認方法を中心にご説明します。
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

        <section id="role" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">足場が必要とされる理由</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">
            足場は「高い場所に登るための設備」にとどまらず、仕上がり・安全・近隣への配慮のそれぞれに関わる工程です。
          </p>
          <div className="space-y-4">
            {roles.map((r, i) => (
              <div key={r.h} className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-start gap-2">
                  <span className="mono text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{r.h}</span>
                </h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="law" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">法令上の定め</h2>
          <div className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
              労働安全衛生規則では、高さが2メートル以上の箇所で作業を行う場合において、墜落により労働者に危険を及ぼすおそれのあるときは、事業者は足場を組み立てるなどの方法により作業床を設けなければならないとされています。これは施主ではなく工事を行う事業者に課された義務ですが、足場を含まない見積もりを提示された際に、その理由を確認する根拠となります。
            </p>
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              出典：労働安全衛生規則（昭和47年労働省令第32号）第518条／
              <a
                href="https://laws.e-gov.go.jp/law/347M50002000032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                e-Gov法令検索
              </a>
              （2026年9月時点）
            </p>
          </div>
        </section>

        <section id="check" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">見積書で確認すべき足場の項目</h2>
          <ul className="space-y-3">
            {checkItems.map((c) => (
              <li key={c.h} className="flex items-start gap-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span>
                  <span className="block font-medium text-sm text-[var(--color-text)]">{c.h}</span>
                  <span className="block mt-1 text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
            足場が工事費のなかでどの位置を占めるかは
            <Link href="/cost/price/" className="text-[var(--color-primary)] hover:underline mx-1">費用・相場のページ</Link>
            で内訳としてご説明しています。金額の妥当性は、複数社の見積もりを同じ条件で比較してご判断ください。
          </p>
        </section>

        <section id="caution" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">足場について説明を求めるべきケース</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.h} className="p-5 bg-white border-l-4 border-[var(--color-secondary)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2">{c.h}</h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</p>
              </div>
            ))}
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
            <Link href="/guide/construction-flow/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装の工事の流れと生活への影響</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">足場の設置から解体までの位置づけ</span>
            </Link>
            <Link href="/guide/door-to-door/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">訪問営業への対応方法</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">その場で契約しないための確認手順</span>
            </Link>
            <Link href="/trouble/crack/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁のひび割れ</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">足場を組んだ後に判明する症状もあります</span>
            </Link>
            <Link href="/area/tokyo/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">東京の外壁塗装業者比較</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">密集地での足場と近隣対応</span>
            </Link>
            <Link href="/guide/contract/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">契約前に確認する書類</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">見積書・契約書・約款と無料の見積チェック</span>
            </Link>
            <Link href="/guide/warranty/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装の保証の確認方法</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">保証書の項目とリフォーム瑕疵保険</span>
            </Link>
            <Link href="/guide/roof-wall/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁と屋根の塗装を同時に行う場合</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">足場の共用・工程・屋根材ごとの注意</span>
            </Link>
            <Link href="/guide/asbestos/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">石綿（アスベスト）の事前調査</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">対象となる工事と発注者が確認すること</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
