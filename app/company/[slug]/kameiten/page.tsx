import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VendorShopPage from "@/components/VendorShopPage";
import shops from "@/data/vendor-shops.json";

const items = shops.filter((s) => s.path === "kameiten");
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return items.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = items.find((s) => s.slug === slug);
  if (!v) return {};
  return { title: v.title, description: v.description, alternates: { canonical: `/company/${v.slug}/kameiten/` } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const v = items.find((s) => s.slug === slug);
  if (!v) return notFound();
  return <VendorShopPage v={v} />;
}
