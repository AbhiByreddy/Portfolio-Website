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
    <div >
      <section id="section1" className="hidden" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", marginBottom: "200px"}}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
          <NavBar />
          <Hero />
        </div>
      </section>

      <section id="section2" className="hidden"  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
          <ProjectNavBar/>
          <ProjectCard />
        </div>
      </section>

      <section id="section3" className="hidden" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", marginTop: "600px"}}>
        <div className="max-w-4xl mb-10 mx-auto text-white">
          <ExperienceNavBar/>
          <Experience/>
        </div>
      </section>
    </div>
  );
}
