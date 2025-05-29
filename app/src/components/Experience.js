import React from "react";
import Timeline from "./Timeline";
import NewTimeline from "./NewTimeline.js";

export default function Experience() {
  return (
    <>
      <div className="mt-8">
        <h1 className="px-2 text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">
          💼{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom right, #0044ff, #f40cc2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </span>
        </h1>
        <div className="pt-3">
          <NewTimeline/>
        </div>
      </div>
    </>
  );
}