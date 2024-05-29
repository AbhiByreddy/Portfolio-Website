import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function ExperienceNavBar() {
return (
    <div className="md:ml-6 md:flex vertical-align text-lg mt-10 gap-x-4 font-bold  w-full " style={{opacity: 0.8}}>
        <button className="px-4 gradient hover:bg-gray">
            <ScrollLink to="section1" smooth={true} duration={1000} className="cursor-pointer">
                Home
            </ScrollLink>
        </button>

        <button className="px-4 gradient">
            <ScrollLink to="section2" smooth={true} duration={1000} className="cursor-pointer">
                Projects
            </ScrollLink>
        </button>

        <button className="px-4 gradient" onClick={() => window.open('./Resume.pdf')}>
                Resume
        </button>

    </div>
);
}