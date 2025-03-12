import React from 'react';
import { useTheme } from '../themeToggle';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#091218]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl font-rubik font-bold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        Skills Section
      </h2>
    </section>
  );
};

export default Skills;