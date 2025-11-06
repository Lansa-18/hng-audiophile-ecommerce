import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "./ui/button-variants";

interface RecommendationsProps {
  recommendations?: Array<{
    image: string;
    name: string;
    slug: string;
  }>;
  category?: string;
}

export default function Recommendations({ recommendations, category }: RecommendationsProps) {
  const defaultRecommendations = [
    {
      image: "/my_assets/xx99-mark1-headphone.png",
      name: "XX99 MARK I",
      slug: "xx99-mark-one-headphones",
      category: "headphones",
    },
    {
      image: "/my_assets/xx59-headphone.png",
      name: "XX59",
      slug: "xx59-headphones",
      category: "headphones",
    },
    {
      image: "/my_assets/zx9-speaker.png",
      name: "ZX9 SPEAKER",
      slug: "zx9-speaker",
      category: "speakers",
    },
  ];

  const data = recommendations || defaultRecommendations;
  return (
    <section className="mt-40">
      <h3 className="mb-16 text-center text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex gap-8 max-tab-port:gap-3 max-custom-630:flex-col max-custom-630:gap-14">
        {data.map((product) => (
          <article key={product.name} className="flex-1 text-center">
            <div className="bg-brand-light mb-10 flex h-[318px] max-custom-630:h-30 items-center justify-center rounded-xl relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div className="mt-10 space-y-8">
              <h5 className="mb-8 text-[24px] leading-[33px] font-bold tracking-[1.7px] uppercase">
                {product.name}
              </h5>
              <Link href={`/${category || 'headphones'}/${product.slug}`}>
                <PrimaryButton>See Product</PrimaryButton>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
