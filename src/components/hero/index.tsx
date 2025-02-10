import { Navigation } from "./navigation";
import { Introduction } from "./introduction";

import { cn } from "@/utils";

export default function Hero() {
  return (
    <div
      className={cn(
        "grid h-screen gap-y-6 p-4 sm:grid-rows-[min-content_1fr] sm:p-8 md:p-12 lg:p-16",
        "bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(showcase.jpg)] bg-cover bg-center",
      )}
    >
      <Navigation />
      <Introduction />
    </div>
  );
}
