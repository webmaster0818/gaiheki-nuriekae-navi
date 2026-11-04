// 外壁ぬりかえナビのロゴマーク・症状別アイコン（すべて自作の SVG。48×48 のグリッド）。
// アイコンは太線＋一部を塗る系統（solid: true を塗る）。色は currentColor の単色。
// ロゴだけ2色（GW_NAVY＝家、GW_PAINT＝塗りたての帯）。

export type Shape = { d: string; solid?: boolean; thin?: boolean };
export type IconDef = { key: string; label: string; shapes: Shape[] };

const WALL = "M7 9H41V40H7Z";

export const TASK_ICONS: IconDef[] = [
  {
    key: "crack",
    label: "ひび割れ",
    shapes: [
      { d: WALL },
      { d: "M25 9L20.5 17.5L27 23L21 31L24.5 40" },
      { d: "M27 23L33.5 26.5M21 31L15 33", thin: true },
    ],
  },
  {
    key: "peeling",
    label: "剥がれ・膨れ",
    shapes: [
      { d: "M7 9H41V40H7Z" },
      { d: "M26 9H41V24C36.5 25.5 31.5 22.5 29.5 18C28 15 26.5 12 26 9Z", solid: true },
      { d: "M29.5 18C26.5 18.5 24.5 21 25 24C28 24.5 30.5 22 29.5 18Z" },
      { d: "M13 31.5C13 29 15 27 17.5 27C20 27 22 29 22 31.5C22 34 20 35.5 17.5 35.5C15 35.5 13 34 13 31.5Z", thin: true },
    ],
  },
  {
    key: "discoloration",
    label: "色あせ・変色",
    shapes: [
      { d: "M9 13.5C9 10.5 11.5 8 14.5 8C17.5 8 20 10.5 20 13.5C20 16.5 17.5 19 14.5 19C11.5 19 9 16.5 9 13.5Z", solid: true },
      { d: "M14.5 3V4.5M4 13.5H5.5M7 6L8 7M22 6L21 7M7 21L8 20", thin: true },
      { d: "M18 24H43V42H18Z" },
      { d: "M18 32L28 24M18 40.5L35 24M26 42L43 26M35 42L43 34.5", thin: true },
    ],
  },
  {
    key: "mold",
    label: "カビ・コケ",
    shapes: [
      { d: WALL },
      { d: "M11 40C11 35 14 32 18 32C20.5 32 22.5 33.5 23.5 35.5C24.5 33 27 31.5 30 31.5C34 31.5 37 35 37 40Z", solid: true },
      { d: "M15 25.5H15.2M21 22H21.2M30 24.5H30.2M35 20H35.2M26 17H26.2" },
    ],
  },
  {
    key: "rain-leak",
    label: "雨漏り",
    shapes: [
      { d: "M4 22L24 6L44 22" },
      { d: "M9 18.5V42H39V18.5" },
      { d: "M24 22C24 22 17.5 29.5 17.5 33.5C17.5 37 20.5 39.5 24 39.5C27.5 39.5 30.5 37 30.5 33.5C30.5 29.5 24 22 24 22Z", solid: true },
    ],
  },
  {
    key: "chalking",
    label: "チョーキング",
    shapes: [
      { d: "M5 6H19V42H5Z" },
      { d: "M44 22H29C26.8 22 25 23.8 25 26C25 28.2 26.8 30 29 30H44", solid: true },
      { d: "M24.5 19H24.7M22 23.5H22.2M22 29H22.2M24.5 33H24.7M28 35.5H28.2" },
      { d: "M36 22V30", thin: true },
    ],
  },
  {
    key: "cost",
    label: "費用・相場",
    shapes: [
      { d: "M11 5H31L38 12V43H11Z" },
      { d: "M31 5V12H38", thin: true },
      { d: "M18.5 19L24.5 26.5L30.5 19M24.5 26.5V37M19 29H30M19 33.5H30" },
    ],
  },
  {
    key: "subsidy",
    label: "助成金",
    shapes: [
      { d: "M6 21L24 7L42 21" },
      { d: "M10 18V41H38V18" },
      { d: "M15.5 30.5C15.5 25.8 19.3 22 24 22C28.7 22 32.5 25.8 32.5 30.5C32.5 35.2 28.7 39 24 39C19.3 39 15.5 35.2 15.5 30.5Z" },
      { d: "M20.5 26L24 30.5L27.5 26M24 30.5V35.5M21 31.5H27M21 34H27", thin: true },
    ],
  },
  {
    key: "roller",
    label: "塗装",
    shapes: [
      { d: "M6 7H33V17H6Z", solid: true },
      { d: "M33 12H40V24H22V30" },
      { d: "M19.5 30H24.5V44H19.5Z", solid: true },
    ],
  },
];

export const GW_NAVY = "#1F3D5C";
export const GW_PAINT = "#6FA4D2";

/** ロゴマーク「塗り替え中の家」：家のシルエットに、ローラーで塗った帯が1本入る形。16px でも家と帯が分かる */
export function logoSvg(a: string, b: string, cut = "#FFFFFF"): string {
  return (
    `<path d="M24 4L45 21V44H3V21Z" fill="${a}"/>` +
    `<path d="M3 26H34V34H3Z" fill="${b}"/>` +
    `<path d="M34 24H40V36H34Z" fill="${b}"/>` +
    `<path d="M20 36H28V44H20Z" fill="${cut}"/>`
  );
}

/** アイコン1つ分の SVG 内側（<svg> 要素の中身）を返す */
export function iconInner(def: IconDef): string {
  return def.shapes
    .map((s) => {
      const fill = s.solid ? "currentColor" : "none";
      const w = s.thin ? 2 : 3;
      return `<path d="${s.d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    })
    .join("");
}
