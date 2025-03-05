"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "ESBPlanners has completely transformed the way I structure and organize my lesson plans. It's a game-changer for educators!",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
  },
  {
    text: "Our school's collaboration has never been smoother. ESBPlanners makes lesson sharing and planning incredibly efficient.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
  },
  {
    text: "As a teacher balancing multiple classes, I love how ESBPlanners keeps everything streamlined and easily accessible.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
  },
  {
    text: "The ability to create and reuse lesson templates saves me hours of planning each week. Highly recommend ESBPlanners!",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
  },
  {
    text: "I never realized how much time I was wasting before switching to ESBPlanners. Now, my lesson prep is faster and more effective.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
  },
  {
    text: "ESBPlanners’ seamless Google Classroom integration has been a lifesaver. It’s the perfect tool for modern educators.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
  },
  {
    text: "Our entire department uses ESBPlanners to coordinate lessons, track progress, and ensure consistency across classes.",
    imageSrc: avatar7.src,
    name: "Alex Johnson",
  },
  {
    text: "The flexibility ESBPlanners provides is unmatched. Whether I’m planning in-depth units or daily lessons, it adapts to my needs.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
  },
  {
    text: "I used to struggle keeping track of multiple classes. ESBPlanners has made organization effortless and stress-free!",
    imageSrc: avatar9.src,
    name: "Casey Harper",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCol = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
  <motion.div
    className={"flex flex-col gap-6 pb-6"}
    animate={{ translateY: "-50%" }}
    transition={{ repeat: Infinity, duration: props.duration || 10, repeatType: "loop", ease: "linear" }}
  >
    {" "}
    {[...new Array(2)].fill(0).map((_, i) => (
      <>
        {props.testimonials.map(({ text, imageSrc, name }) => (
          <div key={text} className="card">
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5 ">
              <Image
                src={imageSrc}
                alt={name || "Anonymous"}
                height={40}
                width={40}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-medium tracking-tight leading-5">
                  {name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    ))}
  </motion.div>
  </div>

);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What Educators Are Saying</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, ESBPlanners is becoming
            the go-to lesson planning tool for teachers, schools, and
            administrators worldwide.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialCol testimonials={firstColumn} duration={15} />
          <TestimonialCol
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialCol
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
