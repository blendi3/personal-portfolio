import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import YotubeClone from "../assets/youtubeHomepage.jpg";
import OsProject from "../assets/os-project.png";
import taskManagerApp from "../assets/taskManagerApp.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="contianer mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-[490px] lg:mb-96">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-left flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-center items-center px-2"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
                Grab a cup of coffee and check out some of my latest digital
                adventures. Casual coding, serious results
              </p>
              <a
                href="https://github.com/blendi3?tab=repositories"
                target="_blank"
              >
                <button className="btn btn-sm">View All Projects</button>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl w-full h-full lg:w-[620px] lg:h-96"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="transition-transform duration-500 group-hover:scale-125 w-full h-96 object-fill"
                src={YotubeClone}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">React & Typescript</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-16
              transition-all duration-700 z-50"
              >
                <a
                  href="https://github.com/blendi3/youtube-homepage-clone"
                  target="_blank"
                >
                  <span className="text-3xl text-white">
                    Youtube Homepage Clone
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mt-20 px-2"
          >
            <div
              className="group relative overflow-hidden border-2
              border-white/50 rounded-xl w-full h-full lg:w-[620px] lg:h-96"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="transition-transform duration-500 group-hover:scale-125 w-full h-96 object-cover"
                src={OsProject}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">React.js</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-16
              transition-all duration-700 z-50"
              >
                <a href="https://github.com/blendi3/os-project" target="_blank">
                  <span className="text-3xl text-white">os-project</span>
                </a>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2
              border-white/50 rounded-xl w-full h-full lg:w-[620px] lg:h-96"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="transition-transform duration-500 group-hover:scale-125 w-full h-96 object-cover"
                src={taskManagerApp}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-32 lg:group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">
                  React.js & Typescript (with authentication)
                </span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-5 lg:group-hover:bottom-7
              transition-all duration-700 z-50"
              >
                <a
                  href="https://taskflowmanagement.netlify.app/"
                  target="_blank"
                >
                  <span className="block text-3xl text-white">
                    Task Management (Deployed)
                  </span>
                </a>
                <a
                  href="https://github.com/blendi3/task-management-app"
                  target="_blank"
                >
                  <span className="block text-3xl text-white">
                    Task Mangement (Github)
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
