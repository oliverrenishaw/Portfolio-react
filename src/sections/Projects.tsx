import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../themeToggle";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const projects = [
    {
      title: "Portfolio Website",
      image: "src/assets/portfolio-website.png",
      description: "A portfolio webite displaying my skills as a software engineer.",
      category: "Web",
      skills: [
        { name: "HTML", percentage: "7.5%", color: "#ff6961" },
        { name: "CSS", percentage: "38.2%", color: "#ffb347" },
        { name: "JavaScript", percentage: "27.8%", color: "#ffb07c" },
        { name: "TypeScript", percentage: "26.5%", color: "#77dd77" },
      ],
    },
    {
      title: "E-commerce Website",
      image: "src/assets/ecommerce.png",
      description:
        "An e-commerce website with product listings, shopping cart, and checkout functionality.",
      category: "Web",
      skills: [
        { name: "HTML", percentage: "85%", color: "#ff6961" },
        { name: "CSS", percentage: "75%", color: "#ffb347" },
        { name: "JavaScript", percentage: "95%", color: "#ffb07c" },
      ],
    },
    {
      title: "Calculator App",
      image: "src/assets/calculator.png",
      description: "A simple calculator app with basic arithmetic functions.",
      category: "App",
      skills: [
        { name: "PHP", percentage: "80%", color: "#ffb6c1" },
        { name: "CSS", percentage: "70%", color: "#ffb347" },
        { name: "C#", percentage: "90%", color: "#ff6961" },
      ],
    },
    {
      title: "AI Chatbot",
      image: "src/assets/chatbot.jpg",
      description: "An AI-powered chatbot for customer service.",
      category: "Web",
      skills: [
        { name: "Python", percentage: "90%", color: "#a3dbef" },
        { name: "PHP", percentage: "85%", color: "#ffb6c1" },
        { name: "SQL", percentage: "80%", color: "#b39eb5" }, 
      ],
    },
    {
      title: "Catan Game",
      image: "src/assets/catan.jpg",
      description: "A digital version of the popular board game Catan.",
      category: "Game",
      skills: [
        { name: "Python", percentage: "75%", color: "#a3dbef" },
        { name: "SQL", percentage: "65%", color: "#b39eb5" },
        { name: "JavaScript", percentage: "85%", color: "#ffb07c" },
      ],
    },
    {
      title: "Racing Game",
      image: "src/assets/racing.jpg",
      description: "A 3D racing game with multiple tracks and cars.",
      category: "Game",
      skills: [
        { name: "C#", percentage: "80%", color: "#ff6961" },
        { name: "SQL", percentage: "85%", color: "#b39eb5" },
        { name: "Java", percentage: "70%", color: "#779ecb" },
      ],
    },
    {
      title: "Machine Learning Recommendation System",
      image: "src/assets/book.png",
      description: "A recommendation system using machine learning algorithms.",
      category: "App",
      skills: [
        { name: "Python", percentage: "90%", color: "#a3dbef" },
        { name: "SQL", percentage: "95%", color: "#b39eb5" },
      ],
    },
    {
      title: "Cybersecurity Project",
      image: "src/assets/security.jpg",
      description: "A project focused on enhancing cybersecurity measures.",
      category: "Web",
      skills: [
        { name: "Python", percentage: "80%", color: "#a3dbef" },
        { name: "Java", percentage: "85%", color: "#779ecb" },
        { name: "PHP", percentage: "75%", color: "#ffb6c1" },
      ],
    },
    {
      title: "Weather App",
      image: "src/assets/weather.png",
      description:
        "A weather app that provides current weather information and forecasts.",
      category: "App",
      skills: [
        { name: "HTML", percentage: "80%", color: "#ff6961" },
        { name: "CSS", percentage: "70%", color: "#ffb347" },
        { name: "JavaScript", percentage: "90%", color: "#ffb07c" },
      ],
    },
  ];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-4 md:px-20 pt-16 pb-8 ${theme === "dark" ? "bg-[#091218]" : "bg-[#ffffff]"}`}
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
          {["All", "Web", "App", "Game"].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-transform duration-300 transform hover:scale-95 ${theme === "dark" ? (selectedCategory === category ? "bg-[#df8b38] text-[#ffffff]" : "bg-[#30414d] text-[#ffffff]") : (selectedCategory === category ? "bg-[#8cc1c7] text-[#000000]" : "bg-[#e0f7fa] text-[#000000]")}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-4 mt-12 w-full px-2 md:px-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8cc1c7] dark:bg-[#30414d] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-300 hover:scale-95"
            >
              <h3 className="text-2xl md:text-xl sm:text-lg font-bold mb-2 text-center text-[#000] dark:text-[#ff9934] font-rubik">
                {project.title}
              </h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <p className="text-[#000000] dark:text-[#ffffff] mb-4">
                {project.description}
              </p>
              <div className="space-y-2">
                {project.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name} - {skill.percentage}
                    </span>
                    <div className="w-full bg-gray-200 dark:bg-[#6f6e6e] rounded-full h-2.5 relative">
                      <div
                        className="h-2.5 rounded-full"
                        style={{ width: skill.percentage, backgroundColor: skill.color }}
                      ></div>
                    </div>
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