// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

// Imports local files
import resumeEn from "../assets/pdf/resume-en.pdf";
import resumeFr from "../assets/pdf/resume-fr.pdf";

const Resume = () => {
  const { lang } = useInteractionsContext();
  return (
    <>
      <iframe
        src={`${lang === "en" ? resumeEn : resumeFr}#zoom=100`}
        frameBorder="0"
        scrolling="auto"
        className="w-full h-full "
        title="resume"
      />
    </>
  );
};

export default Resume;
