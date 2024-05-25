import React from "react";

export default function Timeline() {
  return (
    <>
      <div class="flex min-h-screen justify-center pt-20">
        <div class="w-80">
          <ul>
            <li class="relative flex items-baseline gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gradient-to-br from-blue-800 to-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  class="bi bi-circle-fill fill-white"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <div class="flex items-center">
                  <img
                    src="darkLogo.png"
                    alt="Logo"
                    class="w-8 h-8 mr-3"
                  />
                  <p class="text-2xl text-white">
                    CTFGuide{" "}
                    <i className="italic text-white text-sm px-2">
                      Oct 2022 - Present
                    </i>
                  </p>
                </div>
                <p className=" text-white italic">
                  Co-Founder & Systems Architect
                </p>
                <p class="mt-2 text-white text-sm">
                  Co-Founder of CTFGuide. Creates and manages core architectural
                  backend systems on cloud platforms such as AWS, GCP and
                  Kubernetes. Maintains and writes frontend and backend code
                  with JS, Node.js, React, HTML/CSS, etc. Frequently attends
                  B2B, B2C, investor meetings. Manages a team of 7 developers,
                  hosting daily and weekly standups as well as managing product
                  timelines and deadlines.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
