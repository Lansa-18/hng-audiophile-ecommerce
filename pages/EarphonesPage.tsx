import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import HeroSection from "@/components/HeroSection";
import ProductItemSection from "@/components/ProductItemSection";

export default function EarphonesPage() {
  return (
    <>
      <HeroSection />

      <main className="bg-brand-lighter text-brand-black px-container border-red-500 py-40">
        <article className="mb-50 space-y-40">
          <ProductItemSection
            imgSrc="/my_assets/yx1-earphones.png"
            productTitle="YX1 WIRELESS EARPHONES"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            headTitle="New Product"
            slug="yx1-wireless-earphones"
            category="earphones"
          />
        </article>

        <FeatureItems />

        <BestGearSection />
      </main>
    </>
  );
}
