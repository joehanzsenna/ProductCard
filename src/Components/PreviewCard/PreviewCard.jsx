import React, { useEffect, useState } from "react";
import { cardDetails } from "./PreviewCardDb";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const PreviewCard = () => {
  const [theme, setTheme] = useState(null);

  function toggleTheme () {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    toggleTheme()
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log({ theme });
  };
  const cardList = cardDetails.map((card) => (
    <div
      key={card.id}
      style={{
        background:
          card.header == "SEDANS"
            ? "hsl(31, 77%, 52%)"
            : card.header == "SUVS"
            ? "hsl(184, 100%, 22%)"
            : "hsl(179, 100%, 13%)",
        borderRadius:
          card.id == 1
            ? "1rem 0 0 1rem"
            : card.id == 3
            ? "0 1rem 1rem 0"
            : "none",
      }}
      className="bg-green-400 p-[2rem] dark:text-gray-600 text-white font-lexend"
    >
      <img src={card.icon} alt="" className="mb-3 w-[3rem]" />
      <h1 className="text-2xl mb-4 font-bigs font-medium">{card.header}</h1>
      <p className="text-[16px] md:text-[10px] mb-6 md:mb-14 leading-6 md:leading-5">
        {card.paragraph}
      </p>
      <button className="dark:bg-black dark:text-white bg-slate-50 hover:bg-transparent border-solid dark:border-2 border-2 border-spacing-7 dark:border-black border-white dark:hover:bg-transparent hover:text-white cursor-pointer text-black py-2 px-5 text-xs rounded-2xl ">
        Learn More
      </button>
    </div>
  ));
  return (
    <div className="w-full h-auto md:h-screen  bg-[hsla(0, 0%, 100%, 0.75)] dark:bg-black   flex justify-center items-center flex-row relative">
      <div className="absolute top-20 right-20">
        <button onClick={handleThemeSwitch}>
          {theme === "dark" ? <IoMdSunny className="text-white" /> : <IoMoon />}
        </button>
      </div>

      <div className="flex justify-center items-stretch py-8 md:py-0 px-4 md:px-0 flex-col md:flex-row w-[40rem]">
        {cardList}
      </div>
    </div>
  );
};

export default PreviewCard;
