import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const FontLoaderContext = createContext(false);

interface FontLoaderProviderProps {
  children: ReactNode;
}

export const FontLoaderProvider = ({ children }: FontLoaderProviderProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback for Safari (which doesn't support document.fonts.ready)
      setFontsLoaded(true);
    }
  }, []);

  return (
    <FontLoaderContext.Provider value={fontsLoaded}>
      {fontsLoaded ? children : <div className="h-screen w-screen bg-[#181818]" />}
    </FontLoaderContext.Provider>
  );
};

export const useFontsLoaded = () => useContext(FontLoaderContext);
