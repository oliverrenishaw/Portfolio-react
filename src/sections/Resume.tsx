import React from 'react';
import { useTheme } from '../themeToggle';

const Resume: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-12 md:px-24 pt-16 pb-8 ${theme === 'dark' ? 'bg-[#30414d]' : 'bg-[#ffffff]'}`}
    >
      <h2 className={`text-4xl font-rubik font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-8`}>
        Resume Section
      </h2>
      <div className="flex flex-col md:flex-row w-full mt-8">
        {/* Left side */}
        <div className="md:w-1/2 pl-16 pr-4 relative">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Education</h3>
            <div className="timeline relative">
              {/* Timeline line */}
              <div className={`absolute left-0 top-0 h-full border-l-2 ${theme === 'dark' ? 'border-white' : 'border-black'}`}></div>
              {/* Add your education items here */}
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4`}>
                  2021-2024
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>BSc Computing for Business & Management</h4>
                  <div className="timeline-location font-semibold italic">University of Sussex</div>
                  <div className="timeline-grade">First Class</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4`}>
                  2019-2021
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>A-Level's</h4>
                  <div className="timeline-location font-semibold italic">Wheatley Park Sixth Form</div>
                  <div className="timeline-grade">ABB - Computer Science, Mathematics, Geography</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4`}>
                  2014-2019
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>GCSE's</h4>
                  <div className="timeline-location font-semibold italic">Wheatley Park Secondary School</div>
                  <div className="timeline-grade">10 GCSEs passed, including Mathematics & English</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Leadership Positions</h3>
            <div className="timeline relative">
              {/* Timeline line */}
              <div className={`absolute left-0 top-0 h-full border-l-2 ${theme === 'dark' ? 'border-white' : 'border-black'}`}></div>
              {/* Add your leadership items here */}
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4`}>
                  Sep-Dec 2024
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Mentoring Buddy Scheme</h4>
                  <div className="timeline-location font-semibold italic">University of Sussex</div>
                  <div className="timeline-content">I supported 3 international students by connecting them with societies and resources, and organising meetings and tours around Brighton city.</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4`}>
                  Sep-June 2024
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Finance Society Social Media Manager</h4>
                  <div className="timeline-location font-semibold italic">University of Sussex</div>
                  <div className="timeline-content">I create weekly social media content for society events and contribute ideas in committee meetings.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 pl-16 pr-4 relative">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Work Experience</h3>
            <div className="timeline relative">
              {/* Timeline line */}
              <div className={`absolute left-0 top-0 h-full border-l-2 ${theme === 'dark' ? 'border-white' : 'border-black'}`}></div>
              {/* Add your work experience items here */}
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4 md:w-24 md:text-right`}>
                  Sep 2024-Present
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Graduate Analyst Programmer</h4>
                  <div className="timeline-company font-semibold italic">Renishaw</div>
                  <div className="timeline-location font-semibold italic">Bristol</div>
                  <div className="timeline-content">On a 2-year grad scheme</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4 md:w-24 md:text-right`}>
                  June-Aug 2023
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Web Developer Intern</h4>
                  <div className="timeline-company font-semibold italic">Unusual Technologies</div>
                  <div className="timeline-location font-semibold italic">Brighton</div>
                  <div className="timeline-content">Modernised the company website using WordPress, implemented an AI chatbot, collaborated on innovative solutions, designed a private scheduler on AWS, and developed a Christmas-themed escape room game in Unity.</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4 md:w-24 md:text-right`}>
                  Sep 2023-Aug 2024
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Customer Service Assistant</h4>
                  <div className="timeline-company font-semibold italic">Sussex Student Union Bar</div>
                  <div className="timeline-location font-semibold italic">Brighton</div>
                  <div className="timeline-content">Enhanced multitasking and problem-solving skills in a fast-paced bar, delivering excellent customer service and fostering a welcoming atmosphere.</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4 md:w-24 md:text-right`}>
                  June-Sep 2022
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Sales Assistant</h4>
                  <div className="timeline-company font-semibold italic">Next</div>
                  <div className="timeline-location font-semibold italic">Oxford</div>
                  <div className="timeline-content">Developed strong work ethic and communication skills, efficiently managed stock, and maintained positive relationships with management and colleagues.</div>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className={`timeline-date text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} pl-8 mr-4 md:w-24 md:text-right`}>
                  June-Sep 2022
                </div>
                <div className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === 'dark' ? 'bg-[#091218] text-white' : 'bg-[#f0f0f0] text-black'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#ff9934]' : 'text-[#30414d]'}`}>Rugby Coach</h4>
                  <div className="timeline-company font-semibold italic">Chinnor Rugby Club</div>
                  <div className="timeline-location font-semibold italic">Thame</div>
                  <div className="timeline-content">Conducted personalised training sessions for children, taught teamwork and acceptable behavior, and ensured health and safety compliance.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;