import Image from "next/image";
import BookCover from "../assets/esbplanners-logo.png";
import CheckIcon from "../assets/check.svg";
import clsx from "clsx";

const bookFeatures = [
  "Strategies for creating a cohesive teaching culture",
  "Insights into effective leadership within educational settings",
  "Practical approaches to empower both educators and students",
  "Frameworks that transcend time and adapt to evolving educational needs",
];

export const EmpoweringEducatorSection = () => {
  return (
    <section id="empowering-educator" className="py-24 bg-gray-50">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Empowering the Educator Within</h2>
          <p className="section-description mt-5">
          Unlock the full potential of your teaching with proven strategies that foster collaboration, inspire student engagement, and build a dynamic, future-ready classroom. 'Empowering the Educator Within' equips you with actionable insights, leadership frameworks, and innovative approaches to transform your educational impact.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-10">
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src={"/esbplanners-logo.svg"}
              alt="Empowering the Educator Within Book Cover"
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 lg:pl-10 mt-8 lg:mt-0">
            <ul className="flex flex-col gap-5">
              {bookFeatures.map((feature) => (
                <li key={feature} className="text-lg flex items-center gap-4">
                  <CheckIcon className="h-6 w-6 text-esb-blue" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="/public/esbplanners-logo.svg"
                className="btn btn-primary px-6 py-3 text-lg font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
