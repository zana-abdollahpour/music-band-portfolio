import { LatestAlbum } from "./latest-album";

export default function Albums() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="mx-auto flex flex-col items-center gap-y-5">
        <h2 className="after after:bg-golden relative z-[1] px-1 text-center text-2xl font-black uppercase after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm sm:text-4xl sm:font-medium">
          Latest Album
        </h2>

        <LatestAlbum />
      </div>
    </section>
  );
}
