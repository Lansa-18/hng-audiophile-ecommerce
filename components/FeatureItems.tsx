import Image from "next/image";
import React from "react";
import { TextButton } from "./ui/button-variants";
import Link from "next/link";

export default function FeatureItems() {
  return (
    <article className="flex items-center justify-between gap-7.5 border-blue-500">
      <div className="bg-brand-light flex flex-1 flex-col items-center rounded-xl pb-7.5">
        <Image
          width={154}
          height={160}
          src="/my_assets/home-headphones.png"
          alt="headphones in homepage"
          className="-mt-15 h-40 w-38.5 transition-transform duration-300 hover:scale-105"
        />
        <p className="text-brand-black text-center text-lg leading-[normal] font-bold tracking-[1.286px] uppercase not-italic">
          Headphones
        </p>
        <Link href="/headphones">
          <TextButton>Shop</TextButton>
        </Link>
      </div>

      <div className="bg-brand-light flex flex-1 flex-col items-center rounded-xl pb-7.5">
        <Image
          width={154}
          height={160}
          src="/my_assets/home-speakers.png"
          alt="speakers in homepage"
          className="-mt-15 h-40 w-38.5 transition-transform duration-300 hover:scale-105"
        />
        <p className="text-brand-black text-center text-lg leading-[normal] font-bold tracking-[1.286px] uppercase not-italic">
          Speakers
        </p>
        <Link href="/speakers">
          <TextButton>Shop</TextButton>
        </Link>{" "}
      </div>

      <div className="bg-brand-light flex flex-1 flex-col items-center rounded-xl pb-7.5">
        <Image
          width={154}
          height={160}
          src="/my_assets/home-earphones.png"
          alt="earphones in homepage"
          className="-mt-15 h-40 w-38.5 transition-transform duration-300 hover:scale-105"
        />
        <p className="text-brand-black text-center text-lg leading-[normal] font-bold tracking-[1.286px] uppercase not-italic">
          Earphones
        </p>
        <Link href="/earphones">
          <TextButton>Shop</TextButton>
        </Link>{" "}
      </div>
    </article>
  );
}
