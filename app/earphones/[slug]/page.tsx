import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "@/components/ui/button-variants";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <div className="px-container bg-brand-lighter min-h-screen py-8">
      {/* Go Back Button */}
      <Link href="/earphones" className="mb-8 inline-block">
        <button className="text-brand-black text-[15px] leading-[25px] font-medium opacity-50">
          Go Back
        </button>
      </Link>

      {/* Product Hero Section */}
      <section className="flex items-center gap-[125px]">
        <div className="bg-brand-light flex-1 rounded-lg">
          <Image
            src="/my_assets/yx1-earphones.png"
            alt="YX1 WIRELESS EARPHONES"
            width={540}
            height={560}
            className="object-contain"
          />
        </div>

        <div className="flex-1 space-y-4">
          <span className="text-brand-primary text-[14px] tracking-[10px] uppercase">
            NEW PRODUCT
          </span>
          <h1 className="heading-1">
            YX1 WIRELESS
            <br />
            EARPHONES
          </h1>
          <p className="text-[15px] leading-[25px] opacity-50">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="mt-8 text-[18px] font-bold tracking-[1.29px]">$ 599</p>

          <div className="flex items-center gap-4">
            {/* Quantity Counter */}
            <div className="bg-brand-light flex items-center justify-between px-6 py-4">
              <button className="text-[13px] font-bold opacity-25">-</button>
              <span className="mx-5 text-[13px] font-bold">1</span>
              <button className="text-[13px] font-bold opacity-25">+</button>
            </div>
            <SecondaryButton>ADD TO CART</SecondaryButton>
          </div>
        </div>
      </section>

      {/* Features and In The Box Section */}
      <section className="mt-40 flex gap-[125px]">
        <div className="flex-1 space-y-8">
          <h2 className="heading-2">FEATURES</h2>
          <p className="text-[15px] leading-[25px] opacity-50">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
            <br />
            <br />
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>

        <div className="w-[350px]">
          <h2 className="heading-2 mb-8">IN THE BOX</h2>
          <ul className="space-y-2">
            {[
              { quantity: "2x", item: "Earphone Unit" },
              { quantity: "6x", item: "Multi-size Earplugs" },
              { quantity: "1x", item: "User Manual" },
              { quantity: "1x", item: "USB-C Charging Cable" },
              { quantity: "1x", item: "Travel Pouch" },
            ].map(({ quantity, item }) => (
              <li key={item} className="flex gap-6">
                <span className="text-brand-primary font-bold">{quantity}</span>
                <span className="text-[15px] opacity-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-40 grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="h-[280px] overflow-hidden rounded-lg">
            <Image
              src="/my_assets/yx1-earphones.png"
              alt="Gallery image 1"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[280px] overflow-hidden rounded-lg">
            <Image
              src="/my_assets/yx1-earphones.png"
              alt="Gallery image 2"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="h-[592px] overflow-hidden rounded-lg">
          <Image
            src="/my_assets/yx1-earphones.png"
            alt="Gallery image 3"
            width={635}
            height={592}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="mt-40">
        <h3 className="heading-3 mb-16 text-center">YOU MAY ALSO LIKE</h3>
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
              <div className="bg-brand-light mb-10 flex h-[318px] items-center justify-center rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={148}
                  height={193}
                  className="object-contain"
                />
              </div>
              <h5 className="heading-5 mb-8">{product.name}</h5>
              <Link href={`/earphones/${product.slug}`}>
                <SecondaryButton>See Product</SecondaryButton>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
