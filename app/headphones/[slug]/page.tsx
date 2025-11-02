import Image from "next/image";
import Link from "next/link";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import QuantityCounter from "@/components/QuantityCounter";
import ProductItemSection from "@/components/ProductItemSection";
import Recommendations from "@/components/Recommendations";
import GalleryGrid from "@/components/GalleryGrid";
import FeaturesInTheBox from "@/components/FeaturesInTheBox";
import FeatureItems from "@/components/FeatureItems";
import BestGearSection from "@/components/BestGearSection";

interface Props {
  params: {
    slug: string;
  };
}

const data = [
  { quantity: "1x", item: "Headphone Unit" },
  { quantity: "2x", item: "Replacement Earcups" },
  { quantity: "1x", item: "User Manual" },
  { quantity: "1x", item: "3.5mm 5m Audio Cable" },
  { quantity: "1x", item: "Travel Bag" },
];

export default function ProductPage({ params }: Props) {
  return (
    <>
      <Navbar className="px-container" />
      <main className="bg-brand-lighter text-brand-black px-container min-h-screen py-20">
        {/* Go Back Button */}
        <Link
          href="/headphones"
          className="hover:text-brand-primary text-brand-black mb-14 inline-block text-[15px] leading-[25px] font-medium opacity-50 transition-colors duration-300"
        >
          Go Back
        </Link>

        {/* Product Item Section */}
        <ProductItemSection
          headTitle="New Product"
          imgSrc="/my_assets/xx99-mark2-headphone.png"
          productTitle="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound."
        >
          <>
            <p className="mt-8 text-[18px] font-bold tracking-[1.29px]">
              $ 2,999
            </p>

            <div className="mt-12 flex items-center gap-4">
              {/* Quantity Counter */}
              <QuantityCounter />
              <PrimaryButton>ADD TO CART</PrimaryButton>
            </div>
          </>
        </ProductItemSection>

        {/* Features and In The Box Section */}
        <FeaturesInTheBox
          text1="Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you're taking a business call or just in your
          own personal space, the auto on/off and pause features ensure that
          you'll never miss a beat."
          text2="The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic."
          data={data}
        />

        {/* Gallery Section */}
        <GalleryGrid
          img1="/my_assets/headphone-img1.png"
          img2="/my_assets/headphone-img2.png"
          img3="/my_assets/headphone-img3.png"
        />

        <Recommendations />

        <div className="mt-60">
          <FeatureItems />
        </div>

        <BestGearSection />
      </main>
    </>
  );
}
