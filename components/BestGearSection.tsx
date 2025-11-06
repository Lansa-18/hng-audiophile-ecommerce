import Image from "next/image";

import BestGearImage from '@/public/assets/shared/desktop/image-best-gear.jpg';
import TabletBestGearImage from '@/public/assets/shared/tablet/image-best-gear.jpg';
import MobileBestGearImage from '@/public/assets/shared/mobile/image-best-gear.jpg';

export default function BestGearSection() {
  return (
    <section className="bg-brand-lighter mt-45 flex gap-16 items-center justify-between max-tab-port:flex-col-reverse">
      <article className="text-brand-black w-[27.813rem] max-custom-630:w-auto border-red-500 max-tab-port:w-143.5 space-y-8 max-tab-port:text-center">
        <h3 className="text-[2.5rem] max-custom-630:text-[28px] leading-11 max-custom-630:leading-normal font-bold tracking-[1.429px] max-custom-630:tracking-[1px] uppercase">
          Bringing you the <span className="text-brand-primary">best</span>{" "}
          audio gear
        </h3>
        <p className="text-15px leading-[25px] font-normal not-italic opacity-50">
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
          src={BestGearImage}
          alt="guy with headphones"
          className="rounded-xl max-tab-port:hidden"
        />
        <Image
          src={TabletBestGearImage}
          alt="guy with headphones"
          className="rounded-xl hidden max-tab-port:block max-custom-630:hidden"
        />
        <Image
          src={MobileBestGearImage}
          alt="guy with headphones"
          className="rounded-xl hidden max-custom-630:block"
        />
      </article>
    </section>
  );
}
