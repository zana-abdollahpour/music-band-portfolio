import { FaChevronRight } from "react-icons/fa";

import { cn } from "@/utils";
import Playlist from "@/components/shared/playlist";

import Discography1 from "@/assets/images/albums/discography-1.jpg";
import Discography2 from "@/assets/images/albums/discography-2.jpg";
import Discography3 from "@/assets/images/albums/discography-3.jpg";
import Discography4 from "@/assets/images/albums/discography-4.jpg";

const allAlbums = [
  {
    title: "Set me free",
    image: Discography1,
  },
  {
    title: "Limitless",
    image: Discography2,
  },
  {
    title: "New dawn",
    image: Discography3,
  },
  {
    title: "Edgerunners",
    image: Discography4,
  },
] as const;

export default function Discography() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16">
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase after:bottom-0.5 sm:text-4xl sm:font-medium",
          "after after:bg-golden after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        Discography
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {allAlbums.map((album) => (
          <div key={album.title} className="flex flex-col gap-y-5">
            <div>
              <h6 className="text-golden text-xl font-bold uppercase">
                {album.title}
              </h6>
              <a className="group space-x-1" href="#">
                <span>View Album</span>
                <FaChevronRight className="text-golden inline text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <figure>
              <img src={album.image} alt="" />
            </figure>

            <Playlist />
          </div>
        ))}
      </div>
    </section>
  );
}
