import type { Metadata } from "next";
import SubsidyListPage from "@/components/SubsidyListPage";
import data from "@/data/subsidies-tokyo23.json";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/tokyo-23ku/" },
  title: data.title,
  description: data.description,
};

export default function Tokyo23kuSubsidyPage() {
  return (
    <SubsidyListPage
      breadcrumbLabel="東京23区の塗装助成"
      h1={data.h1}
      lead={data.lead}
      checkedAt={data.checkedAt}
      groups={data.groups}
      rows={data.rows}
      pendingNote={data.pendingNote || undefined}
      notes={data.notes}
      faqs={data.faqs}
    />
  );
}
