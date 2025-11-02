import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import HeroSection from "@/components/HeroSection";
import ProductItemSection from "@/components/ProductItemSection";

export default function HeadphonesPage() {
  return (
    <div>
      <HeroSection />

      <main className="bg-brand-lighter text-brand-black px-container border-red-500 py-40">
        <article className="mb-50 space-y-40">
          <ProductItemSection
            imgSrc="/my_assets/xx99-mark2-headphone.png"
            productTitle="xx99 mark ii headphones"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            headTitle="New Product"
            slug="xx99-mark-two-headphones"
            category="headphones"
          />
          <ProductItemSection
            imgSrc="/my_assets/xx99-mark1-headphone.png"
            productTitle="XX99 Mark I Headphones"
            description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
            className="flex-row-reverse"
            slug="xx99-mark-one-headphones"
            category="headphones"
          />
          <ProductItemSection
            imgSrc="/my_assets/xx59-headphone.png"
            productTitle="XX59 Headphones"
            description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            slug="xx59-headphones"
            category="headphones"
          />
        </article>

        <FeatureItems />

        <BestGearSection />
      </main>
    </div>
  );
}
