import React from "react";

export default function ProjectCard() {
  const card = {
    title: "Discord Compiler",
    description: "A Discord bot made to compile code snippets in various different languages such as Java, Javascript, Python and GO", 
    link: "https://github.com/AbhiByreddy/Discord-Compiler",
    devpost: null,
    image: "./compile.png",
    technologies: ["JavaScript", "REST"],
  };

  const card2 = {
    title: "WebbProcessor",
    description:
      "A program made to automatically process and output images taken from the JWST Space Telescope.",
    link: "https://github.com/AbhiByreddy/WebbProcessor",
    devpost: null,
    image: "./JWSTicon.png",
    technologies: ["Java", "Bit Manipulation", ],
  };

  const card3 = {
    title: "QuickQuiz",
    description:
      "A program made to process user submitted notes and generate flashcards for studying.",
    link: "https://github.com/Laphatize/QuickQuiz",
    devpost: "https://devpost.com/software/quickquiz",
    image: "./quickquiz.jpg",
    technologies: ["AWS", "Tensorflow", "GPT-3", "Firebase", "HTML/TailwindCSS",]
  };

  const card4 = {
    title: "Workbook",
    description:
      "Terminal system that allows for professors to write markdown/HTML and have a linux container on the side for students to execute the code.",
    link: "https://github.com/Laphatize/workbook",
    devpost: "https://devpost.com/software/nimpfy",
    image: "/workbook1.png",
    technologies: ["Google Kubernetes Engine", "React", "HTML/TailwindCSS"]
  };
  

  const projects = [card, , card3, card4, card2];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 px-4 sm:px-0">
      {projects && projects.map((project, index) => (
        <div 
          key={index} 
          className="project-card backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:backdrop-blur-xl hover:border-white/30 hover:-translate-y-2"
          style={{
            background: `linear-gradient(135deg, rgba(0, 68, 255, 0.1), rgba(244, 12, 194, 0.1))`,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backdropFilter = 'blur(20px)';
            e.currentTarget.style.WebkitBackdropFilter = 'blur(20px)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 68, 255, 0.4), 0 8px 32px 0 rgba(244, 12, 194, 0.3), 0 0 60px 0 rgba(0, 68, 255, 0.2), 0 0 60px 0 rgba(244, 12, 194, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backdropFilter = 'blur(16px)';
            e.currentTarget.style.WebkitBackdropFilter = 'blur(16px)';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(0, 68, 255, 0.1), rgba(244, 12, 194, 0.1))`,
              }}
            ></div>
          </div>
          
          <div className="p-4 text-white">
            <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-white/90 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2 text-white/95">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-full text-xs border border-white/20 text-white/90"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 68, 255, 0.2), rgba(244, 12, 194, 0.2))`,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>   
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                className="flex-1 rounded-xl text-white border border-white/30 transition-all duration-300 py-2 px-3 hover:border-white/50"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 68, 255, 0.3), rgba(244, 12, 194, 0.3))`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-medium">
                  GitHub <i className="pl-2 fab fa-github"></i>
                </a>
              </button>             
              {project.devpost != null &&  (
                <button 
                  className="flex-1 rounded-xl text-white border border-white/30 transition-all duration-300 py-2 px-3 hover:border-white/50"
                  style={{
                    background: `linear-gradient(135deg, rgba(0, 68, 255, 0.3), rgba(244, 12, 194, 0.3))`,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <a href={project.devpost} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-medium">
                    Devpost <i className="pl-2 fas fa-link"></i>
                  </a>
                </button>
              )}
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
}
