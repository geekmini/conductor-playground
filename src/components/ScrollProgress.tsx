"use client";

import { useState, useEffect } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-50 bg-white/5"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-violet to-cyan transition-transform duration-75"
        style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "left" }}
      />
    </div>
  );
};
