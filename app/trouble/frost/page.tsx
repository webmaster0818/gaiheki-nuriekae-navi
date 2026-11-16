import { topicMetadata, TopicDocPage } from "@/lib/topicDocs";

const PATH = "/trouble/frost/";

export const metadata = topicMetadata(PATH);

export default function Page() {
  return <TopicDocPage path={PATH} />;
}
