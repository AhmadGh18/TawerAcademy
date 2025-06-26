import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  isArb: false,
  setIsArb: () => {},
});

export const ContextProvider = ({ children }) => {
  const [isArb, setIsArb] = useState(false);

  useEffect(() => {
    const storedLang = sessionStorage.getItem("lang");
    if (storedLang) {
      setIsArb(storedLang === "ar");
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      const isBrowserArabic = browserLang.startsWith("ar");
      setIsArb(isBrowserArabic);
      sessionStorage.setItem("lang", isBrowserArabic ? "ar" : "en");
    }
  }, []);

  // Sync localStorage when user switches
  const handleSetIsArb = (val) => {
    setIsArb(val);
    localStorage.setItem("lang", val ? "ar" : "en");
  };

  return (
    <StateContext.Provider value={{ isArb, setIsArb: handleSetIsArb }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
