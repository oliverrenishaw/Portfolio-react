import React from 'react';
import { useTheme } from '../themeToggle';

const Resume: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full h-screen flex flex-col items-center ${theme === 'dark' ? 'bg-[#30414d]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl font-rubik font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-8`}>
        Resume Section
      </h2>
      <div className="flex flex-row w-full mt-8">
        {/* Left side */}
        <div className="w-1/2 p-4">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Education</h3>
            <div className="timeline">
              {/* Add your education items here */}
              <div className="timeline-item">
                <div className="timeline-date">Month Year</div>
                <div className="timeline-content">Education details</div>
              </div>
              {/* Repeat for other education items */}
            </div>
          </div>
          <div className="mb-8">
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Leadership Positions</h3>
            <div className="timeline">
              {/* Add your leadership items here */}
              <div className="timeline-item">
                <div className="timeline-date">Month Year</div>
                <div className="timeline-content">Leadership details</div>
              </div>
              {/* Repeat for other leadership items */}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-1/2 p-4">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Work Experience</h3>
            <div className="timeline">
              {/* Add your work experience items here */}
              <div className="timeline-item">
                <div className="timeline-date">Month Year</div>
                <div className="timeline-content">Work experience details</div>
              </div>
              {/* Repeat for other work experience items */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;