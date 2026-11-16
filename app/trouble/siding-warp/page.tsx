import { topicMetadata, TopicDocPage } from "@/lib/topicDocs";

const PATH = "/trouble/siding-warp/";

export const metadata = topicMetadata(PATH);

export default function Page() {
  return <TopicDocPage path={PATH} />;
}
