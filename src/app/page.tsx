"use client";

import { useState, useEffect } from "react";

// Tron.ai Logo - Brain with Lightning Bolt
const TronLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left brain - cyan side with wavy lobes */}
    <path
      d="M28 12c-3 0-6 1-8 3-4 0-7 3-8 6-3 2-5 6-5 10 0 3 1 6 3 8 0 4 2 7 5 9 2 3 6 5 10 5h3"
      stroke="#00FFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Left brain inner curves */}
    <path
      d="M12 25c-2 1-3 3-3 5s1 4 3 5"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 19c-2 1-4 3-4 6s2 5 4 6"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M13 38c-1 1-2 3-2 5s1 3 2 4"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right brain - blue side with wavy lobes */}
    <path
      d="M36 12c3 0 6 1 8 3 4 0 7 3 8 6 3 2 5 6 5 10 0 3-1 6-3 8 0 4-2 7-5 9-2 3-6 5-10 5h-3"
      stroke="#0066FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Right brain inner curves */}
    <path
      d="M52 25c2 1 3 3 3 5s-1 4-3 5"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 19c2 1 4 3 4 6s-2 5-4 6"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M51 38c1 1 2 3 2 5s-1 3-2 4"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Lightning bolt - sharp Z shape through center */}
    <path
      d="M38 8L26 30h10L24 56l18-30H32L38 8z"
      fill="url(#tron-lightning)"
      stroke="url(#tron-lightning)"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />

    {/* Circuit connection dots */}
    <circle cx="8" cy="30" r="2" fill="#00FFFF" />
    <circle cx="56" cy="30" r="2" fill="#0066FF" />
    <circle cx="10" cy="42" r="1.5" fill="#00FFFF" opacity="0.8" />
    <circle cx="54" cy="42" r="1.5" fill="#0066FF" opacity="0.8" />

    <defs>
      <linearGradient id="tron-lightning" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="50%" stopColor="#00DDFF" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fluid Background */}
      <div className="fluid-bg">
        <div
          className="fluid-blob fluid-blob-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="fluid-blob fluid-blob-2"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          }}
        />
        <div
          className="fluid-blob fluid-blob-3"
          style={{
            transform: `translate(${mousePosition.x * 0.01 - 50}%, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Overlays */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TronLogo className="w-10 h-10" />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                tron.ai
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Work", "Services", "About", "Contact"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet to-cyan group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <a href="#contact" className="btn-secondary hidden md:block">
              Let&apos;s Talk
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 glass-card flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5 relative">
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-3 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile menu dropdown */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 glass-card mx-6 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="p-6 space-y-4">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-white/80 hover:text-white transition-colors py-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary block text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 pt-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <div className="space-y-8">
                <div
                  className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full transition-all duration-700 delay-100 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span
                    className="text-xs font-medium text-white/70 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Available for projects Q1 2026
                  </span>
                </div>

                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight transition-all duration-700 delay-200 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  We craft
                  <br />
                  <span className="gradient-text">digital</span>
                  <br />
                  realities
                </h1>

                <p
                  className={`text-lg md:text-xl text-white/50 max-w-md leading-relaxed transition-all duration-700 delay-300 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  A creative tech agency building immersive experiences that
                  blur the line between imagination and reality.
                </p>

                <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <a href="#work" className="btn-primary">View Our Work</a>
                  <a href="#work" className="btn-secondary">Watch Reel</a>
                </div>

                {/* Stats */}
                <div
                  className={`flex gap-8 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {[
                    { value: "150+", label: "Projects" },
                    { value: "40+", label: "Clients" },
                    { value: "12", label: "Awards" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="text-3xl font-bold gradient-text"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm text-white/40"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Floating 3D Abstract */}
              <div
                className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
              >
                {/* Rotating ring */}
                <div
                  className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30"
                  style={{
                    animation: "spin 20s linear infinite",
                  }}
                >
                  <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-violet neon-border-violet" />
                </div>

                {/* Counter rotating ring */}
                <div
                  className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/30"
                  style={{
                    animation: "spin 15s linear infinite reverse",
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 w-3 h-3 rounded-full bg-cyan neon-border-cyan" />
                </div>

                {/* Central glass orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet/20 to-cyan/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet/30 to-cyan/30 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-cyan animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background:
                        i % 2 === 0 ? "var(--violet)" : "var(--cyan)",
                      top: `${20 + Math.sin(i * 60) * 30}%`,
                      left: `${20 + Math.cos(i * 60) * 30}%`,
                      animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 20px var(--violet)"
                          : "0 0 20px var(--cyan)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="work" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p
                className="text-white/50 text-lg max-w-xl"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                A curated selection of our most impactful digital experiences
                and creative innovations.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Large featured card */}
              <div className="col-span-12 md:col-span-8 row-span-2">
                <div className="glass-card h-full min-h-[400px] md:min-h-[500px] p-8 flex flex-col justify-between group cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs uppercase tracking-wider text-violet font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Web Experience
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-violet group-hover:bg-violet/20 transition-all">
                      <svg
                        className="w-4 h-4 text-white/60 group-hover:text-white transition-colors -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Abstract visual */}
                  <div className="flex-1 flex items-center justify-center py-8">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-violet to-cyan rotate-12 opacity-60 blur-sm" />
                      <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan to-violet -rotate-6 opacity-80" />
                      <div className="absolute inset-4 w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                        <span
                          className="text-2xl font-bold"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          NEXUS
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Nexus Platform
                    </h3>
                    <p
                      className="text-white/50"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Immersive 3D web experience for a fintech startup
                    </p>
                  </div>
                </div>
              </div>

              {/* Small card 1 */}
              <div className="col-span-12 md:col-span-4">
                <div className="glass-card h-full min-h-[240px] p-6 flex flex-col justify-between group cursor-pointer hover:neon-border-cyan">
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs uppercase tracking-wider text-cyan font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Mobile App
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan transition-all">
                      <svg
                        className="w-3 h-3 text-white/60 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Pulse Health
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      AI-powered wellness companion
                    </p>
                  </div>
                </div>
              </div>

              {/* Small card 2 */}
              <div className="col-span-12 md:col-span-4">
                <div className="glass-card h-full min-h-[240px] p-6 flex flex-col justify-between group cursor-pointer hover:neon-border-violet">
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs uppercase tracking-wider text-violet-glow font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Brand Identity
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-violet transition-all">
                      <svg
                        className="w-3 h-3 text-white/60 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Orbit Studios
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Complete rebrand for creative agency
                    </p>
                  </div>
                </div>
              </div>

              {/* Wide card */}
              <div className="col-span-12 md:col-span-6">
                <div className="glass-card h-full min-h-[200px] p-6 flex flex-col justify-between group cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs uppercase tracking-wider text-white/60 font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Interactive Installation
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-all">
                      <svg
                        className="w-3 h-3 text-white/60 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Synesthesia
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Real-time audio-visual art installation at SXSW 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Wide card 2 */}
              <div className="col-span-12 md:col-span-6">
                <div className="glass-card h-full min-h-[200px] p-6 flex flex-col justify-between group cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs uppercase tracking-wider text-white/60 font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      E-Commerce
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-all">
                      <svg
                        className="w-3 h-3 text-white/60 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Ethereal Fashion
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Luxury fashion e-commerce with AR try-on
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  What we <span className="gradient-text">do</span>
                </h2>
                <p
                  className="text-white/50 text-lg mb-8 max-w-md"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  We combine cutting-edge technology with bold creative vision
                  to deliver transformative digital experiences.
                </p>
                <button className="btn-primary">Start a Project</button>
              </div>

              <div className="space-y-4">
                {[
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
                ].map((service, i) => (
                  <div
                    key={service.number}
                    className="glass-card p-6 md:p-8 group cursor-pointer"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <span
                        className="text-3xl font-bold text-white/20 group-hover:text-violet transition-colors"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-white/40 mb-4"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/50"
                              style={{ fontFamily: "var(--font-outfit)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual */}
              <div className="relative">
                <div className="glass-card p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="glass-card p-6 bg-violet/10">
                        <div
                          className="text-4xl font-bold gradient-text mb-2"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          8+
                        </div>
                        <div
                          className="text-sm text-white/50"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Years of Experience
                        </div>
                      </div>
                      <div className="glass-card p-6">
                        <div
                          className="text-4xl font-bold gradient-text mb-2"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          50+
                        </div>
                        <div
                          className="text-sm text-white/50"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Team Members
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="glass-card p-6">
                        <div
                          className="text-4xl font-bold gradient-text mb-2"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          98%
                        </div>
                        <div
                          className="text-sm text-white/50"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Client Satisfaction
                        </div>
                      </div>
                      <div className="glass-card p-6 bg-cyan/10">
                        <div
                          className="text-4xl font-bold gradient-text mb-2"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          24/7
                        </div>
                        <div
                          className="text-sm text-white/50"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Support Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-violet/20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-cyan/20 blur-2xl" />
              </div>

              {/* Right - Content */}
              <div>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  About <span className="gradient-text">Tron.ai</span>
                </h2>
                <p
                  className="text-white/50 text-lg mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  We are a team of passionate designers, developers, and
                  strategists dedicated to crafting exceptional digital
                  experiences. Founded with a vision to bridge the gap between
                  technology and creativity, we transform ambitious ideas into
                  reality.
                </p>
                <p
                  className="text-white/50 text-lg mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Our approach combines cutting-edge technology with bold
                  creative vision, ensuring every project we deliver not only
                  meets but exceeds expectations. We believe in the power of
                  collaboration and innovation.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Innovation",
                    "Creativity",
                    "Excellence",
                    "Collaboration",
                  ].map((value) => (
                    <span
                      key={value}
                      className="px-4 py-2 glass-card text-sm font-medium"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Quote Section */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 md:p-16 relative">
              {/* Quote marks */}
              <div className="absolute top-8 left-8 text-6xl text-violet/20 font-serif">
                &ldquo;
              </div>
              <div className="absolute bottom-8 right-8 text-6xl text-violet/20 font-serif">
                &rdquo;
              </div>

              <blockquote
                className="text-2xl md:text-3xl font-medium leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Working with Tron.ai was transformative. They didn&apos;t just
                build a website—they created{" "}
                <span className="gradient-text">an experience</span> that
                perfectly captures our brand&apos;s essence.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-cyan" />
                <div className="text-left">
                  <div
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Sarah Chen
                  </div>
                  <div
                    className="text-sm text-white/50"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    CEO, Nexus Finance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-12 md:p-20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan/20 blur-3xl" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Let&apos;s create
                    <br />
                    <span className="gradient-text">something</span>
                    <br />
                    extraordinary
                  </h2>
                  <p
                    className="text-white/50 text-lg max-w-md"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Ready to transform your digital presence? Let&apos;s discuss your
                    project and bring your vision to life.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-violet transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-violet transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    />
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-violet transition-colors resize-none"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  />
                  <button className="btn-primary w-full">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <TronLogo className="w-10 h-10" />
                  <span
                    className="text-xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    tron.ai
                  </span>
                </div>
                <p
                  className="text-white/40 max-w-sm"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  A creative tech agency crafting digital experiences that
                  transcend reality.
                </p>
              </div>

              <div>
                <h4
                  className="font-semibold mb-4"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Navigation
                </h4>
                <ul
                  className="space-y-2 text-white/40"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {["Work", "Services", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold mb-4"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Connect
                </h4>
                <ul
                  className="space-y-2 text-white/40"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {["Twitter", "LinkedIn", "Dribbble", "Instagram"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
              <p
                className="text-white/30 text-sm"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                © 2026 Tron.ai. All rights reserved.
              </p>
              <div
                className="flex gap-6 text-white/30 text-sm"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Keyframe for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
