import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_TITLE = "外壁塗装の訪問営業への対処法｜契約前の確認とクーリング・オフ";
const PAGE_URL = "https://gaiheki-nuriekae-navi.com/guide/door-to-door/";
const UPDATED_AT = "2026年9月17日";

export const metadata: Metadata = {
  title: `${PAGE_TITLE}【2026年版】`,
  description:
    "外壁塗装の訪問営業を受けたときの対応手順を整理。特定商取引法で事業者に課されている規制、その場で契約しないための確認点、クーリング・オフと相談窓口を出典付きで解説します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE}【2026年版】`,
    description: "訪問営業を受けたときに確認すべきことと、契約後に取れる手段を解説します。",
    url: PAGE_URL,
    type: "article",
  },
};

const lawRules = [
  {
    h: "事業者の氏名等の明示（特定商取引法第3条）",
    b: "訪問販売をしようとするときは、勧誘に先立って、事業者の氏名（名称）、契約の締結について勧誘する目的であること、販売しようとする商品や役務の種類を告げなければならないとされています。誰がどんな目的で来たのかを最初に名乗らない相手は、この時点で確認が必要です。",
  },
  {
    h: "再勧誘の禁止等（同法第3条の2）",
    b: "消費者が契約締結の意思がないことを示したときは、その訪問時にそのまま勧誘を続けることも、その後あらためて勧誘することも禁止されています。「結構です」と伝えたあとに勧誘が続く場合は、規制に反する行為にあたる可能性があります。",
  },
  {
    h: "書面の交付（同法第4条、第5条）",
    b: "契約の申込みを受けたとき、または契約を締結したときは、商品や役務の種類、販売価格、支払時期と方法、申込みの撤回に関する事項、事業者の氏名・住所・電話番号などを記載した書面を渡さなければならないとされています。この書面は後述のクーリング・オフの起算点にもなります。",
  },
  {
    h: "禁止行為（同法第6条）",
    b: "勧誘の際や申込みの撤回を妨げるために事実と違うことを告げること、故意に事実を告げないこと、相手を威迫して困惑させることなどが禁止されています。急かされていると感じたときは、その場で判断しないことが対処になります。",
  },
];

const onTheSpot = [
  {
    h: "その場では契約も口約束もしない",
    b: "点検や見積もりを受けること自体は問題ありませんが、その日のうちに契約書へ署名する必要はありません。「今日だけの価格」と言われても、日を改めて比較したうえで判断すると伝えてかまいません。",
  },
  {
    h: "屋根や外壁の「無料点検」に上がってもらう前に確認する",
    b: "誰がどの範囲を見るのか、点検が本当に無料か、点検後に何が起こるのかを先に確認します。点検中の写真を見せられた場合は、それが自宅のものか、どの部分の写真かを説明してもらってください。",
  },
  {
    h: "会社名・所在地・連絡先を書面で受け取る",
    b: "名刺やパンフレットだけでなく、書面に記載された所在地と電話番号を確認します。あとから会社の情報を調べられる状態にしておくことが、判断材料になります。",
  },
  {
    h: "同じ内容で他社の見積もりも取る",
    b: "提示された工事内容をメモしておき、同じ条件で他社にも見積もりを依頼します。金額だけでなく、工程や塗料の記載がどこまで具体的かを比べると差が見えます。見積書の見方は大阪のエリアページで項目ごとに整理しています。",
  },
];

const coolingOff = [
  {
    h: "起算点は法定書面を受け取った日",
    b: "訪問販売で契約を申し込んだり締結したりした場合でも、法律で決められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録により申込みの撤回や契約の解除ができるとされています。",
  },
  {
    h: "期間を過ぎても認められる場合がある",
    b: "事業者がクーリング・オフに関する事項について事実と違うことを告げたり、威迫したりしたことで消費者が誤認・困惑してクーリング・オフしなかった場合には、期間を経過していてもクーリング・オフができるとされています。",
  },
  {
    h: "記録が残る方法で行う",
    b: "書面で行う場合は特定記録郵便、書留、内容証明郵便などが薦められています。電磁的記録の場合は、送信したメールを保存する、専用フォームの画面を残すなど、証拠を保存しておくことが望ましいとされています。",
  },
];

const faqs = [
  {
    q: "訪問営業の会社は避けたほうがいいですか？",
    a: "訪問という営業手法そのものが違法なわけではなく、特定商取引法の規制を守っているかどうかが判断の分かれ目です。名乗り方、断ったあとの対応、書面の交付といった手順が守られているかを見てください。当サイトでは個別の会社について訪問営業の実態を確認していないため、特定の社名を挙げての注意喚起は行っていません。",
  },
  {
    q: "「今日契約すれば割引」と言われました。応じても大丈夫ですか？",
    a: "その場で決める必要はありません。比較したうえで判断すると伝え、同じ内容の見積もりを他社からも取ってください。撤回を妨げるために事実と違うことを告げる行為は特定商取引法で禁止されています。急かされていると感じた時点で、いったん持ち帰る判断が有効です。",
  },
  {
    q: "すでに契約してしまいました。どうすればいいですか？",
    a: "まず、契約時に受け取った書面の日付と記載内容を確認してください。法律で決められた書面を受け取った日から8日以内であれば、書面または電磁的記録でクーリング・オフができるとされています。判断に迷う場合は、お住まいの地域の消費生活センターに相談してください。",
  },
  {
    q: "相談できる公的な窓口はありますか？",
    a: "消費者ホットライン「188」に電話すると、身近な消費生活相談窓口につながります。最寄りの窓口につながらない場合には、国民生活センターがバックアップ相談を受け付けています（受付時間などは公式サイトで確認してください）。",
  },
];

const toc = [
  { id: "background", label: "外壁塗装で訪問営業を受けやすい理由" },
  { id: "rules", label: "法律で事業者に課されていること" },
  { id: "onspot", label: "訪問を受けたその場でやること・やらないこと" },
  { id: "coolingoff", label: "契約してしまったとき（クーリング・オフ）" },
  { id: "consult", label: "相談できる窓口" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連ページ" },
];

export default function DoorToDoorGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: "訪問営業への対処法" },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          外壁塗装の訪問営業への対処法【2026年版】契約前の確認とクーリング・オフ
        </h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">最終更新：{UPDATED_AT}</p>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">
          「近所で工事をしているので外壁を見せてほしい」と訪問を受けたとき、どこまで応じてよいのか迷う方は少なくありません。このページでは、訪問販売について法律で定められている事項を出典とともに整理し、その場での対応と、契約後に取れる手段をまとめます。
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

        <section id="background" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">外壁塗装で訪問営業を受けやすい理由</h2>
          <div className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
              外壁や屋根の状態は、家の外から見ただけでもある程度の見当がつきます。色あせやコケ、シーリングの痩せといった症状は道路側からも目に入るため、声をかけるきっかけにしやすい工事だといえます。また、塗り替えは頻繁に経験するものではないので、住んでいる側に比較の基準がないことも、その場で判断を迫られやすい背景になります。
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
              裏を返せば、指摘された症状が本当に急ぐものかどうかを自分で確かめられれば、落ち着いて判断できます。症状ごとの深刻度と緊急度は
              <Link href="/trouble/crack/" className="text-[var(--color-primary)] hover:underline mx-1">劣化・トラブルのページ</Link>
              で解説しています。
            </p>
          </div>
        </section>

        <section id="rules" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">法律で事業者に課されていること</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">
            訪問販売は特定商取引法の対象です。次の内容は、消費者庁の特定商取引法ガイドに記載されている行政規制の要点です。
          </p>
          <div className="space-y-4">
            {lawRules.map((r, i) => (
              <div key={r.h} className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-start gap-2">
                  <span className="mono text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{r.h}</span>
                </h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            出典：消費者庁「特定商取引法ガイド／訪問販売」（
            <a
              href="https://www.no-trouble.caa.go.jp/what/doortodoorsales/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              no-trouble.caa.go.jp
            </a>
            ）2026年9月時点。具体的な事案にあてはまるかどうかの判断は、消費生活相談窓口や専門家にご相談ください。
          </p>
        </section>

        <section id="onspot" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">訪問を受けたその場でやること・やらないこと</h2>
          <ul className="space-y-3">
            {onTheSpot.map((c) => (
              <li key={c.h} className="flex items-start gap-3 p-4 bg-white border border-[var(--color-border)] rounded-xl">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span>
                  <span className="block font-medium text-sm text-[var(--color-text)]">{c.h}</span>
                  <span className="block mt-1 text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="coolingoff" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">契約してしまったとき（クーリング・オフ）</h2>
          <div className="space-y-4">
            {coolingOff.map((c) => (
              <div key={c.h} className="p-5 bg-white border-l-4 border-[var(--color-accent)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2">{c.h}</h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            出典：消費者庁「特定商取引法ガイド／訪問販売」（特定商取引法第9条に関する解説）2026年9月時点。適用の可否は契約内容によって異なります。
          </p>
        </section>

        <section id="consult" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">相談できる窓口</h2>
          <div className="p-5 bg-[var(--color-accent-light)] border border-[var(--color-accent)] rounded-xl">
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
              判断に迷ったときは、契約する前でも相談できます。消費者ホットライン「188」に電話すると、身近な消費生活相談窓口につながります。最寄りの窓口につながらない場合には、国民生活センターがバックアップ相談を受け付けています。
            </p>
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              出典：
              <a
                href="https://www.kokusen.go.jp/map/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                国民生活センター「全国の消費生活センター等」
              </a>
              （2026年9月時点）。受付時間や条件は変更される場合があるため、最新の内容は公式サイトでご確認ください。
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
              <span className="block font-bold text-[var(--color-text)]">外壁塗装の足場は必要か</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">「足場代無料」と言われたときの見方</span>
            </Link>
            <Link href="/guide/construction-flow/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">工事の流れと生活への影響</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">契約前に工程表で確認したいこと</span>
            </Link>
            <Link href="/area/osaka/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">大阪の外壁塗装業者比較</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">相見積もりの取り方と見積書の項目</span>
            </Link>
            <Link href="/review/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">業者の口コミ・評判まとめ</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">運営会社の公開情報から確認する</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
