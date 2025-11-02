import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import HeroSection from "@/components/HeroSection";
import ProductItemSection from "@/components/ProductItemSection";
import { getProductsByCategory } from "@/lib/get-product-data";

export default function SpeakersPage() {
const speakers = getProductsByCategory("speakers");
  return (
    <div>
      <HeroSection />

      <main className="bg-brand-lighter text-brand-black px-container border-red-500 py-40">
        <article className="mb-50 space-y-40">
          {speakers.map((product, index) => (
            <ProductItemSection
              key={product.id}
              imgSrc={product.categoryImage.desktop.replace("./", "/")}
              productTitle={product.name}
              description={product.description}
              headTitle={product.new ? "New Product" : undefined}
              slug={product.slug}
              category="headphones"
              className={index % 2 !== 0 ? "flex-row-reverse" : ""}
            />
          ))}
        </article>

        <FeatureItems />

        <BestGearSection />
      </main>
    </div>
  );
}
