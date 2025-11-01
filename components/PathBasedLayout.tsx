"use client";

import HomePage from "@/pages/HomePage";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PathBasedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  if (pathName == "/") {
    return <HomePage />;
  }

  return (
    <div className="bg-brand-black min-h-screen">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
