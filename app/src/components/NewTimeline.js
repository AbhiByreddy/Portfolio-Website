import React from "react";


export default function NewTimeline() {
    const event = {
        title: "CTFGuide",
        job: "Co-Founder & Systems Architect",
        image: "./darklogo.png",
        date: "Oct 2022 - Present",
        description: "Creates and manages core architectural backend systems on cloud platforms such as AWS, GCP and Kubernetes. Maintains and writes frontend and backend code with JS, Node.js, React, HTML/CSS, etc. Frequently attends B2B, B2C, investor meetings. Manages a team of 7 developers, hosting daily and weekly standups as well as managing product timelines and deadlines.",
    }
    const event2 = {
        title: "Nittany AI Hackathon",
        image: "./pennstatetransparent.png",
        date: "Oct 2023",
        description: "Created Workbook, an open-source workbook with a live Linux container that allows professors to write markdown/HTML, and execute code in an online terminal. Workbook was created using Google Kubernetes Engine and HTML/TailwindCSS.",
    }
    const event3 = {
      title: "HackPSU",
      image: "./pennstatetransparent.png",
      date: "Oct 2022",
      description: "Created QuickQuiz, a program that uses GPT-3 to generate questions and answers for a quiz. QuickQuiz was created using AWS, Tensorflow, GPT-3, Firebase, and HTML/TailwindCSS.",
  }


    const events = [event, event2, event3];
  return (
    <>
    <div className="timeline">
    {events && events.map((project, index) => (
        <div key = {index} className="checkpoint">
            <div>
            <h2 class="text-2xl text-white margin-bottom: 0.5em flex">
            <img
                    src={project.image}
                    alt="Logo"
                    className="w-8 h-8 mr-3 object-contain"
                  />
                    {project.title} {" "}
                    <i className="italic text-white text-sm px-2">
                      {project.date}
                    </i>
                  </h2>
                  {project.job &&  (
                    <p className=" text-white italic">
                  {project.job}
                </p>
                  )}
                  <p className="text-white text-left">
                    {project.description}
                  </p>
            </div>

        </div>
    ))}
        </div>
    </>
  );
}