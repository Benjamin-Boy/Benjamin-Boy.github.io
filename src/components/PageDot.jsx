import React from "react";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const PageDot = ({ component }) => {
  const {
    darkTheme,
    worksData,
    recordsPerPage,
    handleCurrentWorkPage,
    currentWorkPage,
    handleCurrentSkillPage,
    currentSkillPage,
  } = useInteractionsContext();

  const pageNb = Math.ceil(worksData.length / recordsPerPage);
  let pageNumbers = [];

  if (component === "works") {
    pageNumbers = [...Array(pageNb + 1).keys()].slice(1);
  } else {
    pageNumbers = [1, 2];
  }

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="page-dot-container flex justify-center gap-2">
        {pageNumbers.map((pageNumber) => {
          return (
            <span
              key={pageNumber}
              className="w-5 h-5 border border-1 border-[#181818] rounded-full flex justify-center items-center hover:bg-[#181818] dark:border-[#fdfaf0] dark:hover:bg-[#fdfaf0]"
              onClick={() => {
                if (component === "works") {
                  handleCurrentWorkPage(pageNumber);
                } else {
                  handleCurrentSkillPage(pageNumber);
                }
              }}
            >
              <span
                className={`${
                  component === "works" && currentWorkPage === pageNumber
                    ? "flex"
                    : component === "skills" && currentSkillPage === pageNumber
                    ? "flex"
                    : "hidden"
                } justify-center items-center w-[70%] h-[70%] bg-[#181818] rounded-full dark:bg-[#fdfaf0]`}
              ></span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PageDot;
