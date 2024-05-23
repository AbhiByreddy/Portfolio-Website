import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar() {
return (
    <div className="md:ml-6 md:flex vertical-align text-lg mt-10 gap-x-4 font-bold  " style={{opacity: 0.8}}>
        <button className="px-4 gradient hover:bg-gray">
            <ScrollLink to="section1" smooth={true} duration={1000} className="cursor-pointer">
                Home
            </ScrollLink>
        </button>

        <button className="px-4 gradient">
            <ScrollLink to="section2" smooth={true} duration={1000} className="cursor-pointer">
                About
            </ScrollLink>
        </button>

        <button className="px-4 gradient">
            <ScrollLink to="section2" smooth={true} duration={1000} className="cursor-pointer">
                Projects
            </ScrollLink>
        </button>

        <button className="px-4 gradient">
            <ScrollLink to="section3" smooth={true} duration={1000} className="cursor-pointer">
                Experience
            </ScrollLink>
        </button>

        <div className="ml-auto py-3 text-2xl">
            <a href="https://github.com/AbhiByreddy" target="_blank" rel="noopener noreferrer" className="px-4 py-2 gradient">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhinavbyreddy/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 gradient">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:byreddyab@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mr-4 gradient">
                <i className="fa fa-envelope"></i>
            </a>
        </div>
    </div>
);
}
