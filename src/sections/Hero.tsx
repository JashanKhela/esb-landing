"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#3c69ac,#EAEEFE_50%)] overflow-x-clip text-white z-0">
      <div className="container">
        <div className="md:flex iteems-center">
          <div className="md:w-[478px]">
            <div className="tag">Empowering Educators</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-esb-blue text-transparent bg-clip-text mt-6">
              Smarter Lesson Planning for Educators
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              ESBPlanners simplifies lesson planning, helping teachers create,
              organize, and collaborate effortlessly. Plan engaging lessons,
              manage schedules, and streamline your workflow with ease.
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <a className="btn" href="https://esbplanners.com/login">
                Get Started For Free
              </a>
              <a
                className="btn btn-text gap-1"
                href="https://shala-books.com/esb-planners.html"
              >
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1  relative">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ translateY: translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
