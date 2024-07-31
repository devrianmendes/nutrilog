"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ResponsivityProps = {
  children: React.ReactNode;
  // isMobile: ResponsivityProvider;
};

export type ResponsivityProvider = {
  mobile: boolean;
  width: number;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResponsivityContext = createContext<ResponsivityProvider|undefined>(undefined);

export const useResponsivity = () => {
    const context = useContext(ResponsivityContext);

    return context;
}

export const ResponsivityProvider = ({
  children,
  
}: ResponsivityProps) => {
  const [mobile, setMobile] = useState(true);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 1023) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initialize width and mobile state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsivityContext.Provider value={{ mobile, setMobile, width }}>
      {children}
    </ResponsivityContext.Provider>
  );
};
