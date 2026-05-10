import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約｜外壁ぬりかえナビ",
  description: "外壁ぬりかえナビの利用規約です。",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "利用規約" }]} />
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-text)]">利用規約</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">最終更新日：2026年1月1日</p>

        <div className="mt-6 prose prose-sm max-w-none space-y-6 text-[var(--color-text-sub)] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第1条（適用）</h2>
            <p>
              本利用規約（以下「本規約」）は、株式会社MediaX（以下「当社」）が運営する「外壁ぬりかえナビ」（以下「本サイト」）の利用に関する条件を定めるものです。本サイトをご利用の際は、本規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第2条（コンテンツの著作権）</h2>
            <p>
              本サイトに掲載されているすべてのコンテンツ（文章・画像・データ等）の著作権は、当社または正当な権利を有する第三者に帰属します。無断転載・複製・改変を禁じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第3条（免責事項）</h2>
            <p>
              本サイトの情報は、外壁塗装に関する一般的な情報提供を目的としており、特定の工事・業者の選択を保証するものではありません。掲載情報の正確性・完全性・最新性については万全を期しておりますが、当社はその正確性を保証しません。本サイトの情報を参考にした結果生じた損害について、当社は一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第4条（広告・アフィリエイトについて）</h2>
            <p>
              本サイトは、アフィリエイトプログラムによる広告収入を収益源としています。掲載されている一部のリンクはアフィリエイトリンクであり、ユーザーがリンクを経由して申し込みを行った場合、当社に報酬が発生することがあります。ただし、広告収入の有無は掲載コンテンツの内容・評価に影響を与えません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第5条（外部リンク）</h2>
            <p>
              本サイトから外部サイトへのリンクを掲載していますが、外部サイトの内容・サービスについて当社は責任を負いません。外部サイトの利用は、各サイトの利用規約に従ってください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第6条（規約の変更）</h2>
            <p>
              当社は、必要と判断した場合、本規約を変更することがあります。変更後の規約は本サイトに掲載した時点から効力を発します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">第7条（準拠法・管轄）</h2>
            <p>
              本規約の解釈・適用は日本法に準拠します。本サイトに関するトラブルは、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
            <p className="font-medium text-[var(--color-text)] mb-1">運営者情報</p>
            <p>株式会社MediaX</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">お問い合わせはメールにてお受けしています。</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
