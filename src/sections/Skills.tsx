import React, { useEffect, useRef } from "react";
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
import phpIcon from '../assets/php.png';
import figmaIcon from '../assets/figma.png';
import csIcon from '../assets/cs.png';
import vercelIcon from '../assets/vercel.jpg';
import azureIcon from '../assets/azure-devops.png';
import vitestIcon from '../assets/vitest.png';
import postmanIcon from '../assets/postman.jpg';
import nextjsIcon from '../assets/nextjs.png';
import consciaIcon from '../assets/conscia.png';
import confluenceIcon from '../assets/confluence.png';

const skills = [
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
  { src: phpIcon, skill: "PHP" },
  { src: figmaIcon, skill: "Figma" },
  { src: csIcon, skill: "ContentStack" },
  { src: vercelIcon, skill: "Vercel" },
  { src: azureIcon, skill: "Azure" },
  { src: vitestIcon, skill: "Vitest" },
  { src: postmanIcon, skill: "Postman" },
  { src: nextjsIcon, skill: "NextJs" },
  { src: consciaIcon, skill: "Conscia" },
  { src: confluenceIcon, skill: "Confluence" },
];

const Skills: React.FC = () => {
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
      className={`w-full flex flex-col items-center ${theme === "dark" ? "bg-[#30414d]" : "bg-[#edfafd]"} pb-16`}
    >
      <h2
        className={`text-4xl font-rubik font-bold mt-10 ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        Skills Section
      </h2>
      <div className="mt-40"></div>
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 ml-14"
      >
        {skills.map(({ src, skill }, index) => (
          <div
            key={skill}
            className={`relative w-28 h-28 md:w-32 md:h-32 ${theme === "dark" ? "bg-[#df8b38]" : "bg-[#8cc1c7]"} clip-hexagon transition-transform duration-200 hover:scale-95 cursor-pointer`}
            style={{
              marginLeft: `${
                Math.floor(index / 5) % 2 === 1
                  ? '-4.5rem'
                  : Math.floor(index / 3) % 2 === 1 && window.innerWidth >= 768 && window.innerWidth < 1024
                  ? '-4.5rem'
                  : Math.floor(index / 2) % 2 === 1 && window.innerWidth < 768
                  ? '-4.5rem'
                  : '0'
              }`,
              marginTop: `${index >= 5 ? '-1rem' : '0'}`,
            }}
          >
            <img src={src} alt={skill} className="w-16 h-16 absolute inset-0 m-auto" />
            <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-[#30414d] hover:opacity-90 flex items-center justify-center">
              <div className="text-white text-sm text-center">{skill}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
