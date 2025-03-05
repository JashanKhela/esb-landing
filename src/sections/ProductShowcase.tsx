"use client";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={sectionRef} id="about" className="bg-gradient-to-b from-[#F9FAFE] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Empowering Educators
            </div>
          </div>

          <h2 className="section-title mt-5">
            Smarter Lesson Planning, Seamless Collaboration
          </h2>

          <p className="section-description mt-5">
            ESBPlanners gives you the tools to build dynamic lesson plans, manage multiple classes with ease, and collaborate with fellow educators. Simplify your planning process and focus on what truly matters—teaching.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="ESBPlanners App Screenshot" className="mt-10 rounded-lg" />
          <motion.img src={pyramidImage.src} alt="Decorative Pyramid" className="hidden md:block absolute -right-28 -top-32" height={250} width={250}  style={{ translateY: translateY }} />
          <motion.img src={tubeImage.src} alt="Decorative Tube" className="hidden md:block absolute -left-36 -bottom-24" height={220} width={220} style={{ translateY: translateY }} />
        </div>
      </div>
    </section>
  );
};
