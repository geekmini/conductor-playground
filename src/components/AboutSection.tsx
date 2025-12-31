const values = ["Innovation", "Creativity", "Excellence", "Collaboration"];

export const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-card p-6 bg-violet/10">
                    <div className="text-4xl font-bold gradient-text mb-2 font-display">
                      8+
                    </div>
                    <div className="text-sm text-white/75 font-body">
                      Years of Experience
                    </div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-4xl font-bold gradient-text mb-2 font-display">
                      50+
                    </div>
                    <div className="text-sm text-white/75 font-body">Team Members</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="glass-card p-6">
                    <div className="text-4xl font-bold gradient-text mb-2 font-display">
                      98%
                    </div>
                    <div className="text-sm text-white/75 font-body">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="glass-card p-6 bg-cyan/10">
                    <div className="text-4xl font-bold gradient-text mb-2 font-display">
                      24/7
                    </div>
                    <div className="text-sm text-white/75 font-body">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-violet/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-cyan/20 blur-2xl"
              aria-hidden="true"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-6 font-display"
            >
              About <span className="gradient-text">Tron.ai</span>
            </h2>
            <p className="text-white/75 text-lg mb-6 leading-relaxed font-body">
              We are a team of passionate designers, developers, and strategists
              dedicated to crafting exceptional digital experiences. Founded with a
              vision to bridge the gap between technology and creativity, we
              transform ambitious ideas into reality.
            </p>
            <p className="text-white/75 text-lg mb-8 leading-relaxed font-body">
              Our approach combines cutting-edge technology with bold creative
              vision, ensuring every project we deliver not only meets but exceeds
              expectations. We believe in the power of collaboration and innovation.
            </p>
            <ul className="flex flex-wrap gap-3" aria-label="Our values">
              {values.map((value) => (
                <li
                  key={value}
                  className="px-4 py-2 glass-card text-sm font-medium font-body"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
