"use client";
import ArrowRight from "../assets/arrow-right.svg";
import StarImage from "../assets/star.png";
import SpringImage from "../assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading text-center relative">
          <h2 className="section-title">Start Simplifying Your Lesson Planning Today</h2>
          <p className="section-description mt-5">
            Plan smarter, collaborate effortlessly, and streamline your workflow with ESBPlanners. 
            Get started today and experience the difference.
          </p>
          <motion.img src={StarImage.src} alt="Star" width={250} height={250} className="absolute -top-[20px] -left-[350px]" style={{ translateY: translateY }}/>
          <motion.img src={SpringImage.src} alt="Spring" width={250} height={250} className="absolute -top-[2px] -right-[350px]" style={{ translateY: translateY }} />
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a className="btn btn-primary" href="https://esbplanners.com/login">Try for Free</a>
          <a className="btn btn-text" href="mailto:support@esbplanners.com">
            <span>Contact Sales</span>
            <ArrowRight className="h-5 w-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
