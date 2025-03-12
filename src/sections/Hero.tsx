import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const text = "I'm  a  Software  Engineer | Web  Developer".split(" ");
  const socialLinks = [
    { href: 'https://github.com', src: 'src/assets/github-dark.svg', alt: 'GitHub' },
    { href: 'https://linkedin.com', src: 'src/assets/linkedin-dark.svg', alt: 'LinkedIn' },
    { href: 'https://twitter.com', src: 'src/assets/twitter-dark.svg', alt: 'Twitter' },
  ];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(src/assets/sunset.jpg)', marginTop: '-80px' }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
      <h1 className="relative text-[#ffffff] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Oliver Warner</h1>
      <h2 className="relative text-[#ffffff] sm:text-xl md:text-2xl lg:text-3xl flex mb-10">
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
              src={link.src}
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