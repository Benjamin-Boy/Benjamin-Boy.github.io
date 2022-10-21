// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const LangToggle = () => {
  const { langEffect, handleLang } = useInteractionsContext();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-0.5 leading-4">
        <button
          className={`${langEffect !== "en" && "text-[#9c9c9c]"}`}
          onClick={() => handleLang("en")}
        >
          En
        </button>
        <span>/</span>
        <button
          className={`${langEffect !== "fr" && "text-[#9c9c9c]"}`}
          onClick={() => handleLang("fr")}
        >
          Fr
        </button>
      </div>
      <div
        className={`scale-x-[0.4] origin-left border border-[#181818] dark:border-[#fdfaf0] ${
          langEffect === "fr"
            ? "animate-langToggle"
            : langEffect === "en"
            ? "animate-langToggleReverse"
            : null
        } `}
      ></div>
    </div>
  );
};

export default LangToggle;
