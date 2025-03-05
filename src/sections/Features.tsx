import Link from 'next/link';

const featuresData = [
  {
    title: "Solutions for Teachers",
    description: [
      "Create custom templates, planners, rubrics, timetables, worksheets, student reports, and more in a snap!",
      "Assign learning outcomes to planners",
      "Upload files, images, videos, assignments, and assessments",
      "Collaborate with colleagues",
    ],
    buttonText: "Learn More",
    link: "#",
    tag: "ESBPlanners - Lesson Planner",
  },
  {
    title: "Solutions for Schools",
    description: [
      "Create custom educational frameworks to help align curriculums and instill a cohesive teaching and learning culture",
      "Streamline teacher planners to ensure consistency",
      "Collaborate and share with staff",
    ],
    buttonText: "Learn More",
    link: "#",
    tag: "ESBPlanners - Framework",
  },
  {
    title: "Solutions for Homeschooling",
    description: [
      "Choose ready-made templates from our template bank or create your own",
      "Track your child(ren)'s learning progress",
      "Collaborate with other homeschooling families",
    ],
    buttonText: null,
    link: null,
    tag: null,
  },
];

const FeaturesSection = () => {
  return (
    <section id='features' className="py-16 bg-gray-100">
      <div className="container">
      <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Enriching Features
            </div>
          </div>

          <h2 className="section-title mt-5">
          Empowering educators with tools for better teaching, planning, and collaboration.
          </h2>

          <p className="section-description mt-5">
            ESBPlanners gives you the tools to build dynamic lesson plans, manage multiple classes with ease, and collaborate with fellow educators. Simplify your planning process and focus on what truly matters—teaching.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="card"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <ul className="text-gray-600 space-y-2">
                {feature.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-esb-blue">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
