import React from 'react';
import { useTheme } from '../themeToggle';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-2 md:px-10 pt-16 pb-8 ${theme === 'dark' ? 'bg-[#091218]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl font-rubik font-bold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        About
      </h2>
      <p className={`mt-8 text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        Computer Science graduate from the University of Sussex, working as an Analyst Programmer for an engineering & manufacturing company now with a passion for technology and a deep commitment to learning and growth in the technology field.
      </p>
      <div className="flex flex-col md:flex-row mt-12 w-full">
        <div className="md:w-1/2">
          <h3 className={`text-2xl ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
            Software Engineer & Frontend Developer
          </h3>
          <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
            description here......
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Degree:</h4>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Computer Science with Business & Management</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Age:</h4>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>21</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>City:</h4>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Bristol/Oxford</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>Email:</h4>
              <a href="mailto:oliver.warner121@gmail.com" className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-blue-500`}>oliver.warner121@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img src="public/profile-img.jpg" alt="Hero" className="w-1/2 h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;