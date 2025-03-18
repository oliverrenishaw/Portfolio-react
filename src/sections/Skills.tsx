import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../themeToggle";

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/js.png';
import typescriptIcon from '../assets/typescript.png';
import reactIcon from '../assets/react.png';
import gitIcon from '../assets/git.png';
import nodeIcon from '../assets/node.png';
import tailwindcssIcon from '../assets/tailwindcss.png';
import bootstrapIcon from '../assets/bootstrap.png';
import viteIcon from '../assets/vite.png';

const skillDescriptions = {
  HTML: "The foundation of the web, and I like to keep my structures sturdy. I've always said, Life without HTML is like writing a story without words.",
  CSS: "Styling isn't just for fashion; it's for websites too! My CSS skills are so sharp, I sometimes wonder if I missed my calling as a stylist.",
  JavaScript: "While some are searching for the meaning of life, I'm here searching for the missing semicolon. JS keeps me on my toes, ensuring I never miss a beat (or a bracket).",
  TypeScript: 'TypeScript is a strongly typed programming language that builds on JavaScript.',
  Node: "With Node.js in my toolkit, I don't just hang around the event loop. I dive deep into the backend, ensuring everything runs smoothly. After all, why merely node your head in appreciation when you can have a full-on back-end jam session?",
  React: "I like to think of myself as a bit 'reactive'. Thanks to React, I'm breaking UIs into components faster than you can say useState().",
  Vite: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.',
  Git: "I'm so in sync with Git, every time I commit, even my coffee knows it's time for a break. And remember, always be committing!",
  TailwindCSS: 'Some need a compass to navigate, I just need my Tailwind. Building responsive designs faster than the wind can blow.',
  Bootstrap: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>('HTML');

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

  const handleSkillClick = (skill: string) => {
    console.log(`Skill clicked: ${skill}`);
    setSelectedSkill(skill);
  };

  return (
    <section
      className={`w-full h- flex flex-col items-center ${theme === "dark" ? "bg-[#30414d]" : "bg-[#edfafd]"}`}
    >
      <h2
        className={`text-4xl font-rubik font-bold mt-10 ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
      >
        Skills Section
      </h2>
      <div className="mt-40"></div>
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {[
          { src: htmlIcon, skill: "HTML" },
          { src: cssIcon, skill: "CSS" },
          { src: javascriptIcon, skill: "JavaScript" },
          { src: typescriptIcon, skill: "TypeScript" },
          { src: nodeIcon, skill: "Node" },
          { src: reactIcon, skill: "React" },
          { src: viteIcon, skill: "Vite" },
          { src: gitIcon, skill: "Git" },
          { src: tailwindcssIcon, skill: "TailwindCSS" },
          { src: bootstrapIcon, skill: "Bootstrap" },
        ].map(({ src, skill }) => (
          <button
            key={skill}
            className={`flex items-center gap-2 p-2 transition-transform duration-200 hover:scale-95 cursor-pointer ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
            onClick={() => handleSkillClick(skill)}
          >
            <img src={src} alt={skill} className="w-5" />
            <p>{skill}</p>
          </button>
        ))}
      </div>
      <div className="mt-20"></div>
      <div className={`max-w-xl mx-auto p-4 border rounded-lg ${theme === "dark" ? "border-[#ffffff] text-[#ffffff]" : "border-[#000000] text-[#000000]"}`}>
        <p>{skillDescriptions[selectedSkill]}</p>
      </div>
    </section>
  );
};

export default Skills;