import { useState } from "react";

// Imports React icons
import { RiSunLine, RiMoonFill } from "react-icons/ri";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const ThemeToggle = () => {
  const { darkTheme, handleTheme } = useInteractionsContext();
  const [effect, setEffect] = useState(false);

  return (
    <div className="text-2xl flex" onClick={handleTheme}>
      {darkTheme ? (
        <button
          className={`${effect && "animate-wiggle"} `}
          onClick={() => setEffect(true)}
          onAnimationEnd={() => setEffect(false)}
        >
          <RiMoonFill />
        </button>
      ) : (
        <button
          className={`${effect && "animate-wiggle"} `}
          onClick={() => setEffect(true)}
          onAnimationEnd={() => setEffect(false)}
        >
          <RiSunLine />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
