"use client";

import { useState } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 backdrop-blur-sm z-20 ${menuOpen ? "h-[500px]" : "h-auto"} `}>
      {/* Top Bar */}
      <div className="flex justify-center items-center py-3 bg-esb-blue text-white gap-3">
        <p className="text-white/70 hidden md:block">
          Empower your teaching. Plan smarter. Collaborate effortlessly.
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href="https://esbplanners.com/login">Get Started For Free</a>
          <ArrowRight className="w-4 h-4 inline-flex justify-center" />
        </div>
      </div>

      {/* Main Header */}
      <div className="py-5">
        <div className="px-8 m-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src="/esbplanners-logo.svg"
              width={70}
              height={70}
              alt="ESBPlanners Logo"
            />

            {/* Hamburger Menu Icon */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6 text-black/70" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-5 text-black/60 items-center font-medium">
              <a href="#about">Showcase</a>
              <a href="#features">Features</a>
              <a href="https://shala-books.com/esb-planners-teachers.html">Teachers</a>
              <a href="https://shala-books.com/esb-planners-schools.html">Schools</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
              <a
                href="https://shala-books.com/esb-planners-demo.html"
                className="bg-esb-blue text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tighter transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Book A Demo
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide In or Full Screen */}
      <div
        className={`fixed inset-0 bg-white text-black z-[100] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            className="self-end mb-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon className="h-6 w-6 text-black/70" />
          </button>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Showcase
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a
              href="https://shala-books.com/esb-planners-teachers.html"
              onClick={() => setMenuOpen(false)}
            >
              Teachers
            </a>
            <a
              href="https://shala-books.com/esb-planners-schools.html"
              onClick={() => setMenuOpen(false)}
            >
              Schools
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a
              href="https://shala-books.com/esb-planners-demo.html"
              className="bg-esb-blue text-white px-6 py-3 rounded-lg text-center tracking-tighter transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              Book A Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
