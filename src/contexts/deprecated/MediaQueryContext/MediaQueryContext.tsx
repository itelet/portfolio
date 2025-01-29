import React, { createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { getMediaQuerySizeMap } from "./Header-Media-Query";
import { ContextItem, MediaContextType } from "./types";

export const MediaContext = createContext<MediaContextType | null>(null);

const MediaQueryContext = ({ children }: { children: React.ReactNode }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

	React.useEffect(() => {
		console.log('isDesktopOrLaptop', isDesktopOrLaptop)
		console.log('isBigScreen', isBigScreen)
		console.log('isTabletOrMobile', isTabletOrMobile)
		console.log('isPortrait', isPortrait)
		console.log('isRetina', isRetina)

	}, [isDesktopOrLaptop,
		isBigScreen,
		isTabletOrMobile,
		isPortrait,
		isRetina])

  const getSizeMapForElement = ({ key }: { key: string }): ContextItem | null | undefined => {
    const mediaQuerySizeMap = getMediaQuerySizeMap(key, {
			isBigScreen: isBigScreen,
			isDesktopOrLaptop: isDesktopOrLaptop,
      isTabletOrMobile: isTabletOrMobile,
      isPortrait: isPortrait,
      isRetina: isRetina,
    });

		console.log('mediaQuerySizeMap', mediaQuerySizeMap)

		return mediaQuerySizeMap;
  };

  return <MediaContext.Provider value={{ getSizeMapForElement }}>{children}</MediaContext.Provider>;
};

export default MediaQueryContext;
