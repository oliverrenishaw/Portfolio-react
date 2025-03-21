import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useTheme } from "../themeToggle";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar")!.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full h-16 flex items-center justify-center px-4 z-50">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none sm:block md:hidden"
        >
          <svg
            className={`w-8 h-8 transition-transform duration-300 ${isOpen ? "transform rotate-90" : ""}`}
            fill="none"
            stroke={theme === "dark" ? "white" : "black"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <nav
          className={`relative hidden sm:hidden md:flex h-12 justify-center items-center space-x-2 sm:space-x-4 p-1 sm:p-2 rounded-[25px] ${theme === "dark" ? "bg-gradient-to-r from-[#ff9933] to-[#d5914e]" : "bg-gradient-to-r from-[#80bbc2] to-[#bbd7e1]"}`}
        >
          <a
            href="#Home"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            Home
          </a>
          <a
            href="#About"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            About
          </a>
          <a
            href="#Resume"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            Resume
          </a>
          <a
            href="#Projects"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            Projects
          </a>
          <a
            href="#Skills"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            Skills
          </a>
          <a
            href="#Contact"
            className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
          >
            Contact
          </a>
          <div className="absolute bottom-0 h-3 left-0 w-[calc(100%-2rem)]">
            <div
              id="myBar"
              className="h-[0.2rem] bg-[#000000] dark:bg-[#ffffff] w-0"
            ></div>
          </div>
        </nav>
        <button
          onClick={handleThemeToggle}
          className={`ml-4 focus:outline-none transform transition-transform duration-300 hover:scale-[1.3] ${isRotated ? "rotate-90" : ""}`}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <img
              src="src/assets/sun-white.svg"
              alt="Light Mode"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ) : (
            <img
              src="src/assets/moon-black.png"
              alt="Dark Mode"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          )}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
      >
        <nav
          className={`sm:block md:hidden fixed top-16 left-0 w-full flex flex-col items-start space-y-2 p-4 rounded-b-[25px] z-50 ${theme === "dark" ? "bg-gradient-to-b from-[#ff9933] to-[#e8a35f]" : "bg-gradient-to-b from-[#80bbc2] to-[#bbd7e1]"}`}
        >
          <a
            href="#Home"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#About"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#Resume"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            Resume
          </a>
          <a
            href="#Projects"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#Skills"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            Skills
          </a>
          <a
            href="#Contact"
            className="nav-link w-full text-center py-2 text-black hover:text-white focus:text-white dark:text-white dark:hover:text-black dark:focus:text-black"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
