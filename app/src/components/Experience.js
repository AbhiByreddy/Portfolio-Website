import React from "react";
import Timeline from "./Timeline";
import NewTimeline from "./NewTimeline.js";

export default function Experience() {
  return (
    <>
      <div className = "mx-auto w-full px-9 mt-6 ">
    

        <div className = "text-left">
          <div className = "flex">
            <h1
              className = "text-4xl font-bold"
              style={{
                backgroundImage: "linear-gradient(to right, #0044ff, #f40cc2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </h1>



              <div className= "pt-20">
            <NewTimeline/>
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
}
