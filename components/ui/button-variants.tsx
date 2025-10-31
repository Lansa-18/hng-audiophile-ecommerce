import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import type React from "react";

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

export function TextButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      variant="ghost"
      className="text-brand-primary hover:text-brand-primary-light button-text h-auto cursor-pointer rounded-none px-0 transition-colors duration-300"
    >
      {children}
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
