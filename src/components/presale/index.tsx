import { cn } from "@/utils";

const presalesData = [
  { name: "Pre-Sale Tour 1", date: "07/2 - 09/2" },
  { name: "Pre-Sale Tour 2", date: "14/2 - 16/2" },
] as const;

export default function Presale() {
  return (
    <section
      className={cn(
        "bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16",
        "bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(pre-sale.jpg)] bg-cover bg-center",
      )}
    >
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
          "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        pre-sale - upcoming tour
      </h2>

      <div className="space-y-2">
        {presalesData.map((presale) => (
          <p key={presale.name} className="text-center text-xl">
            <span className="after after:bg-golden/60 relative z-[1] pr-6 uppercase after:bottom-0.5 after:left-0 after:-z-[1] after:h-2 after:w-4/5">
              {presale.name} :
            </span>
            <span className="border-b-2 border-dotted">{presale.date}</span>
          </p>
        ))}

        <p className="text-center">
          All pre-sales begin 12am local and end 6pm local time.
        </p>
      </div>

      <a
        className="border-golden self-center border-2 px-8 py-2 text-center text-lg uppercase"
        href="#"
      >
        Check for more info
      </a>
    </section>
  );
}
