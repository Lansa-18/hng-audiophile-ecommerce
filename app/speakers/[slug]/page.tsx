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
      <Link href="/speakers" className="mb-8 inline-block">
        <button className="text-brand-black text-[15px] leading-[25px] font-medium opacity-50">
          Go Back
        </button>
      </Link>

      {/* Product Hero Section */}
      <section className="flex items-center gap-[125px]">
        <div className="bg-brand-light flex-1 rounded-lg">
          <Image
            src="/my_assets/zx9-speaker.png"
            alt="ZX9 SPEAKER"
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
            ZX9
            <br />
            SPEAKER
          </h1>
          <p className="text-[15px] leading-[25px] opacity-50">
            Upgrade your sound system with the all new ZX9 active speaker.
            It&apos;s a bookshelf speaker system that offers truly wireless
            connectivity -- creating new possibilities for more pleasing and
            practical audio setups.
          </p>
          <p className="mt-8 text-[18px] font-bold tracking-[1.29px]">
            $ 4,500
          </p>

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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
            <br />
            <br />
            Discover clear, more natural sounding highs than the competition
            with ZX9&apos;s signature planar diaphragm tweeter. Equally
            important is its powerful room-shaking bass courtesy of a 6.5&quot;
            aluminum alloy bass unit. You&apos;ll be able to enjoy equal sound
            quality whether in a large room or small den.
          </p>
        </div>

        <div className="w-[350px]">
          <h2 className="heading-2 mb-8">IN THE BOX</h2>
          <ul className="space-y-2">
            {[
              { quantity: "2x", item: "Speaker Unit" },
              { quantity: "2x", item: "Speaker Cloth Panel" },
              { quantity: "1x", item: "User Manual" },
              { quantity: "1x", item: "3.5mm 10m Audio Cable" },
              { quantity: "1x", item: "10m Optical Cable" },
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
              src="/my_assets/zx9-speaker.png"
              alt="Gallery image 1"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[280px] overflow-hidden rounded-lg">
            <Image
              src="/my_assets/zx7-speaker.png"
              alt="Gallery image 2"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="h-[592px] overflow-hidden rounded-lg">
          <Image
            src="/my_assets/zx9-speaker.png"
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
              image: "/my_assets/zx7-speaker.png",
              name: "ZX7 SPEAKER",
              slug: "zx7-speaker",
            },
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
              <Link href={`/speakers/${product.slug}`}>
                <SecondaryButton>See Product</SecondaryButton>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
