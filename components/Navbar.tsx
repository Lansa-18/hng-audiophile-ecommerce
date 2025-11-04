"use client";

import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

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
    <nav
      className={`text-13px border-brand-white/20 flex items-center justify-between border-b pt-8 pb-9 leading-[25px] font-bold tracking-[2px] uppercase not-italic ${className}`}
    >
      {/* LOGO */}
      <Link href='/'>
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
  );
}
