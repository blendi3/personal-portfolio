import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore methods
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactSubmissions"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });

      // Clear form fields or show success message
      setName("");
      setEmail("");
      setMessage("");
         // Show success message using react-toastify
         toast.success("Form submitted successfully!");
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("An error occurred. Please try again later.");
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
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-5 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;