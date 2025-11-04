import Image from "next/image";
import { SecondaryButton } from "@/components/ui/button-variants";

export default function ProductDetailsPage() {
  return (
    <div className="bg-brand-lighter min-h-screen">
      {/* Go Back Button */}
      <button className="text-brand-black text-15px leading-[25px] font-medium opacity-50">
        Go Back
      </button>

      {/* Product Hero Section */}
      <section className="flex items-center gap-[125px]">
        <div className="bg-brand-light flex-1 rounded-lg">
          <Image
            src="/my_assets/headphones-detail.png"
            alt="XX99 Mark II Headphones"
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
            XX99 Mark II
            <br />
            Headphones
          </h1>
          <p className="text-15px leading-[25px] opacity-50">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className="mt-8 text-[18px] font-bold tracking-[1.29px]">
            $ 2,999
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
          <p className="text-15px leading-[25px] opacity-50">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you&#39;re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you&#39;ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        <div className="w-[350px]">
          <h2 className="heading-2 mb-8">IN THE BOX</h2>
          <ul className="space-y-2">
            {[
              { quantity: "1x", item: "Headphone Unit" },
              { quantity: "2x", item: "Replacement Earcups" },
              { quantity: "1x", item: "User Manual" },
              { quantity: "1x", item: "3.5mm 5m Audio Cable" },
              { quantity: "1x", item: "Travel Bag" },
            ].map(({ quantity, item }) => (
              <li key={item} className="flex gap-6">
                <span className="text-brand-primary font-bold">{quantity}</span>
                <span className="text-15px opacity-50">{item}</span>
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
              src="/my_assets/gallery-1.png"
              alt="Gallery image 1"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[280px] overflow-hidden rounded-lg">
            <Image
              src="/my_assets/gallery-2.png"
              alt="Gallery image 2"
              width={445}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="h-[592px] overflow-hidden rounded-lg">
          <Image
            src="/my_assets/gallery-3.png"
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
              image: "/my_assets/xx99-mark-one.png",
              name: "XX99 MARK I",
            },
            {
              image: "/my_assets/xx59.png",
              name: "XX59",
            },
            {
              image: "/my_assets/zx9.png",
              name: "ZX9 SPEAKER",
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
              <SecondaryButton>See Product</SecondaryButton>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
