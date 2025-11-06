import Image from "next/image";

interface GalleryGridProps {
  img1: string;
  img2: string;
  img3: string;
}

export default function GalleryGrid({ img1, img2, img3 }: GalleryGridProps) {
  return (
    <section className="mt-40 grid grid-cols-2 max-custom-630:grid-cols-1 gap-8">
      <div className="space-y-8">
        <div className="max-tab-port:h-[174px] h-[280px] overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-full w-full">
            <Image
              src={img1}
              alt="Gallery image 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="max-tab-port:h-[174px] h-[280px] overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-full w-full">
            <Image
              src={img2}
              alt="Gallery image 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="max-tab-port:h-[368px] h-[592px] overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-full w-full">
          <Image
            src={img3}
            alt="Gallery image 3"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 592px"
            className="object-cover transition-transform duration-300 hover:scale-105"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
