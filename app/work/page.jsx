"use client";
import { workData } from "@/constant/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Framer motion
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
// icons
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaEye } from "react-icons/fa";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max_pad_container py-12 lg:py-14 h-screen">
      <div className="pt-12 lg:pt-10">
        {/* title */}
        <div>
          <motion.div
            variants={FadeIn("down", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="pb-10 text-center"
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
                MY WORK
              </motion.span>
            </div>
            <h4 className="medium-24 my-4 max-xl:text-center">
              My Profession Portraits
            </h4>
            <p className="text-center max-w-3xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium illum exercitationem officiis maiores! Reprehenderit,
              hic nobis? Officia eligendi pariatur cupiditate voluptatem
              consequuntur voluptates? Saepe nihil est rem quibusdam quisquam
              pariatur dolor. Expedita nostrum animi pariatur.
            </p>
          </motion.div>
        </div>
        {/* tabs */}
        <motion.div
          variants={FadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flexCenter gap-x-5 mb-8"
        >
          {workData.map((category, index) => (
            <button
              key={index}
              className={`${
                index === activeTab &&
                "after:!w-[100%] after:!bg-secondary after:transition-all after:duration-300"
              } capitalize medium-16 relative after:absolute after:h-[4px] after:w-6 after:bg-tertiary after:left-0 after:-bottom-2 after:rounded-sm cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              {category.title}
            </button>
          ))}
        </motion.div>
        {/* project */}
        <motion.div
          variants={FadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[80%] mx-auto"
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-[266px] sm:mt-16"
          >
            {workData[activeTab].projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <div key={idx} className="flexCenter">
                    <div className="relative overflow-hidden rounded-lg group">
                      <div className="min-w-full">
                        <Image
                          src={project.url}
                          alt="[project.title]"
                          height={250}
                          width={350}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-l from-[#edf3db] to-[#ffabe7] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer "></div>
                      <span className="uppercase medium-18 absolute top-1 left-4 text-2xl group-hover:top-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        Project {idx + 1}
                      </span>
                      <span className="regular-16 text-gray-30 absolute top-16 left-4 text-2xl group-hover:top-12 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        {project.title}
                      </span>
                      {/* info */}
                      <div className="flexCenter gap-x-4 absolute bottom-[10%] left-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20"
                        >
                          <MdOutlineZoomOutMap />
                        </Link>
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20"
                        >
                          <BiSolidLike />
                          <p>112</p>
                        </Link>
                        <Link
                          href={"/"}
                          className="flexCenter gap-x-2 rounded-md ring-1 ring-slate-900/20"
                        >
                          <FaEye />
                          <p>222</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
