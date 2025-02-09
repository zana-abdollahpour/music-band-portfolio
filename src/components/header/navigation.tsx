import { cn } from "@/utils";

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
  return (
    <nav className="z-50 flex items-center justify-between self-start">
      <a href="#">
        <img src="/public/logo.svg" alt="LaMusica" />
      </a>

      <ul className="bg-golden nav fixed top-0 left-0 z-50 flex h-screen w-screen origin-bottom scale-y-0 flex-col items-center justify-center gap-5 transition-transform duration-300 ease-in-out sm:static sm:h-auto sm:w-auto sm:scale-y-100 sm:flex-row sm:bg-transparent">
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
              className="hover:text-blue sm:hover:text-golden text-lg text-white transition-colors lg:text-2xl"
              href={navLink.href}
            >
              {navLink.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="hamburger z-50 flex w-8 cursor-pointer flex-col items-center justify-center gap-y-1.5 sm:hidden">
        <div className="h-[2px] w-full rounded bg-white transition-transform" />
        <div className="h-[2px] w-full rounded bg-white transition-opacity" />
        <div className="h-[2px] w-full rounded bg-white transition-transform" />
      </div>
    </nav>
  );
}
