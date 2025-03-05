import CheckIcon from "../assets/check.svg";
import clsx from "clsx";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Start for Free",
    popular: false,
    inverse: false,
    features: [
      "Free 30 day trial",
      "Up to 10 lesson planners",
      "Limited template creation",
      "Basic file storage",
      "Standard Drawing Tools",
    ],
  },
  {
    title: "Monthly",
    monthlyPrice: 4.99,
    buttonText: "Upgrade To Pro",
    popular: false,
    inverse: false,
    features: [
      "Unlimited lesson planners",
      "Unlimited template creation",
      "Unlimited file storage",
      "Priority support (24/7 assistance)",
      "Collaboration with multiple educators",
    ],
  },
  {
    title: "Anually",
    monthlyPrice: 49.99,
    buttonText: "Upgrade At A Discount",
    popular: true,
    inverse: true,
    yearly:true,
    features: [
      "Unlimited planners & users",
      "Dedicated account manager",
      "Advanced analytics & reporting",
      "Role-based access & permissions",
      "Custom API access",
      "Direct support & onboarding",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Choose the Right Plan for You.</h2>
          <p className="section-description mt-5">
            Whether you are an individual teacher or a school administrator, we have a plan that fits your needs.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
              yearly
            }) => (
              <div
                key={title}
                className={clsx(
                  "card",
                  inverse === true && "border-esb-blue bg-esb-blue text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border-[3px] border-white">
                      <span className="font-white bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={clsx(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    /{yearly ? 'year' : 'month'}
                  </span>
                </div>
                <a
                  href="https://esbplanners.com/upgrade"
                  className={clsx(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-esb-blue"
                  )}
                >
                  {buttonText}
                </a>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
        <div className="mt-16 text-center">
        <p className="section-description mt-5">
          Whether you are an individual teacher, a school administrator, or part of a larger educational institution, we have a plan tailored to your needs. Our individual plans provide flexibility for educators, while schools and districts can benefit from customized group pricing. For bulk or school-wide pricing, contact our sales team.
          </p>
          <div className="mt-6">
            <a
              href="mailto:info@esbplanners.com"
              className="btn btn-secondary px-6 py-3 text-lg font-semibold border border-esb-blue bg-white text-esb-blue hover:bg-esb-blue hover:text-white transition-all"
            >
              Contact Us for Group Pricing
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};
