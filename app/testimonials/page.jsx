"use client";
import { motion } from "framer-motion";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonialData } from "@/constant/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="max_pad_container py-12 xl:py-24 h-screen bg-primary text-tertiary">
      <div className="pt-12">
        {/* title */}
        <div>
          <div className="pb-10 text-center">
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
                TESTIMONIALS
              </motion.span>
            </div>
            <h4 className="medium-24 my-4 max-xl:text-center">
              What Our Customer Says
            </h4>
            <p className="text-center max-w-3xl mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae debitis vitae sunt recusandae culpa deserunt beatae
              omnis adipisci veritatis, maxime iusto pariatur ipsa enim.
            </p>
          </div>
        </div>
        {/* Testimonials */}
        <div className="max-w-[80%] mx-auto">
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
            className="h-[322px] sm:h-[333px] sm:mt-3"
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="py-3 px-6 bg-white rounded-lg relative">
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/quote.svg"}
                      alt="quotes"
                      height={45}
                      width={45}
                    />
                    <p className="text-center pb-8 mt-2">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="flexCenter flex-col absolute top-[77%] left-1/2 -translate-x-1/2">
                    <img
                      src={testimonial.url}
                      alt={testimonial.name}
                      className="w-[70px] h-[70px] rounded-full my-2 border-4 border-primary shadow-md"
                    />
                    <p className="text-gray-800 font-semibold text-center mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-center mb-1 ">{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
