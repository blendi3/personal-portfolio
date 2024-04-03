import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3dr9pgc",
          "template_4458xh6",
          form.current,
          "x-KSu0RhAnQbn_h7D"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.");
          }
        );
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex lg:justify-start items-center text-center justify-center lg:text-left"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-5 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="from_name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="reply_to"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
