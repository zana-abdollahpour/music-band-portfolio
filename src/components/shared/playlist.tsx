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

export default function Playlist() {
  return (
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
  );
}
