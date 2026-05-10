import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="py-2">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-[var(--color-text-muted)]">
        <li>
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
            ホーム
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--color-primary)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-text-sub)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
