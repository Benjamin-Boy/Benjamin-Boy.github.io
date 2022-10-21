// Imports React Components
import Button from "./Button";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Import assets files
import backgroundImage from "../assets/images/avatar.png";

const Home = () => {
  const { darkTheme, lang, enLangContent, frLangContent } =
    useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center gap-[10%] md:p-4 xl:gap-[15%] md:flex-row md:justify-end bg-[#fdfaf0] text-[#181818] dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out"
        name="home"
      >
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl font-bold tracking-wide">
            {enLangContent.name}
          </h1>
          <h3 className="text-2xl">
            {lang === "en" ? enLangContent.job : frLangContent.job}
          </h3>
          <Button text="Portfolio" />
        </div>
        <div className="w-[80%] max-w-md md:w-[40%] md:max-w-3xl border-2 rounded-[50%] overflow-hidden">
          <img src={backgroundImage} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default Home;
