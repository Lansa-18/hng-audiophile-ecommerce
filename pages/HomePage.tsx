import BestGearSection from "@/components/BestGearSection";
import FeatureItems from "@/components/FeatureItems";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import {
  SecondaryButton,
  SecondaryButtonInverted,
} from "@/components/ui/button-variants";
import Image from "next/image";
import Link from "next/link";
import PatternCircles from "@/public/my_assets/pattern-circles.svg";
import DesktopZx9Speaker from "@/public/assets/home/desktop/image-speaker-zx9.png";
import TabletZx9Speaker from "@/public/assets/home/tablet/image-speaker-zx9.png";
import MobileZx9Speaker from "@/public/assets/home/mobile/image-speaker-zx9.png";
import DesktopZx7Speaker from "@/public/assets/home/desktop/image-speaker-zx7.jpg";
import TabletZx7Speaker from "@/public/assets/home/tablet/image-speaker-zx7.jpg";
import MobileZx7Speaker from "@/public/assets/home/mobile/image-speaker-zx7.jpg";

export default function HomePage() {
  return (
    <div className="bg-brand-lighter min-h-screen">
      <HeroSection />

      <main className="py-45">
        <section className="max-tab-port:w-[92%] mx-auto w-[80%]">
          <FeatureItems />

          {/* CATALOG ITEMS */}
          <article className="mt-42 flex flex-col gap-12 border-red-500">
            <div
              className="bg-brand-primary max-tab-port:h-[769px] relative h-140 rounded-xl"
              style={{
                backgroundImage: `url(${PatternCircles.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <article className="max-tab-port:flex-col max-tab-port:items-center max-tab-port:gap-16 max-tab-port:bottom-auto max-tab-port:top-1/2 max-tab-port:-translate-y-1/2 absolute bottom-0 left-1/2 mx-auto flex w-[80%] -translate-x-1/2 justify-between gap-20 border-red-500">
                <div className="max-tab-port:w-[197px]">
                  <Image
                    src={DesktopZx9Speaker}
                    alt="ZX9 SPEAKER"
                    className="max-tab-port:hidden block w-full object-cover"
                  />
                  <Image
                    src={TabletZx9Speaker}
                    alt="ZX9 SPEAKER"
                    className="max-tab-port:block hidden w-full object-cover"
                  />
                </div>

                <div className="text-brand-white max-tab-port:mt-0 max-tab-port:text-center mt-10 w-88.5 border-red-500">
                  <article className="mb-10 flex flex-col gap-6">
                    <h1 className="heading-1">ZX9 SPEAKER</h1>
                    <p className="text-15px leading-[25px] font-normal not-italic opacity-75">
                      Upgrade to premium speakers that are phenomenally built to
                      deliver truly remarkable sound.
                    </p>
                  </article>

                  <Link href="/speakers/zx9-speaker">
                    <SecondaryButtonInverted className="uppercase">
                      See Product
                    </SecondaryButtonInverted>
                  </Link>
                </div>
              </article>
            </div>

            <div className="relative h-80 rounded-xl zx7-speaker-bg">

              <article className="absolute top-1/2 pl-16 -translate-y-1/2 border-red-500">
                <div className="w-88.5 space-y-8 border-red-500">
                  <h1 className="text-brand-black text-[28px] leading-[normal] font-bold tracking-[2px] uppercase not-italic">
                    ZX7 SPEAKER
                  </h1>

                  <Link href="/speakers/zx9-speaker">
                    <SecondaryButton className="uppercase">
                      See Product
                    </SecondaryButton>
                  </Link>
                </div>
              </article>
            </div>

            <div className="flex hidden justify-between gap-4.5">
              <article className="relative h-80 w-135 flex-1">
                <Image
                  src="/my_assets/image-earphones-yx1.jpg"
                  alt="yx1 earphones"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-xl object-cover"
                  style={{ objectFit: "cover" }}
                />
              </article>
              <article className="bg-brand-light relative h-80 w-135 flex-1 rounded-xl">
                <div className="absolute top-1/2 ml-24 w-88.5 -translate-y-1/2 space-y-8 border-red-500">
                  <h1 className="text-brand-black text-[28px] leading-[normal] font-bold tracking-[2px] uppercase not-italic">
                    YX1 EARPHONES
                  </h1>

                  <Link
                    href="/earphones/yx1-earphones
                  "
                  >
                    <SecondaryButton className="uppercase">
                      See Product
                    </SecondaryButton>
                  </Link>
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
