import Awards from "@/components/Home/Awards";
import Differences from "@/components/Home/Differences";
import PricingSection from "@/components/Home/PricingSection";

export default function Home() {
  return (
    <div>
      <PricingSection />
      <Awards />
      <Differences />
    </div>
  );
}
