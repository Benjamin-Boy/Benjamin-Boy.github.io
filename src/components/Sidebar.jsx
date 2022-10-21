import { useState } from "react";
import PropTypes from "prop-types";

// Imports React Components
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import NavLinks from "./NavLinks";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const Sidebar = () => {
  const { darkTheme } = useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="z-40 fixed flex xl:hidden w-full h-screen flex flex-col items-center gap-14 bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out">
        <NavLinks />
        <LangToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
