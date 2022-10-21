import React from "react";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const PageDot = () => {
  const { darkTheme } = useInteractionsContext();

  const pageNb = [1, 2, 3];

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="page-dot-container flex justify-center gap-2">
        {pageNb.map((pageDot, index) => {
          return (
            <span
              key={index}
              className="w-5 h-5 border border-1 border-[#181818] rounded-full flex justify-center items-center hover:bg-[#181818] dark:border-[#fdfaf0] dark:hover:bg-[#fdfaf0]"
            >
              <span className="hidden justify-center items-center w-[70%] h-[70%] bg-[#181818] rounded-full dark:bg-[#fdfaf0]"></span>
            </span>
          );
        })}
        {/* <span className="w-5 h-5 border border-1 border-[#181818] rounded-full flex justify-center items-center hover:bg-[#181818] dark:border-[#fdfaf0] dark:hover:bg-[#fdfaf0]">
          <span className="flex justify-center items-center w-[70%] h-[70%] bg-[#181818] rounded-full dark:bg-[#fdfaf0]"></span>
        </span>
        <span className="w-5 h-5 border border-1 border-[#181818] rounded-full flex justify-center items-center hover:bg-[#181818]  dark:border-[#fdfaf0] dark:hover:bg-[#fdfaf0]">
          <span className="hidden justify-center items-center w-[70%] h-[70%] bg-[#181818] rounded-full dark:bg-[#fdfaf0]"></span>
        </span>
        <span className="w-5 h-5 border border-1 border-[#181818] rounded-full flex justify-center items-center hover:bg-[#181818]  dark:border-[#fdfaf0] dark:hover:bg-[#fdfaf0]">
          <span className="hidden justify-center items-center w-[70%] h-[70%] bg-[#181818] rounded-full dark:bg-[#fdfaf0]"></span>
        </span> */}
      </div>
    </div>
  );
};

export default PageDot;
