import React from "react";



function Hero() {
  return (
    <>
      <div className="flex px-9 mt-6">
        <div className="text-left mx-auto">
          <div className="">
            <h1 className="text-4xl font-bold text-white">Abhinav Byreddy</h1>
            <h2 className="text-2xl mt-2 font-normal text-white text-blue-600">
              Computer Science @ Pennsylvania State University
            </h2>
            <p className="text-lg  mt-5 font-normal text-white">
              I'm a junior at PSU pursuing a bachelor's in Computer Science. I'm
              interested in systems architecture, ML, and product management. I'm
              currently working on CTFGuide building a new platform for people to
              learn and expand their cybersecurity talents.
            </p>
          </div>
        </div>
        <div></div>
        <div className="ml-auto mx-auto pl-4 ">
          <img
            src="./profilePicture.jpg"
            alt="Profile Picture"
            width="720"
            className="rounded-full mx-auto border-4"
          />
        </div>   
      </div>
    </>
  );
}

export default Hero;