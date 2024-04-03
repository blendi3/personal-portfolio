import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Javasript",
    description:
      "With a knack for bringing dynamic content to life, I wield JavaScript to create interactive and responsive web applications that engage and perform.",
    link: "learn more",
  },
  {
    name: "React",
    description:
      "React is my go-to for building user interfaces with a seamless experience, leveraging its component-based architecture for efficient, scalable apps.",
    link: "learn more",
  },
  {
    name: "Typescript",
    description:
      "Enhancing code reliability and maintainability, I harness TypeScript's static typing to produce more robust and error-resistant applications.",
    link: "learn more",
  },
  {
    name: "GraphQL",
    description:
      "I streamline client-server communication with GraphQL, ensuring that data fetching is precise and efficient, tailored exactly to what the UI requires.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-32">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 h-[700px] text-center lg:text-left lg:bg-services lg:bg-bottom bg-contain bg-no-repeat mix-blend-lighten
          mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 lg:max-w-[455px] mb-16">
              These are some of my top skills that I have developed through
              education and hands-on experience.
            </h3>
            <a
              href="https://github.com/blendi3?tab=repositories"
              target="_blank"
            >
              <button className="btn btn-sm">See My Work</button>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href=""
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
