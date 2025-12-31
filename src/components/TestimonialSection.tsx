export const TestimonialSection = () => {
  return (
    <section className="px-6 py-24" aria-labelledby="testimonial-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="testimonial-heading" className="sr-only">
          Client Testimonial
        </h2>
        <figure className="glass-card p-12 md:p-16 relative">
          {/* Quote marks */}
          <div
            className="absolute top-8 left-8 text-6xl text-violet/20 font-serif"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div
            className="absolute bottom-8 right-8 text-6xl text-violet/20 font-serif"
            aria-hidden="true"
          >
            &rdquo;
          </div>

          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 font-display">
            Working with Tron.ai was transformative. They didn&apos;t just build a
            website—they created{" "}
            <span className="gradient-text">an experience</span> that perfectly
            captures our brand&apos;s essence.
          </blockquote>

          <figcaption className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-cyan"
              aria-hidden="true"
            />
            <div className="text-left">
              <cite className="font-semibold not-italic font-display">Sarah Chen</cite>
              <div className="text-sm text-white/75 font-body">CEO, Nexus Finance</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
