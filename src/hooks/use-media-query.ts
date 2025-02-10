import { useSyncExternalStore } from "react";

function makeMediaQueryStore(mediaQuery: string) {
  function getSnapshot() {
    return window.matchMedia(mediaQuery).matches;
  }

  function subscribe(callback: () => void) {
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaQueryList.addEventListener("change", callback);
    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  }

  return function useMediaQuery() {
    return useSyncExternalStore(subscribe, getSnapshot);
  };
}

// based on tailwind breakpoints, 1px is subtracted to match how mediaQuery works in css
export const useSmallMediaQuery = makeMediaQueryStore("(max-width: 639px)");
