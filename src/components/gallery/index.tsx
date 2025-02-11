import { cn } from "@/utils";

import GalleryImage1 from "@/assets/images/gallery/gallery-1.jpg";
import GalleryImage2 from "@/assets/images/gallery/gallery-2.jpg";
import GalleryImage3 from "@/assets/images/gallery/gallery-3.jpg";
import GalleryImage4 from "@/assets/images/gallery/gallery-4.jpg";
import GalleryImage5 from "@/assets/images/gallery/gallery-5.jpg";
import GalleryImage6 from "@/assets/images/gallery/gallery-6.jpg";
import GalleryImage7 from "@/assets/images/gallery/gallery-7.jpg";
import GalleryImage8 from "@/assets/images/gallery/gallery-8.jpg";
import GalleryImage9 from "@/assets/images/gallery/gallery-9.jpg";

const galleryImages = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
];

export default function Gallery() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 py-4 sm:py-8 md:py-12 lg:py-16">
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
          "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        Band Gallery
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {galleryImages.map((image, i) => (
          <figure key={i}>
            <img
              className="size-full object-cover object-left"
              src={image}
              alt=""
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
