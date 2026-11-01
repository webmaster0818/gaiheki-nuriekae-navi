import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OG_DEFAULT } from "@/lib/og";
import PaintDocPage, { type PaintDoc } from "@/components/PaintDocPage";
import productsData from "@/data/paint-products.json";

type Product = PaintDoc & { name: string; makerHub?: { href: string; label: string } };
const products = productsData as Product[];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  const url = `https://gaiheki-nuriekae-navi.com/paint/product/${p.slug}/`;
  return {
    title: p.seoTitle,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.seoTitle, description: p.description, url, type: "article", images: [OG_DEFAULT] },
    twitter: { card: "summary_large_image", images: [OG_DEFAULT] },
  };
}

export default async function PaintProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return notFound();
  const crumbs = [
    { label: "塗料ガイド", href: "/paint/comparison/" },
    ...(p.makerHub ? [{ label: p.makerHub.label, href: p.makerHub.href }] : []),
    { label: p.name },
  ];
  return <PaintDocPage doc={p} crumbs={crumbs} />;
}
