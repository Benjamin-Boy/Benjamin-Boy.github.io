import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const Button = ({ text }) => {
  const { darkTheme, handleResume } = useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <Link
        to={text === "Portfolio" ? "works" : ""}
        smooth={true}
        activeClass="active"
        spy={true}
        duration={500}
        offset={-48}
        className="menu-item"
      >
        <button
          className="w-28 h-9 bg-[#181818] text-[#fdfaf0] rounded-lg border border-solid border-[#fdfaf0] hover:bg-[#fdfaf0] hover:text-[#181818] hover:border-[#181818] dark:bg-[#fdfaf0] dark:text-[#181818] dark:hover:bg-[#181818] dark:hover:text-[#fdfaf0] dark:hover:border-[#fdfaf0] transition duration-300"
          onClick={text !== "Portfolio" ? handleResume : null}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

Button.propTypes = {};

export default Button;
