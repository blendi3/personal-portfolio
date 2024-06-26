import React from "react";

import Image from "../assets/profileImg.jpg";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/my-resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Blendi <span>Ivanja</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "Web Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto
            lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
                target="_blank"
              >
                <button className="btn btn-lg">Contact me</button>
              </a>
              <button
                className="text-gradient btn-link"
                onClick={handleResumeDownload}
              >
                My Portfolio
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:blendiivanja2@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]"
          >
            <img className="rounded-full h-80" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
