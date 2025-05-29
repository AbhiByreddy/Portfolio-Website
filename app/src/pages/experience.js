import React from "react";
import ExperienceNavBar from "../components/ExperienceNavBar";
import Experience from "../components/Experience";
import { useEffect, useRef } from 'react';

export default function ExperiencePage() {
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
        <div className="w-full max-w-4xl mb-10 mx-auto text-white">
          <ExperienceNavBar/>
          <Experience/>
        </div>
      </section>
    </div>
  );
} 