import ArrowRight from "../assets/arrow-right.svg";
import MenuIcon from "../assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-esb-blue text-white gap-3">
        <p className="text-white/70 hidden md:block">
          Empower your teaching. Plan smarter. Collaborate effortlessly.{" "}
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href="https://esbplanners.com/login">Get Started For Free</a>
          <ArrowRight className="w-4 h-4  inline-flex justify-center" />
        </div>
      </div>
      <div>
        <div className="py-5">
          <div className="px-8 m-auto">
            <div className="flex items-center justify-between">
              <Image
                src="/esbplanners-logo.svg"
                width={70}
                height={70}
                alt="ESBPLanners Logo"
              />
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-5 text-black/60 items-center font-medium">
                <a href="#about">Showcase</a>
                <a href="#features">Features</a>
                <a href="https://shala-books.com/esb-planners-teachers.html">Teachers</a>
                <a href="https://shala-books.com/esb-planners-schools.html">Schools</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
                <a href="https://shala-books.com/esb-planners-demo.html" className="bg-esb-blue text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tighter transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:scale-105 shadow-md hover:shadow-lg">
                  Book A Demo
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
