"use client";

import { useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

type Category = "all" | "web" | "mobile" | "brand" | "interactive" | "ecommerce";

interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  size: "large" | "small" | "wide";
  accentColor: "violet" | "cyan" | "white";
}

const projects: Project[] = [
  {
    id: "nexus",
    title: "Nexus Platform",
    description: "Immersive 3D web experience for a fintech startup",
    category: "web",
    categoryLabel: "Web Experience",
    size: "large",
    accentColor: "violet",
  },
  {
    id: "pulse",
    title: "Pulse Health",
    description: "AI-powered wellness companion",
    category: "mobile",
    categoryLabel: "Mobile App",
    size: "small",
    accentColor: "cyan",
  },
  {
    id: "orbit",
    title: "Orbit Studios",
    description: "Complete rebrand for creative agency",
    category: "brand",
    categoryLabel: "Brand Identity",
    size: "small",
    accentColor: "violet",
  },
  {
    id: "synesthesia",
    title: "Synesthesia",
    description: "Real-time audio-visual art installation at SXSW 2024",
    category: "interactive",
    categoryLabel: "Interactive Installation",
    size: "wide",
    accentColor: "white",
  },
  {
    id: "ethereal",
    title: "Ethereal Fashion",
    description: "Luxury fashion e-commerce with AR try-on",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    size: "wide",
    accentColor: "white",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "brand", label: "Brand" },
  { value: "interactive", label: "Interactive" },
  { value: "ecommerce", label: "E-Commerce" },
];

const accentStyles = {
  violet: {
    text: "text-violet",
    hover: "hover:neon-border-violet group-hover:border-violet group-hover:bg-violet/20",
  },
  cyan: {
    text: "text-cyan",
    hover: "hover:neon-border-cyan group-hover:border-cyan group-hover:bg-cyan/20",
  },
  white: {
    text: "text-white/75",
    hover: "group-hover:border-white/60",
  },
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const accent = accentStyles[project.accentColor];
  const isLarge = project.size === "large";
  const isSmall = project.size === "small";

  return (
    <article
      className={`${
        isLarge
          ? "col-span-12 md:col-span-8 row-span-2"
          : isSmall
          ? "col-span-12 md:col-span-4"
          : "col-span-12 md:col-span-6"
      }`}
    >
      <a
        href="#"
        className={`glass-card h-full ${
          isLarge ? "min-h-[400px] md:min-h-[500px] p-8" : isSmall ? "min-h-[240px] p-6" : "min-h-[200px] p-6"
        } flex flex-col justify-between group cursor-pointer block ${accent.hover}`}
        aria-label={`View ${project.title} project`}
      >
        <div className="flex justify-between items-start">
          <span className={`text-xs uppercase tracking-wider font-medium font-body ${accent.text}`}>
            {project.categoryLabel}
          </span>
          <div
            className={`${isLarge ? "w-10 h-10" : "w-8 h-8"} rounded-full border border-white/20 flex items-center justify-center transition-all ${accent.hover}`}
          >
            <ArrowIcon className={`${isLarge ? "w-4 h-4" : "w-3 h-3"} text-white/60 group-hover:text-white transition-colors -rotate-45`} />
          </div>
        </div>

        {/* Abstract visual for large cards */}
        {isLarge && (
          <div className="flex-1 flex items-center justify-center py-8" aria-hidden="true">
            <div className="relative">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-violet to-cyan rotate-12 opacity-60 blur-sm" />
              <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan to-violet -rotate-6 opacity-80" />
              <div className="absolute inset-4 w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                <span className="text-2xl font-bold font-display">{project.title.split(" ")[0].toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className={`${isLarge ? "text-2xl md:text-3xl" : "text-xl"} font-bold ${isSmall ? "mb-1" : "mb-2"} font-display`}>
            {project.title}
          </h3>
          <p className={`text-white/75 font-body ${isSmall ? "text-sm" : ""}`}>
            {project.description}
          </p>
        </div>
      </a>
    </article>
  );
};

export const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="px-6 py-24" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 id="work-heading" className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl mb-8 font-body">
            A curated selection of our most impactful digital experiences and
            creative innovations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-violet to-cyan text-white"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-12 gap-4 md:gap-6"
          role="tabpanel"
          aria-label={`Projects in ${activeCategory === "all" ? "all categories" : categories.find(c => c.value === activeCategory)?.label}`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-12 text-center py-16">
              <p className="text-white/75 font-body">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
