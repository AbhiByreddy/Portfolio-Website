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
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6  ">
      {projects && projects.map((project, index) => (
        <div key={index} className="  hover:scale-105 hover:backdrop-blur transition-all duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="mt-4 h-48 w-full rounded-t-md object-fill"
          />
          <div className="text-white hover:cursor-pointer h-36 bg-gradient-to-br from-blue-800 to-purple-700 p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
          </div>
          <div className="rounded-b-lg h- w-auto object-cover object-center p-4 bg-white h-48 min-w-72 text-black ">
            <h2 className="text-xl font-bold mb-2">Technologies</h2>
            <div className="h-16">
            <div className="flex flex-wrap gap-2">
              {project.technologies && project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-300 text-black px-2 py-1 rounded ">
                  {tech}
                </span>
              ))}
            </div>
            </div>   
            <div className="flex gap-3 text-md">
            <button className="rounded-md text-white border border-white hover:opacity-100 opacity-90 transition-all duration-300 py-2 px-2 rounded mt-4 bg-gradient-to-br from-blue-800 to-purple-700">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub <i className="pl-2 fab fa-github"></i>
              </a>
            </button>             
            {project.devpost != null &&  (
              <button className="rounded-md text-white border border-white hover:opacity-100 opacity-90 transition-all duration-300 py-2 px-2 rounded mt-4  bg-gradient-to-br from-blue-800 to-purple-700">
                <a href={project.devpost} target="_blank" rel="noopener noreferrer">
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
