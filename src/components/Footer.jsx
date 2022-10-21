// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Import React icons
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const { darkTheme } = useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="footer-container w-full flex flex-col items-center gap-6 bg-[#fdfaf0] text-[#181818] p-5 dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out">
        <div className="footer-container-social w-[90%] flex justify-center gap-8 text-4xl pt-5 md:w-[30%] border-t-2 border-[#97c7ff]">
          <a
            href="https://github.com/Benjamin-Boy"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://twitter.com/Leomhhann"
            target="_blank"
            rel="noreferrer"
            className="text-[#1DA1F2]"
          >
            <SiTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-boy/"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A66C2] dark:bg-[#fdfaf0] rounded-full"
          >
            <SiLinkedin />
          </a>
        </div>
        <div className="footer-container-infos flex flex-col items-center">
          <h3>&copy; {new Date().getFullYear()}</h3>
          <h4>All rights reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
