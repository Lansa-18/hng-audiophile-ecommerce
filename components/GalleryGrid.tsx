import Image from "next/image";

interface GalleryGridProps {
  img1: string;
  img2: string;
  img3: string;
}

export default function GalleryGrid({ img1, img2, img3 }: GalleryGridProps) {
  return (
    <section className="mt-40 grid grid-cols-2 gap-8">
      <div className="space-y-8">
        <div className="h-[280px] overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-full w-full">
            <Image
              src={img1}
              alt="Gallery image 1"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="h-[280px] overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-full w-full">
            <Image
              src={img2}
              alt="Gallery image 2"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="h-[600px] overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-full w-full">
          <Image
            src={img3}
            alt="Gallery image 3"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
