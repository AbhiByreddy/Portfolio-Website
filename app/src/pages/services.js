import React from "react";
import NavBar from "../components/NavBar";
import ConsultingCard from "../components/ConsultingCard";
import { useEffect, useRef } from 'react';

export default function Services() {
  const observer = useRef(null);

  //Consulting projects data
  const wildcardConsultingCompany = {
    title: "Wild Card Creative Backend Architect",
    description: "Created backend architecture to host 1000+ concurrent client websites.",
    websiteUrl: "https://www.wildcardcreativeco.com/",
    image: "./wildcardcreative.png",
    date: "June 2025",
    duration: "Ongoing",
    client: "Wild Card Creative",
    services: ["Systems Architecture", "Backend Development", "Service Optimization"],
    technologies: ["AWS EKS", "Kubernetes", "Docker"],
    results: "40% increase in conversion rates",
    status: "ongoing" //"completed", "ongoing", or "pending"
  };

  const consultingProjects = [wildcardConsultingCompany,];

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
          <NavBar />
          <div className="mt-8">
            <div className="text-center mb-8">
              <h1 className="px-2 text-3xl sm:text-4xl font-bold">
                <span
                  style={{
                    backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Consulting Services
                </span>
              </h1>
            </div>
            
            {/*description*/}
            <div className="text-center mb-12 px-4">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-6">
                Want to modernize your app, need help getting started, or don't have any experience and need someone to build your idea for you?
              </p>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                <span
                  style={{
                    backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Well, you came to the right place.
                </span>
              </h2>
              
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                I specialize in highly building scalable, cost effective, avaliable applications that drive business growth.
              </p>
            </div>
            
            <ConsultingCard consultingProjects={consultingProjects} />
            
            {/* Bottom Section */}
            <div className="text-center mt-16 px-4">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                Ready to transform your business with cutting-edge technology solutions? 
                Let's discuss how I can help you efficient systems that deliver results.
              </p>
              
              <button 
                className="px-8 py-4 rounded-xl text-white border border-white/30 transition-all duration-300 hover:border-white/50 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, rgba(244, 12, 194, 0.3), rgba(0, 68, 255, 0.3))`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <a href="mailto:byreddyab@gmail.com?subject=Consulting Services Inquiry" className="flex items-center justify-center font-medium text-lg">
                  Get Quote <i className="pl-2 fas fa-envelope"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
