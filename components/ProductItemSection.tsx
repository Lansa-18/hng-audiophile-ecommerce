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
      className={`flex items-center justify-between gap-31 ${className} ${children ? "max-tab-port:flex-row max-tab-port:gap-[69.5] max-custom-630:flex-col max-custom-630:gap-10" : "max-tab-port:flex-col max-tab-port:gap-10"} border-blue-500`}
    >
      {children ? (
        <article className="bg-brand-light max-tab-port:basis-auto relative h-[500px] w-full basis-1/2">
          <Image
            src={imgSrc}
            alt={productTitle}
            priority
            className="w-full rounded-xl border-red-500 object-contain"
            fill
          />
        </article>
      ) : (
        <article className="bg-brand-light max-tab-port:basis-auto relative h-[500px] w-full basis-1/2">
          <Image
            src={imgSrc}
            alt={productTitle}
            priority
            className="w-full rounded-xl border-red-500 object-cover"
            fill
          />
        </article>
      )}

      <article
        className={`text-brand-black max-tab-port:items-center ${children ? "" : "max-tab-port:text-center"} flex-1 border-red-500`}
      >
        <div className={`${children ? '' : 'max-tab-port:items-center'} mb-10 max-custom-630:mb-5 flex flex-col gap-4 border-red-500`}>
          <p className="text-brand-primary text-sm leading-[normal] font-normal tracking-[10px] uppercase not-italic">
            {headTitle}
          </p>
          <h1
            className={`heading-product-details ${children ? "max-tab-port:w-full" : "max-tab-port:w-[60%] max-tablet:w-[80%] border-red-500"}`}
          >
            {productTitle}
          </h1>
          <p
            className={`text-15px mt-4 ${children ? "max-custom-630:mt-0" : ""} leading-[25px] font-normal not-italic opacity-75`}
          >
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
