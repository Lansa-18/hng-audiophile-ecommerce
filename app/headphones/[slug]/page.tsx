import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductItemSection from "@/components/ProductItemSection";
import Recommendations from "@/components/Recommendations";
import GalleryGrid from "@/components/GalleryGrid";
import FeaturesInTheBox from "@/components/FeaturesInTheBox";
import FeatureItems from "@/components/FeatureItems";
import BestGearSection from "@/components/BestGearSection";
import { getProductBySlug } from "@/lib/get-product-data";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const slug = params.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const features = product.features.split("\n\n");

  return (
    <>
      <Navbar className="px-container" />
      <main className="bg-brand-lighter text-brand-black px-container min-h-screen py-20">
        <Link
          href={`/${product.category}`}
          className="hover:text-brand-primary text-brand-black text-15px mb-14 inline-block leading-[25px] font-medium opacity-50 transition-colors duration-300"
        >
          Go Back
        </Link>

        <ProductItemSection
          headTitle={product.new ? "New Product" : undefined}
          imgSrc={product.image.desktop.replace("./", "/")}
          productTitle={product.name}
          description={product.description}
        >
          <>
            <p className="mt-8 text-[18px] font-bold tracking-[1.29px]">
              $ {product.price.toLocaleString()}
            </p>

            <div className="mt-12 flex items-center gap-4">
              <AddToCartButton product={product} />
            </div>
          </>
        </ProductItemSection>

        <FeaturesInTheBox
          text1={features[0]}
          text2={features[1]}
          data={product.includes.map((item) => ({
            quantity: `${item.quantity}x`,
            item: item.item,
          }))}
        />

        <GalleryGrid
          img1={product.gallery.first.desktop.replace("./", "/")}
          img2={product.gallery.second.desktop.replace("./", "/")}
          img3={product.gallery.third.desktop.replace("./", "/")}
        />

        <Recommendations
          recommendations={product.others.map((item) => ({
            ...item,
            image: item.image.desktop.replace("./", "/"),
          }))}
          category={product.category}
        />

        <div className="mt-60">
          <FeatureItems />
        </div>

        <BestGearSection />
      </main>
    </>
  );
}
