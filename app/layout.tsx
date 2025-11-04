import type { Metadata } from "next";
import "./globals.css";
import PathBasedLayout from "@/components/PathBasedLayout";
import ConvexClientProvider from "./providers/ConvexProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Audiophile Ecommerce",
  description: "Discover premium audio gear, headphones, speakers, and accessories. Shop the latest in high-fidelity sound with Audiophile Ecommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-brand-white antialiased`}>
        <ConvexClientProvider>
          <PathBasedLayout>{children}</PathBasedLayout>
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
