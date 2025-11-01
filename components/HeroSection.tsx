"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { PrimaryButton } from "./ui/button-variants";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const pathName = usePathname();
  const pathNameValue = pathName?.split("/").at(-1);

  if (pathName == "/") {
    return (
      <section className="relative min-h-screen border-red-500">
        <Image
          className="object-cover"
          src="/my_assets/bg-bitmap.png"
          alt="headset-bg-image"
          fill
        />

        <div className="relative min-h-screen border-blue-500 px-[10.313rem]">
          <Navbar />

          <article className="text-brand-white mt-36 w-99.5 border-red-500">
            <div className="mb-10 flex flex-col gap-6">
              <p className="text-sm leading-[normal] font-normal tracking-[10px] uppercase not-italic">
                New Product
              </p>
              <h1 className="heading-1">XX99 Mark II Headphones</h1>
              <p className="text-[15px] leading-[25px] font-normal not-italic opacity-75">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>

            <PrimaryButton className="uppercase">See Product</PrimaryButton>
          </article>
        </div>
      </section>
    );
  }

  return (
    <div className="flex min-h-[30vh] items-center justify-center text-center text-[40px] leading-11 font-bold tracking-[1.429px] text-white uppercase not-italic">
      {pathNameValue}
    </div>
  );
}
