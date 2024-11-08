import FlowConverse from "@/components/flowConverse/FlowConverse";
import GrowToghether from "@/components/growTogether/GrowTogether,";
import Layout from "@/components/layout/layout";
import YourUsers from "@/components/yourUsers/YourUsers";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <FlowConverse/>
      <GrowToghether/>
      <YourUsers/>
    </Layout>
  );
}
