import { topicMetadata, TopicDocPage } from "@/lib/topicDocs";

const PATH = "/material/metal/";

export const metadata = topicMetadata(PATH);

export default function Page() {
  return <TopicDocPage path={PATH} />;
}
