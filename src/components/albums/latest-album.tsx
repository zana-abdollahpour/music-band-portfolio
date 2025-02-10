import { Fragment } from "react";
import {
  FaAmazon,
  FaApple,
  FaCloud,
  FaGooglePlay,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const playLinks = [
  { icon: FaApple, href: "#" },
  { icon: FaGooglePlay, href: "#" },
  { icon: FaAmazon, href: "#" },
  { icon: FaCloud, href: "#" },
  { icon: FaSpotify, href: "#" },
  { icon: FaYoutube, href: "#" },
] as const;

const latestAlbumData: [datField: string, dataValue: string][] = [
  ["label", "Żurawie"],
  ["released", "August 2027"],
  ["genre", "Punk Metal"],
  ["style", "Revival"],
] as const;

export function LatestAlbum() {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="grid grid-cols-2">
        {latestAlbumData.map((dataPiece) => (
          <Fragment key={dataPiece[0]}>
            <span className="after after:bg-golden/60 relative z-[1] mr-2 justify-self-end uppercase after:bottom-0.5 after:left-0 after:-z-[1] after:h-2 after:w-full after:blur-xs">
              {dataPiece[0]}
            </span>
            <span className="ml-2 w-fit border-b-2 border-dotted">
              {dataPiece[1]}
            </span>
          </Fragment>
        ))}
      </div>

      <ul className="flex justify-center gap-x-3">
        {playLinks.map((playLink) => (
          <li
            key={playLink.href}
            className="bg-slate/60 hover:bg-golden/60 flex size-6 cursor-pointer items-center justify-center border border-white/60 p-2 text-xs transition-colors"
          >
            <a href={playLink.href}>
              <playLink.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
