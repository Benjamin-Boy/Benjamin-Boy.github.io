import React from "react";

// Imports React Components
import Button from "./Button";
import Resume from "./Resume";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Imports React icons
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

// Imports local assets
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  const {
    darkTheme,
    lang,
    enLangContent,
    frLangContent,
    resumeOpen,
    handleResume,
  } = useInteractionsContext();

  return (
    <div
      className={`${
        darkTheme ? "dark" : null
      } w-full h-[calc(100vh-50px)] relative`}
      name="about"
    >
      <div className="h-full flex flex-col items-center justify-bestween xl:justify-center bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out">
        <h1 className="block text-6xl xl:hidden mb-2">
          {lang === "en" ? enLangContent.aboutTitle : frLangContent.aboutTitle}
        </h1>
        <div className="about-container-infos flex flex-col items-center justify-between gap-8 w-4/5 xl:flex-row xl:justify-around xl:gap-20">
          <img
            src={aboutImg}
            alt="about"
            className="w-4/5 max-w-sm rounded-lg xl:min-w-[450px]"
          />
          <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-center xl:gap-20">
            <div className="xl:w-3/5">
              <h1 className="hidden xl:block text-6xl mb-2">
                {lang === "en"
                  ? enLangContent.aboutTitle
                  : frLangContent.aboutTitle}
              </h1>
              {lang === "en"
                ? enLangContent.aboutContent.map((sentence) => {
                    return (
                      <p key={sentence} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })
                : frLangContent.aboutContent.map((sentence) => {
                    return (
                      <p key={sentence} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })}
            </div>
            <div className="flex flex-col items-center gap-2 xl:w-2/5 xl:gap-4 xl:items-start">
              <h2 className="font-bold">
                {lang === "en"
                  ? enLangContent.aboutHireMeTitle
                  : frLangContent.aboutHireMeTitle}
              </h2>
              <p>
                {lang === "en"
                  ? enLangContent.aboutHireMeContent
                  : frLangContent.aboutHireMeContent}
              </p>
              <Button
                text={`${
                  lang === "en"
                    ? enLangContent.resumeButtonText
                    : frLangContent.resumeButtonText
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`translate-x-full ${
          !resumeOpen ? "animate-resumeToggleReverse" : "animate-resumeToggle"
        } w-full md:w-[48%] absolute right-0 top-0 h-full flex justify-center items-start gap-2 bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out`}
      >
        <button
          className="h-full text-2xl bg-[#e9e9e9] px-2 hover:bg-[#fff] dark:bg-[#b7b7b7] dark:hover:bg-[#878787] transition duration-200"
          onClick={handleResume}
        >
          <HiOutlineChevronDoubleRight />
        </button>
        <Resume />
      </div>
    </div>
  );
};

export default About;
