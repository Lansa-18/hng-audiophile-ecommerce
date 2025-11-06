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
      className={`flex items-center justify-between gap-31 ${className} max-tab-port:flex-col max-tab-port:gap-10 border-blue-500`}
    >
      {/* <article className="bg-brand-light max-tab-port:w-full max-tab-port:basis-auto relative h-[500px] max-tab-port:h-[352px] basis-1/2 overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[90%] w-[85%] max-custom-630:h-full max-custom-630:w-full">
            <Image
              src={imgSrc}
              alt={productTitle}
              priority
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </article> */}
      <article className="bg-brand-light relative basis-1/2 max-tab-port:basis-auto w-full h-[500px]">
        <Image src={imgSrc} alt={productTitle} priority className="w-full rounded-xl border-red-500 object-cover" fill />
      </article>
      <article className="text-brand-black max-tab-port:items-center flex-1 border-red-500 text-center">
        <div className="mb-10 flex flex-col max-tab-port:items-center gap-4 border-red-500">
          <p className="text-brand-primary text-sm leading-[normal] font-normal tracking-[10px] uppercase not-italic">
            {headTitle}
          </p>
          <h1 className="heading-1 max-tab-port:w-[65%] max-tablet:w-[80%]">{productTitle}</h1>
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
