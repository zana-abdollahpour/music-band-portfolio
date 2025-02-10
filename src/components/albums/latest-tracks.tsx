import { FaMusic, FaShoppingCart, FaDownload, FaPlay } from "react-icons/fa";

import ZurawieAlbumCover from "@/assets/images/zurawie-album-cover.jpg";

const tracksData = [
  {
    name: "PonPon Sensei",
    album: "Żurawie",
    lyricsLink: "#",
    downloadLink: "#",
  },
  {
    name: "Hope",
    album: "Żurawie",
    lyricsLink: "#",
    purchaseLink: "#",
  },
  {
    name: "Monster",
    album: "Żurawie",
    lyricsLink: "#",
    purchaseLink: "#",
  },
  {
    name: "Vintage",
    album: "Żurawie",
    lyricsLink: "#",
    downloadLink: "#",
  },
  {
    name: "Winter",
    album: "Żurawie",
    lyricsLink: "#",
    downloadLink: "#",
  },
  {
    name: "Falling apart",
    album: "Żurawie",
    lyricsLink: "#",
    purchaseLink: "#",
  },
] satisfies Array<
  { name: string; album: string; lyricsLink: string } & (
    | { downloadLink: string }
    | { purchaseLink: string }
  )
>;

export function LatestTracks() {
  return (
    <div className="border-golden grid grid-cols-[1fr] border">
      <figure>
        <img className="w-full" src={ZurawieAlbumCover} alt="" />
      </figure>

      <div className="divide-golden divide-y *:flex *:items-center *:justify-between *:gap-x-2 *:p-4 md:*:px-6">
        {tracksData.map((track) => (
          <div>
            <div className="grid grid-cols-[min-content,1fr] grid-rows-2 items-center gap-x-2 md:gap-x-4">
              <FaPlay className="col-span-1 col-start-1 size-3 text-[8px] md:text-base" />
              <h6 className="text-golden col-start-2 text-xs md:text-xl">
                {track.name}
              </h6>
              <h6 className="text-golden col-start-2 text-xs md:text-xl">
                {track.album}
              </h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <a
                className="bg-golden text-blue flex items-center gap-x-2 px-3 py-1 text-xs md:gap-x-4 md:border-2 md:border-white md:px-6 md:text-lg"
                href={track.lyricsLink}
              >
                <FaMusic className="text-xs md:text-lg md:text-white" />
                <span>Lyrics</span>
              </a>

              <a
                className="bg-golden text-blue flex w-28 items-center justify-start gap-x-3 px-3 py-1 text-xs md:gap-x-4 md:border-2 md:border-white md:px-6 md:text-lg"
                href="#"
              >
                {track.purchaseLink ? (
                  <>
                    <FaShoppingCart />
                    <span>Purchase</span>
                  </>
                ) : track.downloadLink ? (
                  <>
                    <FaDownload />
                    <span>Download</span>
                  </>
                ) : null}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
