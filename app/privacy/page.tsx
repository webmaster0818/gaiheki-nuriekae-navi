import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜外壁ぬりかえナビ",
  description: "外壁ぬりかえナビのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-text)]">プライバシーポリシー</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">最終更新日：2026年1月1日</p>

        <div className="mt-6 space-y-6 text-[var(--color-text-sub)] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">個人情報の収集について</h2>
            <p className="text-sm">
              株式会社MediaX（以下「当社」）は、外壁ぬりかえナビ（以下「本サイト」）において、お問い合わせフォーム等を通じて個人情報を取得する場合があります。取得した個人情報はお問い合わせへの回答等、必要な範囲でのみ使用します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">アクセス解析ツールについて</h2>
            <p className="text-sm">
              本サイトでは、Googleアナリティクスを使用してアクセス解析を行っています。Googleアナリティクスはクッキー（Cookie）を使用してデータを収集しますが、個人を特定する情報は含まれません。収集されたデータはGoogleのプライバシーポリシーに基づいて管理されます。Cookieを無効にすることでデータ収集を拒否することができます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">アフィリエイト広告について</h2>
            <p className="text-sm">
              本サイトはアフィリエイトプログラムを利用しています。アフィリエイトプログラムでは、リンク先での行動を追跡するためにCookieが使用される場合があります。これらのCookieは、アフィリエイト会社のプライバシーポリシーに従って管理されます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">個人情報の第三者提供</h2>
            <p className="text-sm">
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">個人情報の開示・訂正・削除</h2>
            <p className="text-sm">
              ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Cookieの使用について</h2>
            <p className="text-sm">
              本サイトはCookieを使用することがあります。Cookieはブラウザの設定で無効にすることができますが、一部機能が制限される場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">プライバシーポリシーの変更</h2>
            <p className="text-sm">
              本ポリシーは必要に応じて改定されることがあります。改定後のポリシーは本サイトに掲載した時点から効力を発します。
            </p>
          </section>

          <div className="mt-8 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
            <p className="font-medium text-[var(--color-text)] mb-1">運営者情報</p>
            <p className="text-sm">株式会社MediaX</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
