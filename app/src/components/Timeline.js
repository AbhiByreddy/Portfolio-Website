import React from "react";

export default function Timeline() {
  return (
    <>
    <section className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
            <div className="w-80">
              <ul>
                <li className="relative flex gap-6 pb-5 items-baseline">
                  <div className="before:absolute before:left-[5.5px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      class="bi bi-circle-fill fill-white"
                      viewBox="0 0 16 16"
                    ></svg>
                  </div>
                  <div className="text-md text-white">
                    <p>5.23.24</p>
                    <p className="mt-2">Hello blahblahlblahlblahblah</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
    </>
  )
};