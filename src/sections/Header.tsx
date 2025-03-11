import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full h-16 flex items-center justify-center px-4 z-50" style={{ backgroundColor: 'rgba(16, 33, 43, 1)' }}>
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none sm:block md:hidden"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <nav className="hidden sm:hidden md:flex bg-[#ff9933] h-12 justify-center items-center space-x-2 sm:space-x-4 p-1 sm:p-2 rounded-[25px]">
          <a href="#hero" className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white">Hero</a>
          <a href="#about" className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white">About</a>
          <a href="#projects" className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white">Projects</a>
          <a href="#skills" className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white">Skills</a>
          <a href="#contact" className="nav-link flex items-center justify-center px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white">Contact</a>
        </nav>
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
        <nav className="sm:block md:hidden absolute top-16 left-0 w-full bg-[#ff9933] flex flex-col items-start space-y-2 p-4 rounded-b-[25px]">
          <a href="#hero" className="nav-link w-full text-left py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white" onClick={handleLinkClick}>Hero</a>
          <a href="#about" className="nav-link w-full text-left py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white" onClick={handleLinkClick}>About</a>
          <a href="#projects" className="nav-link w-full text-left py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white" onClick={handleLinkClick}>Projects</a>
          <a href="#skills" className="nav-link w-full text-left py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" className="nav-link w-full text-left py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white" onClick={handleLinkClick}>Contact</a>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;