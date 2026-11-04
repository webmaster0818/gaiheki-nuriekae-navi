import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import companies from "@/data/companies.json";
import troubles from "@/data/troubles.json";
import { getVerifiedRating } from "@/lib/verifiedRating";
import { areaPageCount, subsidyPageCount } from "@/data/areaRegions";
import TaskIcon from "@/components/brand/TaskIcon";
import AreaFinder from "@/components/top/AreaFinder";
import ScrollReveal from "@/components/top/ScrollReveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "外壁ぬりかえナビ｜外壁塗装の一括見積もりサービス10社比較ランキング【2026年】",
  description: "外壁塗装の一括見積もりサービス10社（ヌリカエ・外壁塗装の窓口・プロタイムズほか）を費用・保証・対応エリアで比較しています。ヌリカエが2026年10月5日に発表した塗装店ランキングの集計方法、塗料別の耐用年数、助成金もまとめています。",
};

const paintTypes = [
  { slug: "silicon", name: "シリコン塗料", durability: "約10〜15年", cost: "2,300〜3,000円/㎡" },
  { slug: "fluorine", name: "フッ素塗料", durability: "約15〜20年", cost: "3,500〜4,500円/㎡" },
  { slug: "urethane", name: "ウレタン塗料", durability: "約8〜10年", cost: "1,700〜2,200円/㎡" },
  { slug: "ceramic", name: "セラミック塗料", durability: "", cost: "" },
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
    a: "使用する塗料によって異なります。外壁塗装の窓口は、耐用年数をウレタン系約8〜10年、シリコン系約10〜15年、フッ素系約15〜20年としています（2026年10月25日確認）。チョーキング・ひび割れ・色あせが見られる場合は、塗り替えを検討する時期です。",
  },
  {
    q: "一括見積もりサービスを利用するメリットは何ですか？",
    a: "複数の業者に一度で見積もりを依頼できるため、費用の相場を把握しやすく、価格交渉もしやすくなります。業者を個別に探す手間を省ける点もメリットです。ただし、紹介された業者の評判・実績は、ご自身でもご確認ください。",
  },
];

// 2026-11-04 TOP デザイン刷新（redesign-20261104）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const top3 = companies.filter((c) => c.rank <= 3);

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ─── Hero ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#trouble" className="gw-btn gw-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="roller" size={30} className="text-white" />
          症状・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="gw-btn gw-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["業者ランキングを見る", "/ranking/"],
  ["費用・相場を調べる", "/cost/price/"],
  ["ヌリカエの仕組み", "#nurikae"],
  ["塗料の種類から選ぶ", "#paint"],
];

function HeroLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {HERO_LINKS.map(([label, href]) => (
        <li key={href}>
          <Link href={href} className="inline-flex min-h-[40px] items-center gap-1 rounded-[3px] border border-[color:var(--gw-border-strong)] bg-white px-3.5 text-[13px] font-bold text-[color:var(--gw-navy-dark)] hover:border-[color:var(--gw-navy)]">
            {label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const LEAD = "一括見積もりサービス10社を、費用・保証・対応エリアの観点で比較しています。塗料の選び方から助成金まで、外壁塗装に関する情報を掲載しています。";

function Hero() {
  return (
    <section className="relative border-b border-[color:var(--gw-border)] bg-[color:var(--gw-paper)]">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--gw-paint-dark)] md:text-[14px]">2026年最新版・10社を比較</p>
          <h1 className="mt-3 text-[30px] font-bold leading-[1.36] tracking-[0.04em] text-[color:var(--gw-ink)] md:mt-4 md:text-[44px] lg:text-[52px]">
            外壁塗装の業者選びを
            <br />
            <span className="text-[color:var(--gw-navy)]">比較情報</span>で支援します
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-110px] lg:mr-[-190px]">
            <div className="border border-[color:var(--gw-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>

          <p className="mt-6 hidden max-w-[34em] text-[15px] leading-[1.9] text-[color:var(--gw-muted)] md:block">{LEAD}</p>
          <div className="mt-5 hidden md:block">
            <HeroLinks />
          </div>
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-roller-pc.jpg" alt="" width={2000} height={1397} className="absolute inset-0 h-full w-full object-cover object-[60%_50%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--gw-paper)_0%,var(--gw-paper)_6%,color-mix(in_srgb,var(--gw-paper)_82%,transparent)_24%,color-mix(in_srgb,var(--gw-paper)_35%,transparent)_42%,transparent_58%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-roller-sp.jpg" alt="ローラーで壁に青い塗料を塗っているところ" width={1200} height={1000} className="block h-[350px] w-full object-cover object-[62%_50%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--gw-muted)]">{LEAD}</p>
          <div className="mt-4">
            <HeroLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 数字（サイト内のデータから数えた値） ─── */
const TROUBLE_PAGES = troubles.length + 1; // /trouble/[slug]（data/troubles.json）＋ /trouble/chalking/

function TrustBadges() {
  const badges: { k: string; v: string; u: string; desc: string }[] = [
    { k: "比較サービス", v: String(companies.length), u: "社", desc: "一括見積もりサービスを比較" },
    { k: "地域別の業者比較", v: String(areaPageCount), u: "都市", desc: "東京・横浜・名古屋・大阪・福岡" },
    { k: "市区の助成金", v: String(subsidyPageCount), u: "市区", desc: "外壁塗装の助成制度のページ" },
    { k: "劣化症状の解説", v: String(TROUBLE_PAGES), u: "種類", desc: "ひび割れ・剥がれ・雨漏りなど" },
  ];
  return (
    <section className="border-b border-[color:var(--gw-border)] bg-white">
      <div className="gw-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--gw-border)]" : "md:border-r md:border-[color:var(--gw-border)]"} ${i < 2 ? "border-b border-[color:var(--gw-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--gw-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--gw-navy)] md:text-[38px]">{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
                <span className="mt-1.5 block text-[12px] text-[color:var(--gw-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="gw-container pb-3 text-[11px] leading-relaxed text-[color:var(--gw-muted)]">
        ※ 数は当サイトの掲載ページを数えた値です（2026年11月4日時点）。写真はイメージです（Unsplash・撮影 Theme Photos）。
      </p>
    </section>
  );
}

/* ─── 症状・お悩みから探す ─── */
const TROUBLES = [
  { slug: "crack", icon: "crack", title: "ひび割れ", desc: "幅0.3mm・0.5mmが国交省の告示の目安です", href: "/trouble/crack/" },
  { slug: "peeling", icon: "peeling", title: "剥がれ・膨れ", desc: "チョーキングは塗り替え時期の目安です", href: "/trouble/peeling/" },
  { slug: "discoloration", icon: "discoloration", title: "色あせ・変色", desc: "紫外線による劣化が主な原因です", href: "/trouble/discoloration/" },
  { slug: "mold", icon: "mold", title: "カビ・コケ", desc: "北面・日陰で多く発生します", href: "/trouble/mold/" },
  { slug: "rain-leak", icon: "rain-leak", title: "雨漏り", desc: "発見した時点で早急な対処が必要です", href: "/trouble/rain-leak/" },
  { slug: "chalking", icon: "chalking", title: "チョーキング", desc: "外壁を触ると白い粉が付く状態", href: "/trouble/chalking/" },
  { slug: "cost", icon: "cost", title: "費用・相場", desc: "塗料別の目安と費用の内訳", href: "/cost/price/" },
  { slug: "subsidy", icon: "subsidy", title: "助成金", desc: "国と自治体の制度・申請の流れ", href: "/cost/subsidy/" },
];

function TroubleFinder() {
  return (
    <section id="trouble" className="gw-section scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">外壁トラブル・劣化症状から調べる</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {TROUBLES.map((t, i) => (
            <li key={t.slug} data-reveal={String(i % 4)}>
              <Link href={t.href} className="gw-card gw-card-link group flex h-full flex-col items-center px-3 pb-4 pt-6 text-center md:pb-6 md:pt-8">
                <TaskIcon name={t.icon} size={96} className="h-[72px] w-[72px] text-[color:var(--gw-navy)] md:h-[96px] md:w-[96px]" />
                <h3 className="mt-3 text-[16px] font-bold tracking-[0.04em] md:mt-4 md:text-[18px]">{t.title}</h3>
                <p className="mt-1 text-[12px] leading-snug text-[color:var(--gw-muted)] md:text-[13px]">{t.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--gw-paint-dark)] md:text-[13px]">
                  解説を見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── エリアから探す ─── */
function AreaSection() {
  return (
    <section id="area" className="gw-section gw-band scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">エリアから探す</h2>
        <AreaFinder />
      </div>
    </section>
  );
}

/* ─── TOP3 ─── */
function TopRanking() {
  return (
    <section id="ranking" className="gw-section scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">
          外壁塗装業者ランキングTOP3
          <small>編集部おすすめ</small>
        </h2>
        <ol className="grid gap-4">
          {top3.map((company, i) => {
            const rb = getVerifiedRating(company.slug);
            return (
              <li key={company.slug} className={`gw-card p-5 md:p-6 ${company.rank === 1 ? "border-2 border-[color:var(--gw-navy)]" : ""}`} data-reveal={String(i)}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-4">
                    <p className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border-2 border-[color:var(--gw-navy)] text-[color:var(--gw-navy)]">
                      <span className="text-[24px] font-bold leading-none">{company.rank}</span>
                      <span className="mt-0.5 text-[11px] font-bold leading-none">位</span>
                    </p>
                    <div>
                      <h3 className="text-[20px] font-bold">{company.name}</h3>
                      <p className="mt-1 text-[14px] text-[color:var(--gw-muted)]">{company.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center md:ml-auto">
                    {rb && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, k) => (
                            <svg key={k} width="16" height="16" viewBox="0 0 16 16" fill={k < Math.floor(rb.rating) ? "var(--gw-navy)" : "var(--gw-border)"} aria-hidden="true">
                              <path d="M8 0L9.8 5.6H15.6L10.9 9L12.7 14.6L8 11.2L3.3 14.6L5.1 9L0.4 5.6H6.2L8 0Z" />
                            </svg>
                          ))}
                          <span className="text-sm font-bold">{rb.rating}</span>
                          <span className="text-xs text-[color:var(--gw-muted)]">({rb.reviewCount.toLocaleString()}件)</span>
                        </div>
                        <span className="text-[11px] text-[color:var(--gw-muted)]">出典：{rb.sourceLabel}（{rb.fetchedAt}取得）</span>
                      </div>
                    )}
                    <Link href={`/company/${company.slug}/`} className="gw-btn !min-h-[44px] !px-5 !py-2 text-[14px]">
                      詳細を見る
                    </Link>
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {company.features.slice(0, 4).map((feature, k) => (
                    <li key={k} className="border border-[color:var(--gw-border)] bg-[color:var(--gw-paper)] px-2.5 py-1 text-[12px] text-[color:var(--gw-muted)]">
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
        <div className="mt-6">
          <Link href="/ranking/" className="gw-btn gw-btn--ghost w-full sm:w-auto">
            全10社のランキングを見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── ヌリカエの仕組み（旧 FV 内の枠。本文は変えていない） ─── */
function NurikaeBox() {
  const a = "font-bold text-[color:var(--gw-navy)] underline underline-offset-2";
  return (
    <section id="nurikae" className="gw-section gw-band scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">ヌリカエ（ぬりかえ）の仕組み・加盟業者の審査・業者一覧</h2>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
          <div className="gw-card p-5 md:p-6" data-reveal="0">
            <ul className="grid gap-3 text-[14px] leading-[1.85]">
              <li className="gw-dot">運営会社は株式会社Re:Factです。相談と会社紹介は無料で、専門アドバイザーに希望を伝えて紹介を受ける方法（最大4社）と、都道府県や条件で塗装会社を検索して直接問い合わせる方法があります。断りにくい場合は、アドバイザーが塗装会社への断りを代行します。</li>
              <li className="gw-dot">掲載会社は、財務状況・過去の施工実績・クレームの有無などの審査を通った会社としています。公開されている加盟基準は、建設工事保険への加入、会社・代表者に建築関連法規や消費者契約法などによる処罰実績がないこと、自社サイトがあり検索で見つかることで、「加盟基準は他にもございます」と記載されています。</li>
              <li className="gw-dot">業者一覧は、公式サイトの「エリアから探す」「ランキングから探す」から都道府県・市区町村ごとに見られます。エリアのランキングは、直近6か月にヌリカエを通じて契約に至った件数の多い順です。公式トップの掲載社数は5,718社（10月29日更新の表示）です。</li>
            </ul>
            <p className="mt-4 text-[12px] leading-relaxed text-[color:var(--gw-muted)]">
              出典：ヌリカエ公式
              <a href="https://www.nuri-kae.jp/" target="_blank" rel="noopener noreferrer" className="underline">トップ</a>・
              <a href="https://www.nuri-kae.jp/faq" target="_blank" rel="noopener noreferrer" className="underline">よくある質問</a>・
              <a href="https://www.nuri-kae.jp/column/contractors/153/" target="_blank" rel="noopener noreferrer" className="underline">エリア別ランキングの案内</a>
              （2026年10月29日確認）。当サイト「外壁ぬりかえナビ」はヌリカエの公式サイトではありません。
            </p>
          </div>
          <div className="gw-card p-5 md:p-6" data-reveal="1">
            <h3 className="text-[17px] font-bold">ヌリカエのランキングについて</h3>
            <p className="mt-3 text-[14px] leading-[1.85]">
              ヌリカエを運営する株式会社Re:Factは、2026年10月5日に「みんなに選ばれた塗装店ランキング 2026年上半期」を発表しました。2026年4月1日〜9月30日にヌリカエを通じて契約に至った外壁・屋根塗装工事の件数だけで順位を決めており、対象は加盟4,637社です。全国は5位まで、エリア別・都道府県別は3位までが公開され、各社の工事品質・事業規模の優劣を示すものではないと注記されています。当サイトの
              <Link href="/ranking/" className={a}>ランキング</Link>
              は一括見積もりサービス10社の比較です。ヌリカエのエリア別ランキング・業者一覧の見方と評判は
              <Link href="/company/nurikae/" className={a}>ヌリカエのランキング・業者一覧・評判</Link>
              にまとめています。
            </p>
            <p className="mt-4 text-[12px] leading-relaxed text-[color:var(--gw-muted)]">
              出典：株式会社Re:Fact「
              <a href="https://prtimes.jp/main/html/rd/p/000000004.000189102.html" target="_blank" rel="noopener noreferrer" className="underline">ヌリカエ みんなに選ばれた塗装店ランキング 2026年上半期＜全国版＞</a>
              」（PR TIMES・2026年10月5日発表、2026年10月27日確認）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 塗料の種類 ─── */
function PaintTypes() {
  return (
    <section id="paint" className="gw-section scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">塗料の種類から選ぶ</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {paintTypes.map((paint, i) => (
            <li key={paint.slug} data-reveal={String(i)}>
              <Link href={`/paint/${paint.slug}/`} className="gw-card gw-card-link flex h-full flex-col border-t-4 !border-t-[color:var(--gw-paint)] px-4 py-5">
                <h3 className="text-[16px] font-bold md:text-[17px]">{paint.name}</h3>
                {paint.durability && <p className="mt-2 text-[13px] text-[color:var(--gw-muted)]">耐用: {paint.durability}</p>}
                {paint.cost && <p className="mt-0.5 text-[13px] text-[color:var(--gw-muted)]">{paint.cost}</p>}
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] font-bold text-[color:var(--gw-paint-dark)]">
                  詳しく見る
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] leading-relaxed text-[color:var(--gw-muted)]">
          耐用年数と平米単価の目安は、外壁塗装の窓口「
          <a href="https://gaiheki-madoguchi.com/articles/2693" target="_blank" rel="noopener noreferrer" className="text-[color:var(--gw-navy)] underline">2026年外壁塗装の価格表</a>
          」の塗料別の価格表によります（税込・税別の記載なし。2026年10月25日確認）。セラミック塗料の耐用年数と単価は、公式の情報で確認できないため記載していません。
        </p>
        <Link href="/paint/comparison/" className="mt-4 inline-flex min-h-[44px] items-center gap-1 text-[14px] font-bold text-[color:var(--gw-navy)]">
          4種類の比較一覧
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* ─── 費用相場 ─── */
function CostSection() {
  return (
    <section className="gw-section gw-band">
      <div className="gw-container">
        <h2 className="gw-h2">外壁塗装の費用相場</h2>
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="max-w-[46em] text-[14px] leading-[1.9] text-[color:var(--gw-muted)]">
            外壁塗装の費用は、塗料の種類・外壁面積・劣化状況によって変わります。塗料別の目安と費用の内訳は、出典とともに費用ページにまとめています。金額は業者の見積もりで確認してください。
          </p>
          <Link href="/cost/price/" className="gw-btn">
            費用の詳細
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── 劣化チェックリスト ─── */
function Checklist() {
  return (
    <section className="gw-section">
      <div className="gw-container">
        <h2 className="gw-h2">
          外壁の劣化状況の確認項目
          <small>劣化診断チェックリスト</small>
        </h2>
        <p className="-mt-2 mb-5 text-[14px] text-[color:var(--gw-muted)]">1つでも当てはまる場合は、早めの診断・見積もりをおすすめします</p>
        <ul className="gw-card divide-y divide-[color:var(--gw-border)]">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3 px-4 py-4 md:px-6" data-reveal={String(index % 4)}>
              <span className="mt-0.5 h-5 w-5 shrink-0 border-2 border-[color:var(--gw-border-strong)] bg-white" aria-hidden="true" />
              <span className="text-[14px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-4 border border-[color:var(--gw-navy)] bg-[color:var(--gw-wash)] p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <p className="text-[15px] font-bold text-[color:var(--gw-navy-dark)]">1つでも当てはまる場合は、無料見積もりのご利用をおすすめします</p>
          <Link href="/ranking/" className="gw-btn shrink-0">
            無料で見積もりを依頼する
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function Faq() {
  return (
    <section id="faq" className="gw-section gw-band scroll-mt-20">
      <div className="gw-container">
        <h2 className="gw-h2">よくある質問</h2>
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <details key={index} className="gw-acc gw-card group overflow-hidden" data-reveal={String(index % 3)}>
              <summary className="flex min-h-[60px] items-start justify-between gap-4 px-4 py-4 text-[15px] font-bold md:px-6">
                <span className="flex items-start gap-3">
                  <span className="shrink-0 text-[color:var(--gw-navy)]">Q</span>
                  <span>{faq.q}</span>
                </span>
                <svg className="gw-chev mt-1 h-4 w-4 shrink-0 text-[color:var(--gw-navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="flex gap-3 border-t border-[color:var(--gw-border)] px-4 py-4 md:px-6">
                <span className="shrink-0 font-bold text-[color:var(--gw-paint-dark)]">A</span>
                <p className="text-[14px] leading-[1.85] text-[color:var(--gw-muted)]">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="gw-page">
        <ScrollReveal />
        <Hero />
        <TrustBadges />
        <TroubleFinder />
        <AreaSection />
        <TopRanking />
        <NurikaeBox />
        <PaintTypes />
        <CostSection />
        <Checklist />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
