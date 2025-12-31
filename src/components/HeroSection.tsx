"use client";

import { useState } from "react";
import { VideoModal } from "./VideoModal";

interface HeroSectionProps {
  isLoaded: boolean;
}

const stats = [
  { value: "150+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "12", label: "Awards" },
];

// Pre-computed particle styles to avoid recalculation on each render
const particleStyles = [...Array(6)].map((_, i) => ({
  background: i % 2 === 0 ? "var(--violet)" : "var(--cyan)",
  top: `${20 + Math.sin(i * 60) * 30}%`,
  left: `${20 + Math.cos(i * 60) * 30}%`,
  animationDuration: `${4 + i * 0.5}s`,
  animationDelay: `${i * 0.3}s`,
  boxShadow: i % 2 === 0 ? "0 0 20px var(--violet)" : "0 0 20px var(--cyan)",
}));

export const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
    <section className="min-h-screen flex items-center px-6 pt-24" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider font-body">
                Available for projects Q1 2026
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight font-display"
            >
              We craft
              <br />
              <span className="gradient-text">digital</span>
              <br />
              realities
            </h1>

            <p
              className={`text-lg md:text-xl text-white/75 max-w-md leading-relaxed transition-all duration-700 delay-300 font-body ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A creative tech agency building immersive experiences that blur the
              line between imagination and reality.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a href="#work" className="btn-primary">
                View Our Work
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn-secondary"
                aria-label="Watch our showreel video"
              >
                Watch Reel
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              aria-label="Company statistics"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold gradient-text font-display">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/75 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Floating 3D Abstract */}
          <div
            className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            aria-hidden="true"
          >
            {/* Rotating ring */}
            <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-violet neon-border-violet" />
            </div>

            {/* Counter rotating ring */}
            <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/30 animate-spin-slow-reverse">
              <div className="absolute -bottom-2 left-1/2 w-3 h-3 rounded-full bg-cyan neon-border-cyan" />
            </div>

            {/* Central glass orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet/20 to-cyan/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet/30 to-cyan/30 border border-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-cyan animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {particleStyles.map((style, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-float"
                style={style}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    <VideoModal
      isOpen={isVideoOpen}
      onClose={() => setIsVideoOpen(false)}
    />
    </>
  );
};
