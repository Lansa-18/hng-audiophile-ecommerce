import Image from "next/image";
import Link from "next/link";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import QuantityCounter from "@/components/QuantityCounter";
import ProductItemSection from "@/components/ProductItemSection";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <>
      <Navbar />
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
        <section className="mt-40 flex gap-[125px]">
          <div className="flex-1 space-y-8">
            <h2 className="text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
              FEATURES
            </h2>
            <p className="text-[15px] leading-[25px] opacity-50">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you&apos;re taking a business call or just in
              your own personal space, the auto on/off and pause features ensure
              that you&apos;ll never miss a beat.
              <br />
              <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>

          <div className="w-[350px]">
            <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
              IN THE BOX
            </h2>
            <ul className="space-y-2">
              {[
                { quantity: "1x", item: "Headphone Unit" },
                { quantity: "2x", item: "Replacement Earcups" },
                { quantity: "1x", item: "User Manual" },
                { quantity: "1x", item: "3.5mm 5m Audio Cable" },
                { quantity: "1x", item: "Travel Bag" },
              ].map(({ quantity, item }) => (
                <li key={item} className="flex gap-6">
                  <span className="text-brand-primary text-[15px] font-bold">
                    {quantity}
                  </span>
                  <span className="text-[15px] opacity-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-40 grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="h-[280px] overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-full w-full bg-[#1A1A1A]">
                <Image
                  src="/my_assets/headphone-img1.png"
                  alt="Gallery image 1"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="h-[280px] overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-full w-full bg-[#1A1A1A]">
                <Image
                  src="/my_assets/headphone-img2.png"
                  alt="Gallery image 2"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="h-[600px] overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-full w-full bg-[#1A1A1A]">
              <Image
                src="/my_assets/headphone-img3.png"
                alt="Gallery image 3"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* You May Also Like Section */}
        <section className="mx-auto mt-40 max-w-[1110px]">
          <h3 className="mb-16 text-center text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
            YOU MAY ALSO LIKE
          </h3>
          <div className="flex gap-8">
            {[
              {
                image: "/my_assets/xx99-mark1-headphone.png",
                name: "XX99 MARK I",
                slug: "xx99-mark-one-headphones",
              },
              {
                image: "/my_assets/xx59-headphone.png",
                name: "XX59",
                slug: "xx59-headphones",
              },
              {
                image: "/my_assets/zx9-speaker.png",
                name: "ZX9 SPEAKER",
                slug: "zx9-speaker",
              },
            ].map((product) => (
              <div key={product.name} className="flex-1 text-center">
                <div className="mb-10 flex h-[318px] items-center justify-center rounded-lg bg-[#1A1A1A] shadow-lg">
                  <div className="relative h-[200px] w-[200px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <h5 className="mb-8 text-[24px] leading-[33px] font-bold tracking-[1.7px] uppercase">
                  {product.name}
                </h5>
                <Link href={`/headphones/${product.slug}`}>
                  <SecondaryButton>See Product</SecondaryButton>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
