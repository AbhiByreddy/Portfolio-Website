import React from "react";

function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 mt-6 gap-8 lg:gap-20">
        <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
          <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abhinav Byreddy
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl mt-1 font-normal text-white mb-2">
              Computer Science @ The Pennsylvania State University
            </h2>
            <h2 className="text-sm sm:text-base lg:text-lg font-normal text-white mb-2">
              COO & Co-Founder @ {' '}
              <a 
                href="https://ctfguide.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold relative inline-block"
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CTFGuide
                <span 
                  className="absolute bottom-[1px] left-0 w-full h-[2px]"
                  style={{
                    backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
                  }}
                ></span>
              </a>
            </h2>
            <h2 className="text-sm sm:text-base lg:text-lg font-normal text-white mb-8">
              Incoming SDE Intern @ {' '}
              <a 
                href="https://aws.amazon.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold relative inline-block"
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #FF9900, #252F3E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Amazon (AWS)
                <span 
                  className="absolute bottom-[1px] left-0 w-full h-[2px]"
                  style={{
                    backgroundImage: "linear-gradient(to bottom right, #FFD700, #FFA500)",
                  }}
                ></span>
              </a>
              {' '}| Technical Project Manager Intern @{' '}
              <a 
                href="https://comcast.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold relative inline-block"
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #0088D2, #00B345)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Comcast
                <span 
                  className="absolute bottom-[1px] left-0 w-full h-[2px]"
                  style={{
                    backgroundImage: "linear-gradient(to bottom right, #FFD700, #FF6B6B, #4ECDC4)",
                  }}
                ></span>
              </a>
            </h2>
            <p className="text-base sm:text-lg mt-5 font-normal text-white max-w-2xl lg:max-w-none">
              I'm interested in systems architecture, ML, and product management. I'm
              currently working on CTFGuide building a new platform for people to
              learn and expand their cybersecurity talents. <br /> <br />
              Apart from that, I love competing in hackathons and eventually want to get an MBA & pilot's license.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src="./profilePicture.jpg"
            alt="Profile Picture"
            className="rounded-full border-4 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover"
          />
        </div>   
      </div>
    </>
  );
}

export default Hero;