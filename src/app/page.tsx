import { CallToAction } from "@/sections/CallToAction";
import { Header } from "../sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import FeaturesSection from "@/sections/Features";
import { EmpoweringEducatorSection } from "@/sections/EmpoweringEducators";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <FeaturesSection />
      <Pricing />
      <Testimonials />
      < EmpoweringEducatorSection />
      <CallToAction />
      <Footer/>
    </>
  );
}
