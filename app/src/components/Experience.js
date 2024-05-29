import React from "react";
import Timeline from "./Timeline";

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



              <div className= "ml-auto">
            <Timeline/>
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
}
