import Awards from "@/components/Home/Awards";
import Differences from "@/components/Home/Differences";
import EnterprisePlan from "@/components/Home/EnterprisePlan";
import FAQ from "@/components/Home/FAQ";
import PricingSection from "@/components/Home/PricingSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <PricingSection />
      <Awards />
      <Differences />
      <EnterprisePlan />
      <FAQ />
      <Footer />
    </>
  );
}
