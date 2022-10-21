import { Link } from "react-scroll";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const NavLinks = () => {
  const { sidebarOpen, handleSidebar, lang, enLangContent, frLangContent } =
    useInteractionsContext();

  return (
    <ul className="flex flex-col gap-8 text-4xl items-center mt-32 xl:flex-row xl:gap-4 xl:text-xl xl:mt-0 transition duration-200 ease-in-out">
      <div className="cursor-pointer hover:text-[#97c7ff] xl:w-[110px] flex justify-center transition duration-300 ease-in-out">
        <Link
          to="home"
          smooth={true}
          spy={true}
          duration={500}
          offset={-48}
          activeClass="text-[#97c7ff] border-b border-[#97c7ff]"
          onClick={sidebarOpen ? handleSidebar : null}
        >
          {lang === "en"
            ? enLangContent.navLinks[0]
            : frLangContent.navLinks[0]}
        </Link>
      </div>
      <div className="cursor-pointer hover:text-[#97c7ff] xl:w-[110px] flex justify-center transition duration-300 ease-in-out">
        <Link
          to="about"
          smooth={true}
          spy={true}
          duration={500}
          offset={-48}
          activeClass="text-[#97c7ff] border-b border-[#97c7ff]"
          onClick={sidebarOpen ? handleSidebar : null}
        >
          {lang === "en"
            ? enLangContent.navLinks[1]
            : frLangContent.navLinks[1]}
        </Link>
      </div>
      <div className="cursor-pointer hover:text-[#97c7ff] xl:w-[110px] flex justify-center transition duration-300 ease-in-out">
        <Link
          to="skills"
          smooth={true}
          spy={true}
          duration={500}
          offset={-48}
          activeClass="text-[#97c7ff] border-b border-[#97c7ff]"
          onClick={sidebarOpen ? handleSidebar : null}
        >
          {lang === "en"
            ? enLangContent.navLinks[2]
            : frLangContent.navLinks[2]}
        </Link>
      </div>
      <div className="cursor-pointer hover:text-[#97c7ff] xl:w-[110px] flex justify-center transition duration-300 ease-in-out">
        <Link
          to="works"
          smooth={true}
          spy={true}
          duration={500}
          offset={-48}
          activeClass="text-[#97c7ff] border-b border-[#97c7ff]"
          onClick={sidebarOpen ? handleSidebar : null}
        >
          {lang === "en"
            ? enLangContent.navLinks[3]
            : frLangContent.navLinks[3]}
        </Link>
      </div>
      <div className="cursor-pointer hover:text-[#97c7ff] xl:w-[110px] flex justify-center transition duration-300 ease-in-out">
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-48}
          activeClass="text-[#97c7ff] border-b border-[#97c7ff]"
          onClick={sidebarOpen ? handleSidebar : null}
        >
          {lang === "en"
            ? enLangContent.navLinks[4]
            : frLangContent.navLinks[4]}
        </Link>
      </div>
    </ul>
  );
};

export default NavLinks;
