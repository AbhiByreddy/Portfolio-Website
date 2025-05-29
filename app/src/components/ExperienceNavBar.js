import React from "react";
import Link from "next/link";

export default function ExperienceNavBar() {
return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start px-4 sm:px-6 lg:px-0 text-base sm:text-lg mt-6 sm:mt-10 font-bold" style={{opacity: 0.8}}>
        <Link href="/">
            <button className="px-3 sm:px-4 py-2 gradient rounded-md transition-all duration-300 hover:scale-105">
                Home
            </button>
        </Link>

        <Link href="/projects">
            <button className="px-3 sm:px-4 py-2 gradient rounded-md transition-all duration-300 hover:scale-105">
                Projects
            </button>
        </Link>

        <button className="px-3 sm:px-4 py-2 gradient rounded-md transition-all duration-300 hover:scale-105" onClick={() => window.open('./Resume.pdf')}>
                Resume
        </button>
    </div>
);
}