// Imports React Components
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import NavLinks from "./NavLinks";

// Imports React icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const Navbar = () => {
  const { darkTheme, sidebarOpen, handleSidebar } = useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="z-50 fixed w-full h-12 py-2 px-8 bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0]  transition duration-200 ease-in-out">
        <div className="h-full flex justify-end items-center">
          <div className="hidden xl:flex gap-16">
            <ThemeToggle />
            <LangToggle />
            <NavLinks handleSidebar={handleSidebar} />
          </div>
          {sidebarOpen ? (
            <button className="flex xl:hidden text-2xl" onClick={handleSidebar}>
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="flex xl:hidden text-2xl flex"
              onClick={handleSidebar}
            >
              <AiOutlineMenu />
            </button>
          )}
        </div>
      </div>
      {sidebarOpen && <Sidebar />}
    </div>
  );
};

export default Navbar;
