"use client";
import { LINKS } from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// framer motion
import { motion } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <nav className=" fixed max-lg:bottom-2 max-lg:w-full flexCenter z-50 lg:right-2 lg:h-full  ">
      <div className=" flex gap-x-6 lg:gap-x-10  px-4 py-3 bg-tertiary/10 rounded-full lg:flex-col lg:gap-y-10 ">
        {LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`${
              link.path === pathname ? "text-white" : "text-tertiary"
            } relative group`}
          >
            <motion.span
              className="h-8 w-8 bg-primary flexCenter rounded-full bold-18 z-50"
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
              {link.icon}
            </motion.span>
            <span className="absolute max-lg:bottom-[61px] max-lg:-right-3 lg:right-[66px] lg:top-2 text-primary bg-tertiary regular-14 px-2 rounded-md hidden group-hover:flex">
              {link.title}
              <span className="h-2 w-2 bg-tertiary absolute max-lg:top-4 max-lg:right-1/2 translate-x-1/2 lg:top-[6px] lg:right-[1px] rotate-45 rounded-sm"></span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
