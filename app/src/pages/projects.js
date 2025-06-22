import React from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useRef } from 'react';

export default function Projects() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="hidden py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ display: "block" }}>
        <div className="w-full max-w-7xl mx-auto mb-10 text-white">
          <NavBar/>
          <div className="mt-8">
            <h1 className="px-2 text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">
              💻{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h1>
            <div className="pt-3">
              <ProjectCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 