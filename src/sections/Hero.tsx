import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const text = "I'm  a  Software  Engineer | Web  Developer".split(" ");

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(src/assets/sunset.jpg)' }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
      <h1 className="relative text-[#ffffff] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Oliver Warner</h1>
      <h2 className="relative text-[#ffffff] sm:text-xl md:text-2xl lg:text-3xl flex">
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
    </section>
  );
};

export default Hero;