import Image from "next/image";
import { navLinks } from "./Navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white px-container pt-18.5 pb-13">
      <section className="flex justify-between">
        <article className="basis-135 space-y-9">
          <Image
            src="/my_assets/audiophile-white-logo.svg"
            width={135}
            height={25}
            alt="audiophile-white-logo"
          />

          <p className="text-[15px] leading-[25px] font-normal not-italic opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&#39;re a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a week.
          </p>
        </article>

        <article className="flex flex-col justify-between">
          <ul className="flex items-center justify-center gap-8.5">
            {navLinks.map((el) => (
              <li key={el.label}>
                <Link
                  className="hover:text-brand-primary text-[13px] leading-[25px] font-bold tracking-[2px] uppercase not-italic transition-all duration-300"
                  href={el.path}
                >
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 self-end">
            <Link href="#" className="group">
              <Image
                src="/my_assets/facebook-icon.svg"
                alt="facebook-logo"
                width={24}
                height={24}
                className="block group-hover:hidden"
              />
              <Image
                src="/my_assets/facebook-hover.svg"
                alt="facebook-logo"
                width={24}
                height={24}
                className="hidden group-hover:block"
              />
            </Link>

            <Link href="#" className="group">
              <Image
                src="/my_assets/twitter-icon.svg"
                alt="twitter-logo"
                width={24}
                height={24}
                className="block group-hover:hidden"
              />
              <Image
                src="/my_assets/twitter-hover.svg"
                alt="twitter-logo"
                width={24}
                height={24}
                className="hidden group-hover:block"
              />
            </Link>

            <Link href="#" className="group">
              <Image
                src="/my_assets/instagram-icon.svg"
                alt="instagram-logo"
                width={24}
                height={24}
                className="block group-hover:hidden"
              />
              <Image
                src="/my_assets/instagram-hover.svg"
                alt="instagram-logo"
                width={24}
                height={24}
                className="hidden group-hover:block"
              />
            </Link>
          </div>
        </article>
      </section>
      <p className="mt-14 text-[15px] leading-[25px] font-bold not-italic opacity-50">
        Copyright 2021. All Rights Reserved
      </p>
    </footer>
  );
}
