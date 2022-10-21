import { createContext, useContext, useState } from "react";

// Imports language files
import enLangContent from "../lang/en.json";
import frLangContent from "../lang/fr.json";

const InteractionsContext = createContext();

export const useInteractionsContext = () => {
  return useContext(InteractionsContext);
};

const initialState = {
  darkTheme: false,
  lang: "en",
  sidebarOpen: false,
  slideIndex: 0,
  resumeOpen: false,
};

const InteractionsContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer();
  const [darkTheme, setDarkTheme] = useState(false);
  const [lang, setLang] = useState("en");
  const [langEffect, setLangEffect] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleLang = (lang) => {
    setLangEffect(lang);
    setLang(lang);
  };

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNextTab = () => {
    setSlideIndex((prevState) => prevState + 1);
  };

  const handlePrevTab = () => {
    setSlideIndex((prevState) => prevState - 1);
  };

  const handleResume = () => {
    setResumeOpen(!resumeOpen);
  };

  return (
    <InteractionsContext.Provider
      value={{
        enLangContent,
        frLangContent,
        darkTheme,
        handleTheme,
        lang,
        langEffect,
        handleLang,
        sidebarOpen,
        handleSidebar,
        resumeOpen,
        handleResume,
      }}
    >
      {children}
    </InteractionsContext.Provider>
  );
};

export default InteractionsContextProvider;
