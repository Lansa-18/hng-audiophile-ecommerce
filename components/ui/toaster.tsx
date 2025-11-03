"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export function Toaster() {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-zinc-950 group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-zinc-500",
          actionButton:
            "group-[.toast]:bg-brand-primary group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500",
          closeButton: "group-[.toast]:text-zinc-950",
          success:
            "group-[.toaster]:bg-[#D87D4A] group-[.toaster]:text-white group-[.toaster]:border-none",
          error:
            "group-[.toaster]:bg-red-600 group-[.toaster]:text-white group-[.toaster]:border-none",
          info: "group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-none",
          warning:
            "group-[.toaster]:bg-amber-500 group-[.toaster]:text-white group-[.toaster]:border-none",
        },
        duration: 3000,
        closeButton: true,
        style: {
          fontFamily: "Manrope, sans-serif",
          fontSize: "15px",
          borderRadius: "8px",
        },
      }}
    />
  );
}
