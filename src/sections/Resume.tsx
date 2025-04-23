import React, { useEffect, useRef } from "react";
import { useTheme } from "../themeToggle";

const education = [
  {
    name: "BSc Computing for Business & Management Degree",
    place: "University of Sussex",
    description: "Obtained a First Class. My dissertation project was 'Book Recommendation Engine'.",
    date: "2021-2024"
  },
  {
    name: "A-Levels",
    place: "Wheatley Park Sixth Form",
    description: "Obtained ABB in Computer Science, Mathematics, Geography. Also obtained a D in AS Sociology.",
    date: "2019-2021"
  },
  {
    name: "GCSEs",
    place: "Wheatley Park Secondary School",
    description: "Obtained 10 GCSEs (Mathematics, English Lit & Lang, Physics, Chemistry, Biology, Computer Science, Geography, French, Music)",
    date: "2014-2019"
  }
];

const leadership = [
  {
    name: "Mentoring Buddy Scheme",
    place: "University of Sussex",
    description: "I supported 3 international students by connecting them with societies and resources, and organising meetings and tours around Brighton city.",
    date: "Sep-Dec 2024"
  },
  {
    name: "Finance Society Social Media Manager",
    place: "University of Sussex",
    description: "I created weekly social media content for society events and contributed ideas in committee meetings.",
    date: "Sep-June 2024"
  }
];

const experience = [
  {
    name: "Graduate Analyst Programmer",
    company: "Renishaw",
    place: "Bristol",
    description: "On a 2-year graduate scheme. I am currently working as a frontend developer on a big project for the company's website.",
    date: "Sep 2024-Present"
  },
  {
    name: "Web Developer Intern",
    company: "Unusual Technologies",
    place: "Brighton",
    description: "Modernised the company website using WordPress, implemented an AI chatbot, collaborated on innovative solutions, designed a private scheduler on AWS, and developed a Christmas-themed escape room game in Unity.",
    date: "June-Aug 2023"
  },
  {
    name: "Customer Service Assistant",
    company: "Sussex Student Union Bar",
    place: "Brighton",
    description: "Enhanced multitasking and problem-solving skills in a fast-paced bar, delivering excellent customer service and fostering a welcoming atmosphere.",
    date: "Sep 2023-Aug 2024"
  },
  {
    name: "Sales Assistant",
    company: "Next",
    place: "Oxford",
    description: "Developed strong work ethic and communication skills, efficiently managed stock, and maintained positive relationships with management and colleagues.",
    date: "June-Sep 2022"
  },
  {
    name: "Rugby Coach",
    company: "Chinnor Rugby Club",
    place: "Thame",
    description: "Conducted personalised training sessions for children, taught teamwork and acceptable behavior, and ensured health and safety compliance.",
    date: "June-Sep 2022"
  }
];

const Resume: React.FC = () => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fly-up");
        }
      },
      { threshold: 0.1 },
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-4 md:px-20 pt-16 pb-8 ${theme === "dark" ? "bg-[#30414d]" : "bg-[#edfafd]"}`}
    >
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000"
      >
        <h2
          className={`text-4xl flex items-center justify-center font-rubik font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-8`}
        >
          Resume Section
        </h2>
        <p
          className={`mt-4 flex items-center justify-center text-lg ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Click here to download my resume
          <a
            href="path/to/your/resume.pdf"
            download
            className="ml-2 flex items-center justify-center p-2 rounded-full"
          >
            <img
              src={
                theme === "dark"
                  ? "src/assets/download-white.png"
                  : "src/assets/download-black.png"
              }
              alt="Download Resume"
              className="w-6 h-6 sm:w-8 sm:h-8 transform transition-transform duration-300 hover:scale-[1.3]"
            />
          </a>
        </p>

        <div className="flex flex-col md:flex-row w-full mt-8">
          {/* Left side */}
          <div className="md:w-1/2 pl-10 pr-4 relative">
            <div className="mb-8">
              <h3
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-[#ff9934]" : "text-[#81bbc2]"}`}
              >
                Education
              </h3>
              <div className="timeline relative">
                <div
                  className={`absolute left-0 top-0 h-full border-l-2 ${theme === "dark" ? "border-white" : "border-black"}`}
                ></div>
                {/* Education */}
                {education.map((item, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <div
                      className={`timeline-date text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} pl-8 mr-4`}
                    >
                      {item.date}
                    </div>
                    <div
                      className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === "dark" ? "bg-[#091218] text-white" : "bg-[#b1bcbe] text-black"}`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-[#ff9934]" : "text-[#000000]"}`}
                      >
                        {item.name}
                      </h4>
                      <div className="timeline-location font-semibold italic">
                        {item.place}
                      </div>
                      <div className="timeline-grade">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-[#ff9934]" : "text-[#81bbc2]"}`}
              >
                Leadership Positions
              </h3>
              <div className="timeline relative">
                <div
                  className={`absolute left-0 top-0 h-full border-l-2 ${theme === "dark" ? "border-white" : "border-black"}`}
                ></div>
                {/* Leadership Positions */}
                {leadership.map((item, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <div
                      className={`timeline-date text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} pl-8 mr-4`}
                    >
                      {item.date}
                    </div>
                    <div
                      className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === "dark" ? "bg-[#091218] text-white" : "bg-[#b1bcbe] text-black"}`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-[#ff9934]" : "text-[#000000]"}`}
                      >
                        {item.name}
                      </h4>
                      <div className="timeline-location font-semibold italic">
                        {item.place}
                      </div>
                      <div className="timeline-content">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 pl-10 pr-4 relative">
            <div className="mb-8">
              <h3
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-[#ff9934]" : "text-[#81bbc2]"}`}
              >
                Work Experience
              </h3>
              <div className="timeline relative">
                <div
                  className={`absolute left-0 top-0 h-full border-l-2 ${theme === "dark" ? "border-white" : "border-black"}`}
                ></div>
                {/* Work Experience */}
                {experience.map((item, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <div
                      className={`timeline-date text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} pl-8 mr-4 md:w-24 md:text-right`}
                    >
                      {item.date}
                    </div>
                    <div
                      className={`timeline-item pl-8 md:pl-12 p-4 rounded-lg ${theme === "dark" ? "bg-[#091218] text-white" : "bg-[#b1bcbe] text-black"}`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-[#ff9934]" : "text-[#000000]"}`}
                      >
                        {item.name}
                      </h4>
                      <div className="timeline-company font-semibold italic">
                        {item.company}
                      </div>
                      <div className="timeline-location font-semibold italic">
                        {item.place}
                      </div>
                      <div className="timeline-content">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
