import React from 'react';
import { useTheme } from '../themeToggle';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#091218]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        About Section
      </h2>
    </section>
  );
};

export default About;