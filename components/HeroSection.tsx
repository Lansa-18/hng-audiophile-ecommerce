"use client";

import Navbar from "./Navbar";
import { PrimaryButton } from "./ui/button-variants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeroSection() {
  const pathName = usePathname();
  const pathNameValue = pathName?.split("/").at(-1);

  if (pathName == "/") {
    return (
      <>
        <section className="hero-bg relative min-h-screen w-full rounded-none">
          <div className="mx-auto min-h-screen w-[80%] max-tab-port:w-[92%] border-blue-500">
            <Navbar />

            <article className="text-brand-white max-tab-port:left-1/2 max-tab-port:-translate-x-1/2 absolute top-[56%] w-99.5 border -translate-y-1/2 border-red-500 max-tab-port:text-center">
              <div className="mb-10 flex flex-col gap-6">
                <p className="text-sm leading-[normal] font-normal tracking-[10px] uppercase not-italic">
                  New Product
                </p>
                <h1 className="heading-1 max-custom-630:text-[36px]">XX99 Mark II Headphones</h1>
                <p className="text-15px leading-[25px] font-normal not-italic opacity-75">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>

              <Link href="/headphones/xx99-mark-two-headphones">
                <PrimaryButton className="uppercase">See Product</PrimaryButton>
              </Link>
            </article>
          </div>
        </section>
      </>
    );
  }

  return (
    <article className="px-container">
      <Navbar className="border-blue-500" />

      <div className="flex min-h-[30vh] items-center justify-center text-center text-[40px] leading-11 font-bold tracking-[1.429px] text-white uppercase not-italic">
        {pathNameValue}
      </div>
    </article>
  );
}
