import React from 'react';
import { useTheme } from '../themeToggle';

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#091218]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        Projects Section
      </h2>
    </section>
  );
};

export default Projects;