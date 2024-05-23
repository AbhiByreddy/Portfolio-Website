import React from "react";

export default function ProjectCard() {
  const card = {
    title: "Discord Compiler",
    description: "A program made to automatically process and output images taken from the JWST Space Telescope.", 
    link: "Project Link",
    image: "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",
  };

  const card2 = {
    title: "WebbProcessor",
    description:
      "A program made to automatically process and output images taken from the JWST Space Telescope.",
    link: "Project Link",
    image: "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",
  };

  const card3 = {
    title: "WebbProcessor",
    description:
      "A program made to automatically process and output images taken from the JWST Space Telescope.",
    link: "Project Link",
    image: "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",
  };
  

  const projects = [card, card2, card3, card3];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {projects.map((project, index) => (
        <div key={index} className="hover:scale-105 hover:backdrop-blur transition-all duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="mt-4 rounded-t-md h-auto w-auto object-cover object-center"
          />
          <div className="text-white hover:cursor-pointer bg-gradient-to-br from-blue-800 to-purple-700 p-4 rounded-b-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <button className="text-white border border-white hover:opacity-100 opacity-50 transition-all duration-300 py-2 px-4 rounded mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub <i className="pl-2 fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
