import { regions, tokyo, seireiList, areaPageCount, subsidyPageCount, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="gw-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((x) => (
        <li key={x.href}>
          <a
            href={x.href}
            className="flex min-h-[52px] items-center justify-between gap-2 rounded-[3px] border border-[color:var(--gw-border)] bg-white px-3.5 py-1.5 transition-colors hover:border-[color:var(--gw-navy)] hover:bg-[color:var(--gw-wash)]"
          >
            <span className="flex flex-col leading-tight">
              <span className="text-[14px] font-bold text-[color:var(--gw-ink)]">{x.label}</span>
              <span className="mt-0.5 text-[11px] text-[color:var(--gw-muted)]">{x.kind}</span>
            </span>
            <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--gw-paint-dark)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

const summaryCls = "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。東京都は最上部の別枠（開いた状態）、地方はデフォルトで折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] leading-relaxed text-[color:var(--gw-muted)]">
        地域別の業者比較が{areaPageCount}都市、市区の外壁塗装の助成金のページが{subsidyPageCount}市区あります。地域名を押すと一覧が開きます。
      </p>

      <details open className="gw-acc group mb-4 overflow-hidden rounded-[3px] border-2 border-[color:var(--gw-navy)] bg-white" data-reveal="0">
        <summary className={`${summaryCls} bg-[color:var(--gw-navy)] text-white`}>
          <span className="flex items-baseline gap-3">
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
            <span className="text-[12px] text-white/80">業者比較・23区と市の助成金</span>
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold text-white/85">
            {1 + tokyo.wards.length + tokyo.cities.length}ページ
            <Chevron />
          </span>
        </summary>
        <div className="grid gap-5 p-4 md:p-6">
          <div className="grid gap-2.5 sm:grid-cols-2">
            <a href={tokyo.top.href} className="gw-btn w-full">東京の外壁塗装業者比較を見る</a>
            <a href={tokyo.list23.href} className="gw-btn gw-btn--ghost w-full">{tokyo.list23.label}</a>
          </div>
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[color:var(--gw-muted)]">23区の助成金（区ごとのページ）</p>
            <Tiles items={tokyo.wards} />
          </div>
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[color:var(--gw-muted)]">市の助成金</p>
            <Tiles items={tokyo.cities} />
          </div>
          <p className="text-[12px] leading-relaxed text-[color:var(--gw-muted)]">
            区ごとのページがない区は、23区の一覧で制度の有無を確認できます。
          </p>
        </div>
      </details>

      <div className="grid gap-3">
        {regions.map((r, i) => {
          const n = r.prefectures.reduce((m, p) => m + p.links.length, 0);
          return (
            <details key={r.name} className="gw-acc group overflow-hidden rounded-[3px] border border-[color:var(--gw-border-strong)] bg-white" data-reveal={String(i + 1)}>
              <summary className={`${summaryCls} bg-white group-open:border-b group-open:border-[color:var(--gw-border)]`}>
                <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--gw-navy-dark)]">{r.name}</span>
                <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--gw-muted)]">
                  {n}ページ
                  <span className="text-[color:var(--gw-navy)]"><Chevron /></span>
                </span>
              </summary>
              <div className="divide-y divide-[color:var(--gw-border)] bg-[color:var(--gw-paper)]">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold md:mb-0 md:flex md:min-h-[52px] md:items-center">{p.name}</p>
                    <Tiles items={p.links} />
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>

      <a href={seireiList.href} className="gw-card gw-card-link mt-4 flex min-h-[56px] items-center justify-between px-4 text-[14px] font-bold md:px-5" data-reveal="2">
        {seireiList.label}
        <svg className="h-4 w-4 text-[color:var(--gw-navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
      </a>
    </div>
  );
}
