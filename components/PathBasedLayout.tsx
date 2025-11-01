"use client";

import HomePage from "@/pages/HomePage";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

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
    <div className="bg-header-bg px-container min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
