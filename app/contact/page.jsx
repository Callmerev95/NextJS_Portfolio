"use client";
import { useState } from "react";
// Framer motion
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
// React icons
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add your logic here
    console.log("Form submitted:", formData);
    // clear the fields after submittion
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max_pad_container py-12 lg:py-20 h-screen bg-primary text-tertiary">
      <div className="pt-12">
        {/* title */}
        <div>
          <motion.div
            variants={FadeIn("up", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="pb-6 xl:pb-10 text-center"
          >
            <div className="inline-block my-2">
              <motion.span
                className="uppercase bold-20 px-2 py-1 rounded-md"
                animate={{
                  backgroundColor: [
                    "#ffda79",
                    "#ffabe7",
                    "#d2bcf3",
                    "#edf3d8",
                    "#ffda79",
                  ],
                  transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                CONTACT ME
              </motion.span>
            </div>
            <h4 className="medium-24 my-4 max-xl:text-center">Get in touch</h4>
            <p className="text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              molestias provident odio eius totam facere laboriosam, repellendus
              eos animi necessitatibus iste inventore recusandae quo, expedita
              delectus iusto qui. Tempora, necessitatibus.
            </p>
          </motion.div>
        </div>
        {/* Contact Form */}
        <motion.div
          variants={FadeIn("down", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-primary"
                required
                rows="4"
              ></textarea>
            </div>
            <div className="flexCenter ">
              <button className="group" type="submit">
                <div className="relative border border-tertiary overflow-x-hidden rounded-full flexStart after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-tertiary after:transition-all after:duration-500 group-hover:after:w-full hover:after:bg-secondary">
                  <span className="medium-16 px-5 z-10 transition-all duration-500">
                    Send Message
                  </span>
                  <span className="flexCenter h-12 w-12 bg-tertiary rounded-full text-white ring-1 ring-tertiary z-10">
                    <IoIosSend className="bold-22 z-10" />
                  </span>
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
