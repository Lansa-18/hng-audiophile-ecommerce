"use client";

import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/headphones",
    label: "Headphones",
  },
  {
    path: "/speakers",
    label: "Speakers",
  },
  {
    path: "/earphones",
    label: "Earphones",
  },
];

export default function Navbar({ className }: NavbarProps) {
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <>
      <nav
        className={`text-13px max-tab-port:hidden border-brand-white/20 flex items-center justify-between border-b pt-8 pb-9 leading-[25px] font-bold tracking-[2px] uppercase not-italic ${className}`}
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/my_assets/audiophile-white-logo.svg"
            width={135}
            height={25}
            alt="audiophile-white-logo"
            className="h-[25px] w-[135px]"
          />
        </Link>

        <ul className="flex items-center justify-center gap-8.5">
          {navLinks.map((el) => (
            <li key={el.label}>
              <Link
                className="hover:text-brand-primary transition-all duration-300"
                href={el.path}
              >
                {el.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CART ICON */}
        <div className="relative">
          <button
            onClick={toggleCart}
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/my_assets/nav-cart-icon.svg"
              width={23.33}
              height={20}
              alt="cart-icon"
              className="h-5 w-[23.33px]"
            />
          </button>
          <Cart />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <article className="max-tab-port:flex hidden items-center justify-between pt-8 pb-9 border-b border-brand-white/20">
        <div className="flex items-center gap-10.5">
          <Sheet>
            <SheetTrigger asChild>
              <button className="">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-6 bg-brand-black">
              <nav>
                <ul className="flex flex-col gap-6">
                  {navLinks.map((el) => (
                    <li key={el.label}>
                      <Link
                        className="hover:text-brand-primary text-lg font-bold uppercase transition-all duration-300"
                        href={el.path}
                      >
                        {el.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          {/* LOGO */}
          <Link href="/" className="block">
            <Image
              src="/my_assets/audiophile-white-logo.svg"
              width={135}
              height={25}
              alt="audiophile-white-logo"
              className="h-[25px] w-[135px]"
            />
          </Link>
        </div>

        {/* CART ICON */}
        <div className="">
          <button
            onClick={toggleCart}
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/my_assets/nav-cart-icon.svg"
              width={23.33}
              height={20}
              alt="cart-icon"
              className="h-5 w-[23.33px]"
            />
          </button>
        </div>
      </article>
    </>
  );
}
