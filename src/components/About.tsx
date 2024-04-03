import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleResumeDownload = () => {
    const resumeUrl = "/my-resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 text-center lg:text-left lg:flex-row
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 hidden lg:flex bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Frontend developer with over a year of experience
            </h3>
            <p className="mb-6">
              As a front-end developer, I am passionate about creating
              user-friendly and visually appealing web experiences. I have a
              strong understanding of HTML, CSS, and JavaScript and I am
              proficient in using React, including Next.js, to build dynamic,
              interactive websites and applications. Additionally, I have
              experience with TypeScript to enhance code quality and
              maintainability. I am dedicated to staying up to date with the
              latest web development trends and technologies, and always strive
              to enhance the user experience. In my free time, I enjoy traveling
              and football.
            </p>
            <div className="flex justify-center lg:justify-start gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Certifications <br />
                  Earned
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Online Courses <br />
                  Completetd
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completetd
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center justify-center lg:justify-start">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
