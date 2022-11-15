import { createContext, useContext, useState } from "react";

// Imports local data
import { worksData } from "../data/data";

// Imports language files
import enLangContent from "../lang/en.json";
import frLangContent from "../lang/fr.json";

const InteractionsContext = createContext();

export const useInteractionsContext = () => {
  return useContext(InteractionsContext);
};

// const initialState = {
//   darkTheme: false,
//   lang: "en",
//   sidebarOpen: false,
//   slideIndex: 0,
//   resumeOpen: false,
//   maxRecordsPerPage: 4,
//   currentWorkPage: 1,
// };

const InteractionsContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer();
  const [darkTheme, setDarkTheme] = useState(false);
  const [lang, setLang] = useState("en");
  const [langEffect, setLangEffect] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [currentWorkPage, setCurrentWorkPage] = useState(1);
  const recordsPerPage = 4;

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

  const handleResume = () => {
    setResumeOpen(!resumeOpen);
  };

  const setCurrentPage = (pageNumber) => {
    setCurrentWorkPage(pageNumber);
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
        currentWorkPage,
        setCurrentPage,
        worksData,
        recordsPerPage,
      }}
    >
      {children}
    </InteractionsContext.Provider>
  );
};

export default InteractionsContextProvider;
