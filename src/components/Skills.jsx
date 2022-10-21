// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Imports React components
import PageDot from "./PageDot";

// Imports local data
import { skillsData } from "../data/data";

const Skills = () => {
  const { darkTheme, lang, enLangContent, frLangContent } =
    useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div
        className="relative w-full h-[calc(100vh-50px)] flex flex-col items-center justify-between gap-4 bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out py-4"
        name="skills"
      >
        <h1 className="text-6xl">
          {lang === "en"
            ? enLangContent.skillsTitle
            : frLangContent.skillsTitle}
        </h1>
        <div className="w-[80%] h-full md:flex md:flex-col md:justify-center md:gap-8 xl:flex xl:flex-row justify-center gap-8">
          <div className="flex justify-center items-center flex-wrap gap-2 h-full xl:w-[33%]">
            {skillsData.map(({ id, name, icon }) => {
              return (
                <div
                  key={id}
                  className="relative min-w-[100px] w-[20%] h-24 rounded-md text-6xl flex items-center justify-center hover:border hover:border-[#181818] dark:hover:border-[#fdfaf0] shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] icon transition duration-300 ease-in-out group"
                >
                  {icon}
                  <h3 className="absolute top-24 text-lg opacity-0 group-hover:opacity-100">
                    {name}
                  </h3>
                </div>
              );
            })}
          </div>
          {/* <div className="hidden flex-col items-center gap-2 md:flex md:justify-start md:items-start xl:flex xl:justify-start xl:items-start xl:w-[33%]">
            <h2 className="text-2xl">
              {lang === "en"
                ? enLangContent.skillsIDoTitle
                : frLangContent.skillsIDoTitle}
            </h2>
            {lang === "en"
              ? enLangContent.skillsIDoContent.map((sentence) => {
                  return <p className="text-justify">{sentence}</p>;
                })
              : frLangContent.skillsIDoContent.map((sentence) => {
                  return <p className="text-justify">{sentence}</p>;
                })}
          </div> */}
          <div className="hidden flex flex-col gap-2 md:flex md:justify-start md:items-start xl:flex xl:flex-row xl:justify-center xl:w-[100%]">
            <div className="xl:flex flex-col xl:justify-start xl:w-[50%] h-full">
              <h2 className="text-2xl">
                {lang === "en"
                  ? enLangContent.skillsIDoTitle
                  : frLangContent.skillsIDoTitle}
              </h2>
              {lang === "en"
                ? enLangContent.skillsIDoContent.map((sentence, index) => {
                    return (
                      <p key={index} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })
                : frLangContent.skillsIDoContent.map((sentence, index) => {
                    return (
                      <p key={index} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })}
            </div>
            <div className="xl:flex flex-col xl:justify-center xl:w-[50%] h-full">
              <h2 className="text-2xl">
                {" "}
                {lang === "en"
                  ? enLangContent.skillsHireMeTitle
                  : frLangContent.skillsHireMeTitle}
              </h2>

              {lang === "en"
                ? enLangContent.skillsHireMeContent.map((sentence, index) => {
                    return (
                      <p key={index} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })
                : frLangContent.skillsHireMeContent.map((sentence, index) => {
                    return (
                      <p key={index} className="text-justify">
                        {sentence}
                      </p>
                    );
                  })}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <PageDot />
        </div>
      </div>
    </div>
  );
};

export default Skills;
