import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../themeToggle";

interface Repo {
  id: number;
  name: string;
  created_at: string;
  html_url: string;
  topics: string[];
}

interface Project {
  title: string;
  date: string;
  description: string;
  skills: Skill[];
  category?: string;
  url: string;
}

interface Skill {
  name: string;
  percentage: string;
  color: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getRandomColor = (isDarkMode: boolean): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      if (isDarkMode) {
        // Generate lighter colors for dark mode
        color += letters[Math.floor(Math.random() * 5) + 10]; // Picks letters from A to F
      } else {
        // Generate darker colors for light mode
        color += letters[Math.floor(Math.random() * 5)]; // Picks letters from 0 to 9
      }
    }
    return color;
  };

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Connecting to GitHub API...');
        const response = await fetch('https://api.github.com/users/oliverwarner121/repos', {
          headers: {
            Authorization: `token ${API_KEY}`,
          },
        });
        const repos: Repo[] = await response.json();
        const projectsData = await Promise.all(
          repos.map(async (repo: Repo) => {
            const readmeResponse = await fetch(`https://api.github.com/repos/oliverwarner121/${repo.name}/readme`, {
              headers: {
                Authorization: `token ${API_KEY}`,
                Accept: 'application/vnd.github.v3.raw',
              },
            });
            const readme = await readmeResponse.text();
            const firstLine = readme.split('\n')[0];
            const languagesResponse = await fetch(`https://api.github.com/repos/oliverwarner121/${repo.name}/languages`, {
              headers: {
                Authorization: `token ${API_KEY}`,
              },
            });
            const languages = await languagesResponse.json();
            const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);
            const skills: Skill[] = Object.entries(languages).map(([name, bytes]) => ({
              name,
              percentage: `${((bytes / totalBytes) * 100).toFixed(2)}%`,
              color: getRandomColor(isDarkMode), // Pass the theme mode to the function
            }));
            return {
              title: repo.name,
              date: new Date(repo.created_at).toLocaleDateString('en-UK', { month: 'long', year: 'numeric' }),
              description: firstLine,
              skills,
              category: repo.topics[0],
              url: repo.html_url,
            };
          })
        );
        console.log('Fetched projects successfully!');
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [isDarkMode]); // Re-fetch projects when theme changes

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      htmlCard.classList.remove("animate-move");
      void htmlCard.offsetWidth;
      htmlCard.classList.add("animate-move");
    });
  }, [selectedCategory]);

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-4 md:px-20 pt-16 pb-16 ${theme === "dark" ? "bg-[#091218]" : "bg-[#ffffff]"}`}
    >
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000 w-full"
      >
        <h2
          className={`text-4xl flex items-center justify-center font-rubik font-bold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
        >
          Projects
        </h2>
        <p
          className={`mt-8 flex items-center justify-center text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
        >
          Click a project card to see behind the scenes.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {["all", "web", "app", "game"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-transform duration-300 transform hover:scale-95 ${theme === "dark" ? (selectedCategory === category ? "bg-[#df8b38] text-[#ffffff]" : "bg-[#30414d] text-[#ffffff]") : selectedCategory === category ? "bg-[#8cc1c7] text-[#000000]" : "bg-[#e0f7fa] text-[#000000]"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div
          className="grid gap-4 mt-12 w-full px-2 md:px-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            justifyContent: "center",
          }}
        >
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card bg-[#8cc1c7] dark:bg-[#30414d] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-300 hover:scale-95"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-[#000] dark:text-[#ff9934] font-rubik">
                  {project.title}
                </h3>
                <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-[#000] dark:text-[#ff9934] font-rubik">
                  {project.date}
                </h3>
              </div>
              <p className="text-[#000000] dark:text-[#ffffff] mb-4">
                {project.description}
              </p>
              <div className="relative w-full bg-gray-200 dark:bg-[#6f6e6e] h-2.5">
                {project.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="h-2.5 absolute top-0"
                    style={{
                      width: skill.percentage,
                      backgroundColor: getRandomColor(isDarkMode),
                      left: `${project.skills.slice(0, skillIndex).reduce((acc, curr) => acc + parseFloat(curr.percentage), 0)}%`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {project.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name} {skill.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
