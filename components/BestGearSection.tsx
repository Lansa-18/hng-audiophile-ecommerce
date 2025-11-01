import Image from "next/image";

export default function BestGearSection() {
  return (
    <section className="bg-brand-lighter mt-45 flex items-center justify-between">
      <article className="text-brand-black w-[27.813rem] space-y-8">
        <h3 className="text-[2.5rem] leading-11 font-bold tracking-[1.429px] uppercase">
          Bringing you the <span className="text-brand-primary">best</span>{" "}
          audio gear
        </h3>
        <p className="text-[15px] leading-[25px] font-normal not-italic opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <article className="">
        <Image
          src="/my_assets/guy-with-headphones.png"
          alt="guy with headphones"
          className="rounded-xl"
          width={540}
          height={588}
        />
      </article>
    </section>
  );
}
