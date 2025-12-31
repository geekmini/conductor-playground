const services = [
  {
    number: "01",
    title: "Digital Product Design",
    description:
      "End-to-end product design from strategy to launch, creating intuitive and beautiful user experiences.",
    tags: ["UX/UI", "Prototyping", "Design Systems"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks and optimized for conversion.",
    tags: ["React", "Next.js", "WebGL"],
  },
  {
    number: "03",
    title: "Creative Technology",
    description:
      "Pushing boundaries with AR/VR experiences, generative art, and interactive installations.",
    tags: ["Three.js", "AR/VR", "AI"],
  },
  {
    number: "04",
    title: "Brand Identity",
    description:
      "Comprehensive branding that captures your essence and resonates with your audience.",
    tags: ["Logo", "Guidelines", "Motion"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="px-6 py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold mb-6 font-display"
            >
              What we <span className="gradient-text">do</span>
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-md font-body">
              We combine cutting-edge technology with bold creative vision to
              deliver transformative digital experiences.
            </p>
            <a href="#contact" className="btn-primary">
              Start a Project
            </a>
          </div>

          <ul className="space-y-4" aria-label="Our services">
            {services.map((service) => (
              <li
                key={service.number}
                className="glass-card p-6 md:p-8 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-3xl font-bold text-white/20 group-hover:text-violet transition-colors font-display"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all font-display">
                      {service.title}
                    </h3>
                    <p className="text-white/75 mb-4 font-body">{service.description}</p>
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/75 font-body"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
