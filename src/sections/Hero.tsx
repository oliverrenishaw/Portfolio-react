import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeToggle';


const Hero: React.FC = () => {
  const { theme } = useTheme();
  const text = "I'm   a   Software   Engineer  |  Web   Developer".split(" ");
  const socialLinks = [
    { href: 'https://github.com/', darkSrc: 'src/assets/github-white.png', lightSrc: 'src/assets/github-black.png', alt: 'GitHub' },
    { href: 'https://gb.linkedin.com/', darkSrc: 'src/assets/linkedin-white.png', lightSrc: 'src/assets/linkedin-black.png', alt: 'LinkedIn' },
    { href: 'https://x.com/', darkSrc: 'src/assets/twitter-white.png', lightSrc: 'src/assets/twitter-black.png', alt: 'Twitter' },
  ];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(src/assets/${theme === 'dark' ? 'sunset.jpg' : 'lake.png'})`, marginTop: '-80px' }}
    >
    <div className="absolute inset-0 bg-[#ffffff] dark:bg-[#000000] opacity-50"></div>
      <h1 className="relative text-[#000] dark:text-[#ffffff] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Oliver Warner</h1>
      <h2 className="relative text-[#000] dark:text-[#ffffff] sm:text-xl md:text-2xl lg:text-3xl flex mb-10">
        {text.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className="mr-1 z-20"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <div className="relative flex space-x-4 mt-4">
        {socialLinks.map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
            <img
              src={theme === 'dark' ? link.darkSrc : link.lightSrc}
              alt={link.alt}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;