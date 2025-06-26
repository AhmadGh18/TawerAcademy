import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  isArb: false,

  setIsArb: () => {},
});

export const ContextProvider = ({ children }) => {
  const [isArb, setIsArb] = useState(false);
  useEffect(() => {
    const updateLang = () => {
      const lang = navigator.language || navigator.userLanguage;
      setIsArb(lang.startsWith("ar"));
    };

    updateLang(); // initial check
    window.addEventListener("languagechange", updateLang);

    return () => window.removeEventListener("languagechange", updateLang);
  }, []);

  return (
    <StateContext.Provider value={{ isArb, setIsArb }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
