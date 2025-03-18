import React, { useEffect, useRef } from "react";
import { useTheme } from "../themeToggle";

const About: React.FC = () => {
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
      className={`w-full flex flex-col items-center justify-start px-4 md:px-20 pt-16 pb-8 ${theme === "dark" ? "bg-[#091218]" : "bg-[#ffffff]"}`}
    >
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000"
      >
        <h2
          className={`text-4xl flex items-center justify-center font-rubik font-bold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
        >
          About
        </h2>
        <p
          className={`mt-8 text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
        >
          Computer Science graduate from the University of Sussex, working as an
          Analyst Programmer for an engineering & manufacturing company now with
          a passion for technology and a deep commitment to learning and growth
          in the technology field.
        </p>
        <div className="flex flex-col md:flex-row mt-12 w-full">
          <div className="md:w-1/2">
            <h3
              className={`text-2xl ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
            >
              Software Engineer & Frontend Developer
            </h3>
            <p
              className={`mt-2 text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
            >
              description here......
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4
                  className={`text-lg font-semibold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  Degree:
                </h4>
                <p
                  className={`text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  Computer Science with Business & Management
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-semibold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  Age:
                </h4>
                <p
                  className={`text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  21
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-semibold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  City:
                </h4>
                <p
                  className={`text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  Bristol/Oxford
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-semibold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
                >
                  Email:
                </h4>
                <a
                  href="mailto:oliver.warner121@gmail.com"
                  className={`text-lg ${theme === "dark" ? "text-white" : "text-black"} hover:text-blue-500`}
                >
                  oliver.warner121@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-1/2">
              <img
                src="public/profile-img.jpg"
                alt="Hero"
                className="w-[300px] h-auto object-cover"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-[300px] opacity-0 transition-opacity duration-500 bg-[#8ba36a] hover:opacity-90 flex items-center justify-center">
                <div className="text-white text-xl">Fun fact: I have a twin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;