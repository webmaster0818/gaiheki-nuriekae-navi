import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OG_DEFAULT } from "@/lib/og";
import PaintDocPage, { type PaintDoc } from "@/components/PaintDocPage";
import makersData from "@/data/paint-makers.json";

type Maker = PaintDoc & { crumb: string };
const makers = makersData as Maker[];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return makers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = makers.find((x) => x.slug === slug);
  if (!m) return {};
  const url = `https://gaiheki-nuriekae-navi.com/paint/maker/${m.slug}/`;
  return {
    title: m.seoTitle,
    description: m.description,
    alternates: { canonical: url },
    openGraph: { title: m.seoTitle, description: m.description, url, type: "article", images: [OG_DEFAULT] },
    twitter: { card: "summary_large_image", images: [OG_DEFAULT] },
  };
}

export default async function PaintMakerPage({ params }: Props) {
  const { slug } = await params;
  const m = makers.find((x) => x.slug === slug);
  if (!m) return notFound();
  return <PaintDocPage doc={m} crumbs={[{ label: "塗料ガイド", href: "/paint/comparison/" }, { label: m.crumb }]} />;
}
