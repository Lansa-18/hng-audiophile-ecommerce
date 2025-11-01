import { Button } from "@/components/ui/button";
import type React from "react";
import Image from "next/image";

export function PrimaryButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className="bg-brand-primary hover:bg-brand-primary-light button-text h-auto cursor-pointer rounded-none px-8 py-4 text-white transition-colors duration-300"
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      variant="outline"
      className="hover:bg-brand-black border-brand-black text-brand-black button-text h-auto cursor-pointer rounded-none bg-transparent px-8 py-4 transition-colors duration-300 hover:text-white"
    >
      {children}
    </Button>
  );
}

export function SecondaryButtonInverted({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      variant="outline"
      className="hover:bg-[#4C4C4C] border-none text-brand-white button-text h-auto cursor-pointer rounded-none bg-brand-black px-8 py-4 transition-colors duration-300 hover:text-brand-white"
    >
      {children}
    </Button>
  );
}
export function TextButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      variant="ghost"
      className="text-brand-black/50 hover:text-brand-primary-light button-text flex h-auto cursor-pointer items-center rounded-none px-0 text-[13px] leading-[normal] font-bold tracking-[1px] uppercase not-italic transition-colors duration-300"
    >
      {children}
      <Image
        src="/my_assets/icon-arrow-right.svg"
        alt="arrow right"
        width={5}
        height={10}
        className="ml-2"
      />{" "}
    </Button>
  );
}
