import React, { useEffect, useRef } from 'react';
import { useTheme } from '../themeToggle';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fly-up');
        }
      },
      { threshold: 0.1 }
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
      title: 'Calculator App',
      image: 'public/calculator-app.jpg',
      description: 'A simple calculator app with basic arithmetic functions.',
      skills: [
        { name: 'HTML', percentage: '80%' },
        { name: 'CSS', percentage: '70%' },
        { name: 'JavaScript', percentage: '90%' },
      ],
    },
    {
      title: 'E-commerce Website',
      image: 'public/ecommerce-website.jpg',
      description: 'An e-commerce website with product listings, shopping cart, and checkout functionality.',
      skills: [
        { name: 'HTML', percentage: '85%' },
        { name: 'CSS', percentage: '75%' },
        { name: 'JavaScript', percentage: '95%' },
      ],
    },
    {
      title: 'Chess Game',
      image: 'public/chess-game.jpg',
      description: 'A web-based chess game with two-player functionality.',
      skills: [
        { name: 'HTML', percentage: '70%' },
        { name: 'CSS', percentage: '60%' },
        { name: 'JavaScript', percentage: '80%' },
      ],
    },
    {
      title: 'AI Chatbot',
      image: 'public/ai-chatbot.jpg',
      description: 'An AI-powered chatbot for customer service.',
      skills: [
        { name: 'Python', percentage: '90%' },
        { name: 'Machine Learning', percentage: '85%' },
        { name: 'Natural Language Processing', percentage: '80%' },
      ],
    },
    {
      title: 'Catan Game',
      image: 'public/catan-game.jpg',
      description: 'A digital version of the popular board game Catan.',
      skills: [
        { name: 'HTML', percentage: '75%' },
        { name: 'CSS', percentage: '65%' },
        { name: 'JavaScript', percentage: '85%' },
      ],
    },
    {
      title: 'Racing Game',
      image: 'public/racing-game.jpg',
      description: 'A 3D racing game with multiple tracks and cars.',
      skills: [
        { name: 'C#', percentage: '80%' },
        { name: 'Unity', percentage: '85%' },
        { name: '3D Modeling', percentage: '70%' },
      ],
    },
    {
      title: 'Machine Learning Recommendation System',
      image: 'public/ml-recommendation-system.jpg',
      description: 'A recommendation system using machine learning algorithms.',
      skills: [
        { name: 'Python', percentage: '90%' },
        { name: 'Machine Learning', percentage: '95%' },
        { name: 'Data Analysis', percentage: '85%' },
      ],
    },
    {
      title: 'Cybersecurity Project',
      image: 'public/cybersecurity-project.jpg',
      description: 'A project focused on enhancing cybersecurity measures.',
      skills: [
        { name: 'Python', percentage: '80%' },
        { name: 'Network Security', percentage: '85%' },
        { name: 'Cryptography', percentage: '75%' },
      ],
    },
    {
      title: 'Weather App',
      image: 'public/weather-app.jpg',
      description: 'A weather app that provides current weather information and forecasts.',
      skills: [
        { name: 'HTML', percentage: '80%' },
        { name: 'CSS', percentage: '70%' },
        { name: 'JavaScript', percentage: '90%' },
      ],
    },
  ];

  return (
    <section
      className={`w-full flex flex-col items-center justify-start px-4 md:px-20 pt-16 pb-8 ${theme === 'dark' ? 'bg-[#091218]' : 'bg-[#ffffff]'}`}
    >
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000 w-full"
      >
        <h2 className={`text-4xl flex items-center justify-center font-rubik font-bold ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
          Projects
        </h2>
        <p className={`mt-8 flex items-center justify-center text-lg ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
          Click a project card to see behind the scenes. 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 w-full px-2 md:px-5">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#8cc1c7] dark:bg-[#30414d] p-4 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-center text-[#000] dark:text-[#ff9934]">{project.title}</h3>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
              </a>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="space-y-2">
                {project.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <div className="w-full bg-gray-200 dark:bg-[#6f6e6e] rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: skill.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;