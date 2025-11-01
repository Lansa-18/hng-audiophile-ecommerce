import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import {
  SecondaryButton,
  SecondaryButtonInverted,
} from "@/components/ui/button-variants";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-brand-lighter min-h-screen">
      <HeroSection />

      <main className="py-45">
        <section className="px-container">
          <FeatureItems />

          {/* CATALOG ITEMS */}
          <article className="mt-42 flex flex-col gap-12 border-red-500">
            <div className="bg-brand-primary relative h-140 rounded-xl">
              <Image
                src="/my_assets/pattern-circles.svg"
                alt="pattern circles on orange background"
                width={740}
                height={740}
              />

              <article className="absolute bottom-0 left-[7.313rem] flex gap-34.5">
                <Image
                  src="/my_assets/speaker-zx9.png"
                  alt="ZX9 SPEAKER"
                  width={410}
                  height={493}
                  className=""
                />

                <div className="text-brand-white mt-10 w-88.5 border-red-500">
                  <article className="mb-10 flex flex-col gap-6">
                    <h1 className="heading-1">ZX9 SPEAKER</h1>
                    <p className="text-[15px] leading-[25px] font-normal not-italic opacity-75">
                      Upgrade to premium speakers that are phenomenally built to
                      deliver truly remarkable sound.
                    </p>
                  </article>

                  <SecondaryButtonInverted className="uppercase">
                    See Product
                  </SecondaryButtonInverted>
                </div>
              </article>
            </div>

            <div className="relative h-80 rounded-xl">
              <Image
                src="/my_assets/speaker-zx7.png"
                fill
                className="rounded-xl object-cover"
                alt="speaker-zx7"
              />

              <article className="absolute top-1/2 left-[7.313rem] -translate-y-1/2">
                <div className="mt-10 w-88.5 space-y-8 border-red-500">
                  <h1 className="text-brand-black text-[28px] leading-[normal] font-bold tracking-[2px] uppercase not-italic">
                    ZX7 SPEAKER
                  </h1>

                  <SecondaryButton className="uppercase">
                    See Product
                  </SecondaryButton>
                </div>
              </article>
            </div>

            <div className="flex justify-between gap-4.5">
              <article className="relative h-80 w-135 flex-1">
                <Image
                  src="/my_assets/image-earphones-yx1.jpg"
                  alt="yx1 earphones"
                  fill
                  className="rounded-xl object-cover"
                />
              </article>
              <article className="bg-brand-light relative h-80 w-135 flex-1 rounded-xl">
                <div className="absolute top-1/2 ml-24 w-88.5 -translate-y-1/2 space-y-8 border-red-500">
                  <h1 className="text-brand-black text-[28px] leading-[normal] font-bold tracking-[2px] uppercase not-italic">
                    YX1 EARPHONES
                  </h1>

                  <SecondaryButton className="uppercase">
                    See Product
                  </SecondaryButton>
                </div>
              </article>
            </div>
          </article>
          
          <BestGearSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
