import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/ContactList.jpg";
import Img2 from "../assets/stopwatch.jpg";
import Img3 from "../assets/ToDoList.jpg";

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
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-center items-center"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
                lorem ipsum dolor sut anet conscetetur adiplisiting elit.
                Maiores, \ quia quo epedita accasuamas ilum decimas repellat
              </p>
              <a href="https://github.com/blendi3?tab=repositories" target="_blank"><button className="btn btn-sm">View All Projects</button></a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-96"
                src={Img1}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">Javascript</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-16
              transition-all duration-700 z-50"
              >
                <a href="https://github.com/blendi3/Contact-List" target="_blank"><span className="text-3xl text-white">Contact List</span></a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mt-20"
          >
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-96"
                src={Img2}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">Javascript</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-16
              transition-all duration-700 z-50"
              >
                <a href="https://github.com/blendi3/Stopwatch-Clock" target="_blank"><span className="text-3xl text-white">Stopwatch</span></a>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">Javascript</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-16
              transition-all duration-700 z-50"
              >
                <a href="https://github.com/blendi3/ToDoList" target="_blank"><span className="text-3xl text-white">Todo List</span></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
