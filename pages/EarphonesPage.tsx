import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import HeroSection from "@/components/HeroSection";
import ProductItemSection from "@/components/ProductItemSection";
import { getProductsByCategory } from "@/lib/get-product-data";

export default function EarphonesPage() {
const earphones = getProductsByCategory("earphones");
  return (
    <div className="bg-brand-lighter">
      <HeroSection />

      <main className="bg-brand-lighter text-brand-black max-tab-port:w-[92%] mx-auto w-[80%] border-red-500 py-40">
        <article className="max-tab-port:hidden mb-50 space-y-40">
          {earphones.map((product, index) => (
            <ProductItemSection
              key={product.id * Math.random()}
              imgSrc={product.categoryImage.desktop.replace("./", "/")}
              productTitle={product.name}
              description={product.description}
              headTitle={product.new ? "New Product" : undefined}
              slug={product.slug}
              category="earphones"
              className={index % 2 !== 0 ? "flex-row-reverse" : ""}
            />
          ))}
        </article>
        <article className="max-tab-port:block max-custom-630:hidden mb-50 hidden space-y-40">
          {earphones.map((product, index) => (
            <ProductItemSection
              key={product.id * Math.random()}
              imgSrc={product.categoryImage.tablet.replace("./", "/")}
              productTitle={product.name}
              description={product.description}
              headTitle={product.new ? "New Product" : undefined}
              slug={product.slug}
              category="earphones"
              className={index % 2 !== 0 ? "flex-row-reverse" : ""}
            />
          ))}
        </article>
        <article className="max-custom-630:block mb-50 hidden space-y-40">
          {earphones.map((product, index) => (
            <ProductItemSection
              key={product.id * Math.random()}
              imgSrc={product.categoryImage.mobile.replace("./", "/")}
              productTitle={product.name}
              description={product.description}
              headTitle={product.new ? "New Product" : undefined}
              slug={product.slug}
              category="earphones"
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
