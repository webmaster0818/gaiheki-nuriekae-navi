import type { Metadata } from "next";
import { OG_DEFAULT } from "@/lib/og";
import PaintDocPage, { type PaintDoc } from "@/components/PaintDocPage";
import topicData from "@/data/topic-docs.json";

// 樹脂・機能別（/paint/radical/ など）、症状（/trouble/chalking/）、外壁材（/material/）の解説ページ。
// 本文は data/topic-docs.json。メーカー公式ページ・業界団体・公的機関の記載のみを使い、出典は節ごとに表示する。

export type TopicDoc = PaintDoc & {
  path: string;
  hub: "paint" | "trouble" | "material";
  shortTitle: string;
  crumbs: { label: string; href?: string }[];
};

export const topicDocs = topicData as TopicDoc[];

export function getTopicDoc(path: string): TopicDoc {
  const d = topicDocs.find((x) => x.path === path);
  if (!d) throw new Error(`topic doc not found: ${path}`);
  return d;
}

export function topicMetadata(path: string): Metadata {
  const d = getTopicDoc(path);
  const url = `https://gaiheki-nuriekae-navi.com${d.path}`;
  return {
    title: d.seoTitle,
    description: d.description,
    alternates: { canonical: url },
    openGraph: { title: d.seoTitle, description: d.description, url, type: "article", images: [OG_DEFAULT] },
    twitter: { card: "summary_large_image", images: [OG_DEFAULT] },
  };
}

export function TopicDocPage({ path }: { path: string }) {
  const d = getTopicDoc(path);
  return <PaintDocPage doc={d} crumbs={d.crumbs} />;
}
