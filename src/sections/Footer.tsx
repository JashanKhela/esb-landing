import Image from "next/image";
import SocialX from "../assets/social-x.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkedin from "../assets/social-linkedin.svg";
import SocialYoutube from "../assets/social-youtube.svg";
import SocialPin from "../assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-esb-blue text-white text-md py-10 text-center">
      <div className="container">
        {/* Logo */}
        <div className="inline-flex relative">
          <Image
            src="/logo-shala--white.svg"
            width={70}
            height={70}
            alt="ESBPlanners Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 text-white items-center">
          <a href="#about" className="hover:underline">
            Showcase
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a
            href="https://shala-books.com/esb-planners-teachers.html"
            className="hover:underline"
          >
            Teachers
          </a>
          <a
            href="https://shala-books.com/esb-planners-schools.html"
            className="hover:underline"
          >
            Schools
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>

          <a href="https://shala-books.com/education-blog-home.html" className="hover:underline">
            Blog
          </a>
          <a
            href="https://shala-books.com/esb-planners-demo.html"
            className="text-esb-blue bg-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tighter transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Book A Demo
          </a>
        </nav>

        {/* Social Media Icons with Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://x.com/shalabooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialX />
          </a>
          <a
            href="https://www.instagram.com/educationbyshalabooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialInsta />
          </a>
          <a
            href="http://pinterest.com/shalabooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialPin />
          </a>
          <a
            href="https://www.youtube.com/@EducationbyShalaBooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/christina-shala-shalabooks/?originalSubdomain=ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLinkedin />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="mt-6">
          &copy; 2025{" "}
          <a href="https://esbplanners.com" className="hover:underline">
            ESBPlanners
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
