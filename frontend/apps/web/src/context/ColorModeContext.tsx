// context/ColorModeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type ColorModeContextType = {
  colorMode: string;
  setColorMode: (mode: string) => void;
};

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<string>("light");

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};
