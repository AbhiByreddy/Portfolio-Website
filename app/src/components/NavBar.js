import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar() {
    const router = useRouter();
    
    const isActive = (path) => {
        return router.pathname === path;
    };
    
    const getButtonClass = (path) => {
        const baseClass = "px-3 sm:px-4 py-2 rounded-md transition-all duration-300";
        return isActive(path) 
            ? `${baseClass} bg-gradient-to-r from-blue-500/30 to-pink-500/25 border border-blue-400/30`
            : `${baseClass} gradient hover:scale-105`;
    };

return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-base sm:text-lg mt-6 sm:mt-10 gap-4 sm:gap-x-4 font-bold" style={{opacity: 0.8}}>
        <div className="flex flex-wrap gap-3 sm:gap-x-4 justify-center sm:justify-start">
            <Link href="/">
                <button className={getButtonClass("/")}>
                    Home
                </button>
            </Link>

            <Link href="/experience">
                <button className={getButtonClass("/experience")}>
                    Experience
                </button>
            </Link>

            <Link href="/projects">
                <button className={getButtonClass("/projects")}>
                    Projects
                </button>
            </Link>

            <Link href="/services">
                <button className={getButtonClass("/services")}>
                    Services
                </button>
            </Link>

            <button className="px-3 sm:px-4 py-2 gradient rounded-md transition-all duration-300 hover:scale-105" onClick={() => window.open('./Resume.pdf')}>
                    Resume
            </button>
        </div>

        <div className="flex gap-2 sm:gap-3 justify-center sm:justify-end sm:ml-auto py-3 text-xl sm:text-2xl">
            <a href="https://github.com/AbhiByreddy" target="_blank" rel="noopener noreferrer" className="p-2 sm:px-4 sm:py-2 gradient rounded-md transition-all duration-300 hover:scale-110">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhinavbyreddy/" target="_blank" rel="noopener noreferrer" className="p-2 sm:px-4 sm:py-2 gradient rounded-md transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:byreddyab@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 sm:px-4 sm:py-2 mr-0 sm:mr-4 gradient rounded-md transition-all duration-300 hover:scale-110">
                <i className="fa fa-envelope"></i>
            </a>
        </div>
    </div>
);
}
