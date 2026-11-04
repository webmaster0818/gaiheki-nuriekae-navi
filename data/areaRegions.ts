// TOP「エリアから探す」用の一覧。当サイトに実在するページだけを並べる（2026-11-04 時点）。
// - 業者比較：app/area/[city]（data/areas.json の5都市）
// - 塗装助成：app/cost/subsidy/[slug]（data/subsidies-wards.json の19市区）と、23区・政令指定都市の一覧ページ
import areas from "./areas.json";
import wards from "./subsidies-wards.json";

export type AreaLink = { href: string; label: string; kind: "業者比較" | "塗装助成" };
export type Prefecture = { name: string; links: AreaLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

const areaBySlug = new Map((areas as { slug: string; city: string }[]).map((a) => [a.slug, a]));
const wardBySlug = new Map((wards as { slug: string; ward: string }[]).map((w) => [w.slug, w]));

const area = (slug: string): AreaLink => {
  const a = areaBySlug.get(slug);
  if (!a) throw new Error(`areas.json に ${slug} がありません`);
  return { href: `/area/${slug}/`, label: a.city, kind: "業者比較" };
};
const ward = (slug: string): AreaLink => {
  const w = wardBySlug.get(slug);
  if (!w) throw new Error(`subsidies-wards.json に ${slug} がありません`);
  return { href: `/cost/subsidy/${slug}/`, label: w.ward, kind: "塗装助成" };
};

export const tokyo = {
  top: area("tokyo"),
  list23: { href: "/cost/subsidy/tokyo-23ku/", label: "東京23区の外壁・屋根塗装の助成金一覧" },
  wards: ["chiyoda-ku", "minato-ku", "shinjuku-ku", "bunkyo-ku", "sumida-ku", "koto-ku", "shinagawa-ku", "ota-ku", "setagaya-ku", "suginami-ku", "adachi-ku", "katsushika-ku"].map(ward),
  cities: [ward("hachioji-shi")],
};

export const seireiList = { href: "/cost/subsidy/seirei-shi/", label: "政令指定都市20市の外壁塗装の助成金一覧" };

export const regions: Region[] = [
  {
    name: "関東（東京都を除く）",
    prefectures: [
      { name: "神奈川県", links: [area("yokohama")] },
      { name: "埼玉県", links: [ward("kawaguchi-shi"), ward("kawagoe-shi"), ward("koshigaya-shi")] },
      { name: "群馬県", links: [ward("maebashi-shi"), ward("takasaki-shi")] },
    ],
  },
  { name: "中部", prefectures: [{ name: "愛知県", links: [area("nagoya")] }] },
  { name: "近畿", prefectures: [{ name: "大阪府", links: [area("osaka")] }] },
  {
    name: "九州",
    prefectures: [
      { name: "福岡県", links: [area("fukuoka")] },
      { name: "長崎県", links: [ward("nagasaki-shi")] },
    ],
  },
];

// 上の一覧に載せていない市区（データに後から増えたもの）は「その他」にまとめて必ず出す
const listed = new Set([tokyo.top, ...tokyo.wards, ...tokyo.cities, ...regions.flatMap((r) => r.prefectures.flatMap((p) => p.links))].map((l) => l.href));
const rest: AreaLink[] = [
  ...[...areaBySlug.keys()].map(area),
  ...[...wardBySlug.keys()].map(ward),
].filter((l) => !listed.has(l.href));
if (rest.length) regions.push({ name: "その他", prefectures: [{ name: "その他の市区", links: rest }] });

const allLinks = [tokyo.top, ...tokyo.wards, ...tokyo.cities, ...regions.flatMap((r) => r.prefectures.flatMap((p) => p.links))];
export const areaPageCount = allLinks.filter((l) => l.kind === "業者比較").length;
export const subsidyPageCount = allLinks.filter((l) => l.kind === "塗装助成").length;
