import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
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
              I'm a Frontend developer with over 2 years of experience
            </h3>
            <p className="mb-6">
              As a front-end developer, I am passionate about creating
              user-friendly and visually appealing web experiences. I have a
              strong understanding of HTML, CSS, and JavaScript and I am
              proficient in using React, to build dynamic, interactive websites
              and applications. I am dedicated to staying up to date with the
              latest web development trends and technologies, and always strive
              to enhance the user experience. In my free time, I enjoy traveling
              and football. Connect with me to see how I can bring my skills to
              your next project.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}
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
                  {inView ? <CountUp start={0} end={100} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completetd
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a
                href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
                target="_blank"
              >
                <button className="btn btn-lg">Contact me</button>
              </a>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
