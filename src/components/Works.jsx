// Imports React components
import PageDot from "./PageDot";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Imports React icons
import { SiGithub } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";

// Imports local data
import { worksData } from "../data/data";

const Works = () => {
  const {
    darkTheme,
    lang,
    enLangContent,
    frLangContent,
    recordsPerPage,
    currentWorkPage,
  } = useInteractionsContext();

  const indexOfLastRecord = currentWorkPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = worksData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className={darkTheme ? "dark" : null}>
      <div
        className="w-full h-[calc(100vh-50px)] flex flex-col items-center justify-between gap-6 bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out py-4"
        name="works"
      >
        <h1 className="text-6xl">
          {lang === "en" ? enLangContent.worksTitle : frLangContent.worksTitle}
        </h1>
        <div className="w-[80%] h-full flex flex-col justify-between t gap-2 xl:flex-row xl:justify-start xl:flex-wrap xl:items-start xl:w-[60%]">
          {currentRecords.map(({ id, github, host, image, tags }) => {
            return (
              <div
                key={id}
                style={{
                  background: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
                className="relative overflow-hidden grow flex flex-col xl:w-[48%] h-[35%] max-h-[170px] xl:max-h-[250px] xl:max-w-[570px] shadow-[#181818]"
              >
                <div className="absolute origin-center z-20 w-full flex gap-1 p-2">
                  {tags.map(({ skillId, skillName, skillIcon }) => {
                    return (
                      <div
                        key={skillId}
                        className="relative bg-[#fdfaf0] dark:bg-[#fdfaf0] dark:text-[#181818] p-2 rounded-2xl flex justify-center items-center text-md group"
                      >
                        {skillIcon}
                        <h3 className="z-20 px-2 text-[#181818] bg-[#fdfaf0] text-md absolute top-4 left-4 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                          {skillName}
                        </h3>
                      </div>
                    );
                  })}
                </div>
                <div className="z-10 opacity-0 hover:opacity-100 hover:bg-[#181818D9] text-[#fdfaf0] h-full flex flex-col justify-end gap-2.5 p-4 transition duration-200 ease-in-out">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-bold">
                      {lang === "en" &&
                      id === enLangContent.worksEntity[id - 1].id
                        ? enLangContent.worksEntity[id - 1].name
                        : lang === "fr" &&
                          id === frLangContent.worksEntity[id - 1].id
                        ? frLangContent.worksEntity[id - 1].name
                        : null}
                    </h3>
                    <div className="flex justify-center items-center gap-5">
                      {host !== "" && (
                        <button className="flex justify-center items-center p-1.5 text-3xl rounded-lg text-[#181818] bg-[#fdfaf0] border border-[#fdfaf0] hover:bg-[#393939] hover:text-[#fdfaf0] hover:border-[#fdfaf0] dark:bg-[#181818] dark:text-[#fdfaf0] dark:border-[#181818] dark:hover:bg-[#e0ded6] dark:hover:text-[#181818] dark:hover:border-[#181818] transition duration-200 ease-in-out">
                          <a href={host} target="_blank" rel="noreferrer">
                            <AiOutlineSearch />
                          </a>
                        </button>
                      )}
                      <button className="flex justify-center items-center p-1.5 text-3xl rounded-lg text-[#181818] bg-[#fdfaf0] border border-[#fdfaf0] hover:bg-[#393939] hover:text-[#fdfaf0] hover:border-[#fdfaf0] dark:bg-[#181818] dark:text-[#fdfaf0] dark:border-[#181818] dark:hover:bg-[#e0ded6] dark:hover:text-[#181818] dark:hover:border-[#181818] transition duration-200 ease-in-out">
                        <a href={github} target="_blank" rel="noreferrer">
                          <SiGithub />
                        </a>
                      </button>
                    </div>
                  </div>
                  <p>
                    {lang === "en" &&
                    id === enLangContent.worksEntity[id - 1].id
                      ? enLangContent.worksEntity[id - 1].description
                      : lang === "fr" &&
                        id === frLangContent.worksEntity[id - 1].id
                      ? frLangContent.worksEntity[id - 1].description
                      : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <PageDot />
      </div>
    </div>
  );
};

export default Works;
