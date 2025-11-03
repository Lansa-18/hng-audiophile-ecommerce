import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./ui/button-variants";

interface ProductItemSectionProps {
  imgSrc: string;
  headTitle?: string;
  productTitle: string;
  description: string;
  className?: string;
  slug?: string;
  category?: "headphones" | "speakers" | "earphones";
  children?: React.ReactNode;
}

export default function ProductItemSection({
  imgSrc,
  headTitle,
  productTitle,
  description,
  className,
  slug,
  category,
  children,
}: ProductItemSectionProps) {
  return (
    <section
      className={`flex items-center justify-between gap-33.5 ${className}`}
    >
      <article className="bg-brand-light relative flex h-140 w-135 items-center justify-center rounded-xl">
        <Image
          className="border-red-500"
          src={imgSrc}
          sizes="540px"
          alt={productTitle}
          priority
          fill
        />
      </article>
      <article className="text-brand-black flex-1 border-red-500">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-brand-primary text-sm leading-[normal] font-normal tracking-[10px] uppercase not-italic">
            {headTitle}
          </p>
          <h1 className="heading-1">{productTitle}</h1>
          <p className="text-15px mt-4 leading-[25px] font-normal not-italic opacity-75">
            {description}
          </p>
        </div>

        {children || (
          <Link href={`/${category}/${slug}`}>
            <PrimaryButton className="uppercase">See Product</PrimaryButton>
          </Link>
        )}
      </article>
    </section>
  );
}
