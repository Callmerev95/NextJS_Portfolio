"use client";
import Image from "next/image";
// Framer-motion
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
// Typewriter
import { Typewriter } from "react-simple-typewriter";
// React icons
import { MdDownload } from "react-icons/md";

export default function Home() {
  return (
    <section className="max_padd_container py-16 h-screen lg:py-32">
      <div className="flex gap-8 flex-col pt-8 xl:flex-row xl:pt-8">
        {/* Left Side */}
        <motion.div
          variants={FadeIn("left", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col lg:pt-8 text-center xl:text-start"
        >
          <div className="mb-2">
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
              HELLO! THIS IS KYOMI.
            </motion.span>
          </div>
          <h2 className="h2">
            Creative <span className="text-secondary">UI/UX</span> Designer
          </h2>
          <h4 className="bold-24 !font-extrabold">
            A
            <span className="pl-2">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Youtuber",
                  "Programmer",
                  "Teacher",
                ]}
                loop={true}
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h4>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            nisi consectetur earum facilis necessitatibus qui, cum eius impedit
            harum nesciunt.
          </p>
          <div className="flexCenter xl:flexStart gap-x-2 pt-8">
            <button className="btn_dark_rounded">Hire me</button>
            <button className="group">
              <div className="relative border border-tertiary overflow-x-hidden rounded-full flexStart after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-tertiary after:transition-all after:duration-500 group-hover:after:w-full hover:after:bg-secondary">
                <span className="medium-16 px-5 z-10 transition-all duration-500">
                  Download CV
                </span>
                <span className="flexCenter h-12 w-12 bg-tertiary rounded-full text-white ring-1 ring-tertiary z-10">
                  <MdDownload />
                </span>
              </div>
            </button>
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          variants={FadeIn("right", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flexCenter relative lg:-top-8 lg:-ml-5"
        >
          <Image
            src={"/profile1.png"}
            alt="bgImg"
            height={600}
            width={510}
            className="h-[288px] lg:h-[466px] w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
