import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import HeroSection from "@/components/HeroSection";
import ProductItemSection from "@/components/ProductItemSection";

export default function SpeakersPage() {
  return (
    <>
      <HeroSection />

      <main className="bg-brand-lighter text-brand-black px-container border-red-500 py-40">
        <article className="mb-50 space-y-40">
          <ProductItemSection
            imgSrc="/my_assets/zx9-speaker.png"
            productTitle="ZX9 SPEAKER"
            description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            headTitle="New Product"
            slug="zx9-speaker"
            category="speakers"
          />
          <ProductItemSection
            imgSrc="/my_assets/zx7-speaker.png"
            productTitle="ZX7 SPEAKER"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            className="flex-row-reverse"
            slug="zx7-speaker"
            category="speakers"
          />
        </article>

        <FeatureItems />

        <BestGearSection />
      </main>
    </>
  );
}
