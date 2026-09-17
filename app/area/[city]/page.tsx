import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import areasData from "@/data/areas.json";
import reviewsData from "@/data/reviews.json";

type AreaEntry = {
  slug: string;
  city: string;
  cityFormal: string;
  angleLabel: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  premise: { h: string; b: string }[];
  focusHeading: string;
  focusIntro: string;
  focus: { h: string; b: string }[];
  checkpointsHeading: string;
  checkpoints: { h: string; b: string }[];
  picks: string[];
  pickReasons: Record<string, string>;
  faqs: { q: string; a: string }[];
  unknownNote: string;
};

type ReviewEntry = {
  slug: string;
  companyName: string;
  basicInfo: { label: string; value: string }[];
};

const areas = areasData as unknown as AreaEntry[];
const reviews = reviewsData as unknown as ReviewEntry[];

const SITE_ORIGIN = "https://gaiheki-nuriekae-navi.com";
const UPDATED_AT = "2026年9月17日";

/** 公式サイトの稼働を確認できない「外壁塗装の案内所」は比較対象から除外する */
const EXCLUDED_SLUGS = ["annaijo"];

function pickLabel(entry: ReviewEntry | undefined, labels: string[]): string {
  if (!entry) return "";
  for (const label of labels) {
    const hit = entry.basicInfo.find((i) => i.label === label);
    if (hit) return hit.value;
  }
  return "";
}

function findReview(slug: string): ReviewEntry | undefined {
  return reviews.find((r) => r.slug === slug);
}

const listedServices = reviews.filter((r) => !EXCLUDED_SLUGS.includes(r.slug));

export async function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) return {};
  const url = `${SITE_ORIGIN}/area/${area.slug}/`;
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: url },
    openGraph: {
      title: area.title,
      description: area.description,
      url,
      type: "article",
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) return notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  const toc = [
    { id: "premise", label: `${area.city}で外壁塗装を考えるときの前提` },
    { id: "focus", label: area.focusHeading },
    { id: "services", label: `${area.city}で使える見積もり比較サービス一覧` },
    { id: "picks", label: "この視点で参照しやすいサービス" },
    { id: "checkpoints", label: area.checkpointsHeading },
    { id: "cost", label: "費用の考え方と確認できていないこと" },
    { id: "faq", label: "よくある質問" },
    { id: "other-areas", label: "他のエリアから探す" },
  ];

  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "業者ランキング", href: "/ranking/" },
            { label: `${area.city}の外壁塗装業者比較` },
          ]}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
          {area.h1}
        </h1>
        <p className="mt-2 text-xs text-[var(--color-text-muted)]">
          最終更新：{UPDATED_AT}／{area.cityFormal}／切り口：{area.angleLabel}
        </p>
        <p className="mt-3 text-[var(--color-text-sub)] leading-relaxed">{area.lead}</p>

        <div className="mt-4 p-3 bg-[var(--color-secondary-light)] border border-[var(--color-secondary)] rounded-lg text-xs text-[var(--color-text-sub)]">
          ※本ページはアフィリエイト広告を含みます（PR）。掲載しているサービスの情報は各社の公表内容にもとづいています。当サイトは施工を行っていないため、個別の建物について工事の可否や金額を判断することはできません。
        </div>

        {/* 目次 */}
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

        {/* 前提 */}
        <section id="premise" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
            {area.city}で外壁塗装を考えるときの前提
          </h2>
          <div className="space-y-4">
            {area.premise.map((p) => (
              <div key={p.h} className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2">{p.h}</h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 切り口 */}
        <section id="focus" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">{area.focusHeading}</h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">{area.focusIntro}</p>
          <div className="space-y-4">
            {area.focus.map((f, i) => (
              <div key={f.h} className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-bold text-[var(--color-text)] mb-2 flex items-start gap-2">
                  <span className="mono text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.h}</span>
                </h3>
                <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* サービス一覧 */}
        <section id="services" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">
            {area.city}で使える見積もり比較サービス一覧
          </h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">
            当サイトが掲載している見積もり比較サービスのうち、公式サイトの稼働を確認できたものを一覧にしました。いずれも全国対応と公表しているため、{area.cityFormal}も対象に含まれる想定ですが、市区町村単位の加盟状況は公表されていません。表の内容は各社の公表情報にもとづく記載です。
          </p>
          <div className="table-wrapper rounded-xl border border-[var(--color-border)] overflow-hidden">
            <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th>サービス名</th>
                  <th>運営会社</th>
                  <th>公表されている対応エリア</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {listedServices.map((s) => (
                  <tr key={s.slug}>
                    <td className="font-medium">{s.companyName}</td>
                    <td className="text-sm">{pickLabel(s, ["運営", "運営本部"])}</td>
                    <td className="text-sm">{pickLabel(s, ["対応エリア"])}</td>
                    <td className="text-sm">
                      <Link href={`/review/${s.slug}/`} className="text-[var(--color-primary)] hover:underline">
                        口コミを見る
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            ※出典：各社公式サイトの公表情報（各サービスの口コミ・評判ページに出典を記載しています）。当サイトが掲載しているサービスのうち「外壁塗装の案内所」は、2026年6月時点で公式サイトの稼働を確認できず提供状況が不明なため、本ページの比較対象には含めていません。
          </p>
        </section>

        {/* ピックアップ */}
        <section id="picks" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">
            この視点で参照しやすいサービス
          </h2>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed mb-4">
            「{area.angleLabel}」という観点から見たときに、公表されている仕組みが参考になるサービスを挙げます。優劣の評価ではなく、公表内容と観点の対応を示したものです。
          </p>
          <div className="space-y-4">
            {area.picks.map((slug) => {
              const entry = findReview(slug);
              if (!entry) return null;
              return (
                <div key={slug} className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
                  <h3 className="font-bold text-[var(--color-text)] mb-2">{entry.companyName}</h3>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
                    {area.pickReasons[slug] ?? ""}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm">
                    <Link href={`/review/${slug}/`} className="text-[var(--color-primary)] hover:underline">
                      {entry.companyName}の口コミ・評判
                    </Link>
                    <Link href={`/company/${slug}/`} className="text-[var(--color-primary)] hover:underline">
                      サービスの詳細
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checkpoints" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">{area.checkpointsHeading}</h2>
          <ul className="space-y-3">
            {area.checkpoints.map((c) => (
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

        {/* 費用と未確認事項 */}
        <section id="cost" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">費用の考え方と確認できていないこと</h2>
          <div className="p-5 bg-white border border-[var(--color-border)] rounded-xl">
            <p className="text-sm text-[var(--color-text-sub)] leading-relaxed">
              当サイトでは{area.cityFormal}に限定した塗装単価や相場を独自に調査していないため、地域別の金額は掲載していません。塗料別・面積別の一般的な目安と費用の内訳は
              <Link href="/cost/price/" className="text-[var(--color-primary)] hover:underline mx-1">費用・相場のページ</Link>
              にまとめています。実際の金額は、現地調査を受けたうえで各社の見積もりで確認してください。
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
              助成金・補助金は自治体ごとに内容が異なり、随時変更されます。制度の一般的な仕組みと申請の流れは
              <Link href="/cost/subsidy/" className="text-[var(--color-primary)] hover:underline mx-1">助成金・補助金ガイド</Link>
              で解説していますが、{area.cityFormal}の個別の制度については当サイトで確認していません。最新の内容は自治体の公式サイトでご確認ください。
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">{area.unknownNote}</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">よくある質問</h2>
          <div className="space-y-4">
            {area.faqs.map((faq, index) => (
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

        {/* 他のエリア */}
        <section id="other-areas" className="mt-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">他のエリアから探す</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/area/${a.slug}/`}
                className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors"
              >
                <span className="block font-bold text-[var(--color-text)]">{a.city}の外壁塗装業者比較</span>
                <span className="block mt-1 text-xs text-[var(--color-text-sub)]">{a.angleLabel}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">あわせて読みたいガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/scaffold/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装の足場は必要か</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">見積書での確認点と法令上の位置づけ</span>
            </Link>
            <Link href="/guide/construction-flow/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">工事の流れと生活への影響</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">着工前の準備から引き渡しまで</span>
            </Link>
            <Link href="/guide/door-to-door/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">訪問営業への対処法</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">契約前の確認とクーリング・オフ</span>
            </Link>
            <Link href="/ranking/" className="block p-4 bg-white border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
              <span className="block font-bold text-[var(--color-text)]">外壁塗装業者ランキング</span>
              <span className="block mt-1 text-xs text-[var(--color-text-sub)]">掲載サービスの比較一覧</span>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
