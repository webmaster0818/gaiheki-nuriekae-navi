import type { Metadata } from "next";
import SubsidyListPage from "@/components/SubsidyListPage";
import data from "@/data/subsidies-seirei.json";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/seirei-shi/" },
  title: data.title,
  description: data.description,
};

export default function SeireiShiSubsidyPage() {
  return (
    <SubsidyListPage
      breadcrumbLabel="政令指定都市20市の塗装助成"
      h1={data.h1}
      lead={data.lead}
      checkedAt={data.checkedAt}
      groups={data.groups}
      rows={data.rows}
      notes={data.notes}
      faqs={data.faqs}
    />
  );
}
