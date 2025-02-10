import { Fragment } from "react";

import Playlist from "@/components/shared/playlist";

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

      <Playlist />
    </div>
  );
}
