import { useEffect, useState } from "react";

import { cn } from "@/utils";
import { useSmallMediaQuery } from "@/hooks/use-media-query";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Discography", href: "#" },
  { name: "Band", href: "#" },
  { name: "Tours", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useSmallMediaQuery();

  useEffect(() => {
    if (!isSmallScreen) setIsOpen(false);
  }, [isSmallScreen]);

  return (
    <header>
      <nav className="z-50 flex items-center justify-between self-start">
        <a href="#">
          <img src="/public/logo.svg" alt="LaMusica" />
        </a>

        <ul
          className={cn(
            "bg-golden top-0 left-0 z-50 flex h-screen w-screen scale-y-0 ease-in-out sm:h-auto sm:w-auto sm:scale-y-100 sm:bg-transparent",
            "fixed origin-bottom flex-col items-center justify-center gap-5 transition-transform duration-300 sm:static sm:flex-row",
            isOpen && "origin-top scale-y-100",
          )}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              className={cn(
                "relative",
                "before before:bg-blue before:animate-spin-reverse sm:before:bg-golden before:pointer-events-none before:-right-6 before:bottom-1/2",
                "before:h-2 before:w-3 before:rounded before:opacity-0 before:transition hover:before:opacity-100 sm:before:-bottom-2 sm:before:left-0",
                "after after:bg-blue sm:after:bg-golden after:pointer-events-none after:-right-6 after:bottom-1/2",
                "after:h-2 after:w-3 after:animate-spin after:rounded after:opacity-0 after:transition hover:after:opacity-100 sm:after:right-0 sm:after:-bottom-2",
              )}
            >
              <a
                className="hover:text-blue sm:hover:text-golden text-lg text-white transition-colors sm:text-base md:text-lg lg:text-2xl"
                href={navLink.href}
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          role="button"
          title="toggle menu"
          onClick={() => setIsOpen((cur) => !cur)}
          className="hamburger z-50 flex w-8 cursor-pointer flex-col items-center justify-center gap-y-1.5 sm:hidden"
        >
          <div
            className={cn(
              "h-[2px] w-full rounded bg-white transition-transform",
              isOpen && "translate-y-2 rotate-45",
            )}
          />
          <div
            className={cn(
              "h-[2px] w-full rounded bg-white transition-opacity",
              isOpen && "opacity-0",
            )}
          />
          <div
            className={cn(
              "h-[2px] w-full rounded bg-white transition-transform",
              isOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </div>
      </nav>
    </header>
  );
}
