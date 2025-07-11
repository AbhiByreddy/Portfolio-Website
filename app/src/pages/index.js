import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
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
    <div className="min-h-screen">
      <section className="hidden min-h-screen flex items-center justify-center" style={{ display: "block"}}>
        <div className="max-w-6xl mx-auto text-white min-h-screen flex items-center justify-center">
          <div>
            <NavBar />
            <Hero />
          </div>
        </div>
      </section>
    </div>
  );
}
