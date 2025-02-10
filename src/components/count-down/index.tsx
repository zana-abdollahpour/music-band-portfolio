import { cn } from "@/utils";

export default function CountDown() {
  return (
    <section
      className={cn(
        "bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16",
        "bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(showcase.jpg)] bg-cover bg-center",
      )}
    >
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
          "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        Upcoming Tour
      </h2>

      <p className="text-center text-lg lg:text-2xl">
        Friday to Sunday Aug 18 to 20, 2027
      </p>
    </section>
  );
}
