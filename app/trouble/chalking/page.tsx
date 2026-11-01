import { topicMetadata, TopicDocPage } from "@/lib/topicDocs";

const PATH = "/trouble/chalking/";

export const metadata = topicMetadata(PATH);

export default function Page() {
  return <TopicDocPage path={PATH} />;
}
