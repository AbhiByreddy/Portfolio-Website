import React from "react";
import NavBar from "../components/NavBar";
import ProjectNavBar from "../components/ProjectNavBar";
import ExperienceNavBar from "../components/ExperienceNavBar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";
import { useEffect, useRef } from 'react';




export default function Home() {

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
    

    <div className="h-screen">
      <section id="section1" className="hidden h-screen flex items-center justify-center" style={{ display: "block"}}>
        <div className="max-w-4xl mx-auto  text-white bottom-0 h-screen flex items-center justify-center">
          <div>
          <NavBar />
          <Hero />
            </div>
       
        </div>
      </section>




      <section id="section2" className="hidden "  style={{ display: "block", justifyContent: "center", alignItems: "center", height: "" }}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
          <ProjectNavBar/>
          <ProjectCard />
        </div>
      </section>

      <section id="section3" className="hidden py-20 pt-60" style={{ display: "block", justifyContent: "center", alignItems: "center", height: ""}}>
        <div className="max-w-4xl mb-10 mx-auto text-white w-full">
          <ExperienceNavBar/>
          <Experience/>
        </div>
      </section>
    </div>
  );
}
