import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div>
      <div id="section1" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
          <NavBar />
          <Hero />
        </div>
      </div>

      <div id="section2" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
        <ProjectCard />
        </div>
      </div>

      <div id="section3" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="max-w-4xl mx-auto mb-10 text-white">
        <Experience/>
        </div>
      </div>
    </div>
  );
}
