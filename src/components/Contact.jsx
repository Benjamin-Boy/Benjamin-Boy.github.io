import React from "react";

// Imports custom contexts
import { useInteractionsContext } from "../contexts/InteractionsContext";

const Contact = () => {
  const { darkTheme, lang, enLangContent, frLangContent } =
    useInteractionsContext();

  return (
    <div className={darkTheme ? "dark" : null}>
      <div
        className="w-full h-[calc(83vh-50px)] flex flex-col items-center bg-[#fdfaf0] text-[#181818] gap-16 dark:bg-[#181818] dark:text-[#fdfaf0] transition duration-200 ease-in-out"
        name="contact"
      >
        <h1 className="text-6xl">
          {lang === "en"
            ? enLangContent.contactTitle
            : frLangContent.contactTitle}
        </h1>
        <form
          action="https://formspree.io/f/mlevllzz"
          method="POST"
          className="w-[80%] max-w-[500px] flex flex-col items-center gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder={`${
              lang === "en"
                ? enLangContent.contactNameInput
                : frLangContent.contactNameInput
            }`}
            className="p-2 w-full h-9 rounded-xl outline-0 focus:border focus:border-2 focus:border-[#97c7ff] bg-[#181818] text-[#fdfaf0] dark:bg-[#fdfaf0]"
          />
          <input
            type="email"
            name="_replyto"
            placeholder={`${
              lang === "en"
                ? enLangContent.contactEmailInput
                : frLangContent.contactEmailInput
            }`}
            className="p-2 w-full h-9 rounded-xl outline-0 focus:border focus:border-2 focus:border-[#97c7ff] bg-[#181818] text-[#fdfaf0] dark:bg-[#fdfaf0]"
          />
          <textarea
            type="text"
            name="message"
            placeholder={`${
              lang === "en"
                ? enLangContent.contactMessageInput
                : frLangContent.contactMessageInput
            }`}
            className="p-2 w-full h-60 rounded-xl outline-0 focus:border focus:border-2 focus:border-[#97c7ff] bg-[#181818] text-[#fdfaf0] dark:bg-[#fdfaf0]"
          />
          <button
            type="submit"
            value="send"
            className="w-full h-9 rounded-xl bg-[#97c7ff] text-[#fdfaf0] text-2xl font-bold border border-2 border-[#97c7ff] hover:border-[#97c7ff] hover:bg-[#fdfaf0] hover:text-[#97c7ff] dark:hover:bg-[#181818]"
          >
            {lang === "en"
              ? enLangContent.contactSendButtonText
              : frLangContent.contactSendButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
