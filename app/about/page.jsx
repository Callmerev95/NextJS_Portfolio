"use client";
import React, { useState } from "react";
import Accordion from "@/components/Accordion";
import LanguageProgress from "@/components/LanguageProgress";
import { aboutData } from "@/constant/data";
// Farmer motion
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className=" max_padd_container py-16 h-screen lg:py-20 bg-primary text-tertiary">
      <div className="flex gap-12 flex-col pt-8 xl:flex-row xl:pt-8">
        {/* Left Side */}
        <motion.div
          variants={FadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col xl:pt-8 max-xl:flexCenter"
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
              WELLCOME & INTRODUCE
            </motion.span>
          </div>
          <h4 className="bold-28 uppercase text-center xl:text-start py-4">
            HOLA! MY NAME IS KYOMI SHAYNALA!
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
            adipisci quod atque libero consequuntur iure, facilis deserunt.
            Voluptatibus beatae delectus vel ea repellendus reiciendis, qui,
            tempora sequi accusamus sapiente enim maxime expedita ab minus.
          </p>
          {/* Accordion */}
          <div className="hidden xl:flex">
            <Accordion />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={FadeIn("down", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col xl:pt-8"
        >
          {/* progressbars */}
          <div>
            <LanguageProgress />
          </div>
          {/* tabs */}
          <div className=" hidden xl:flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "after:!w-[100%] after:!bg-secondary after:transition-all after:duration-300"
                } capitalize medium-16 relative after:absolute after:h-[4px] after:w-6 after:bg-tertiary after:left-0 after:-bottom-2 after:rounded-sm cursor-pointer`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* tabs data */}
          <div className="hidden xl:flex flex-col gap-2 items-center py-6 lg:py-8 xl:items-start pb-16">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-1 flex-col md:flex-row gap-x-3 items-center"
              >
                {/* title */}
                <div>{item.title}</div>
                <div>-</div>
                <div>{item.year}</div>
                {/* icons */}
                <div className="flex gap-x-2">
                  {item.icons?.map((icon, _itemIndex) => (
                    <div key={_itemIndex}>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
