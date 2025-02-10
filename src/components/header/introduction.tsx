import { cn } from "@/utils";

export function Introduction() {
  return (
    <section
      className={cn(
        "relative space-y-5 text-center sm:place-self-center",
        "before before:-top-28 before:left-1/2 before:size-0 before:-translate-x-1/2 sm:before:size-96",
        "before:bg-blue/50 before:border-golden/50 before:rounded-full before:border-8 before:blur-sm",
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
