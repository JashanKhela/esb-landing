"use client"
import Image from "next/image";
import acmeLogo from "../assets/logo-acme.png";
import quantumsLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Trusted by Hundreds of School Districts & Teachers Across North America
      </h2>
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{ translateX: "-50%" }} transition={{ ease: "linear", duration: 20, repeat: Infinity, repeatType: "loop" }}>
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={quantumsLogo}
              alt="Quantum Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />

<Image
              src={acmeLogo}
              alt="Acme Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={quantumsLogo}
              alt="Quantum Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
