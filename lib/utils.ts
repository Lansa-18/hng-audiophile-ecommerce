import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProductName(name: string): string {
  return name
    .replace(" Headphones", "")
    .replace(" Speaker", "")
    .replace(" Earphones", "")
    .replace("Wireless", "")
    .replace("Mark", "MK")
    .trim();
}
