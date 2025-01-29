type MediaContextType = {
  getSizeMapForElement: ({ key }: { key: string }) => any;
};

type MediaQueries = {
  [key: string]: boolean;
};

type ContextItem = {
  monologueTextSize: string;
  width: string;
};

interface Header {
  isDesktopOrLaptop?: ContextItem;
  isBigScreen?: ContextItem;
  isTabletOrMobile?: ContextItem;
  isPortrait?: ContextItem;
  [key: string]: ContextItem | undefined;
}

interface Data {
  [key: string]: Header;
}

export type { MediaContextType, MediaQueries, ContextItem, Header, Data };
