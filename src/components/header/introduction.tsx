import { cn } from "@/utils";

export function Introduction() {
  return (
    <section
      className={cn(
        "space-y-5 text-center sm:place-self-center md:relative",
        "md:before:-top-28 md:before:left-1/2 md:before:size-96 md:before:-translate-x-1/2",
        "md:before md:before:bg-blue/50 md:before:border-golden/50 md:before:rounded-full md:before:border-8 md:before:blur-sm",
      )}
    >
      <h1 className="text-5xl md:text-7xl">Welcome to LaMusica</h1>

      <p className="*:text-golden text-lg font-semibold md:text-2xl md:font-medium">
        The official hub of <span>LaMusica</span> where the beats are
        <span> fresh</span>, the vibe is <span>electric</span>, and the
        <span> music</span> never stops.
      </p>
    </section>
  );
}
