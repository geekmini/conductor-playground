"use client";

import { useEffect, useRef, useCallback } from "react";

interface FluidBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const FluidBackground = ({ mousePosition }: FluidBackgroundProps) => {
  return (
    <>
      {/* Fluid Background */}
      <div className="fluid-bg" aria-hidden="true">
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
      <div className="noise-overlay" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
    </>
  );
};

// Custom hook for throttled mouse position
export const useThrottledMousePosition = (delay: number = 16) => {
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(0);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    const now = Date.now();
    if (now - lastUpdateRef.current >= delay) {
      positionRef.current = {
        x: (clientX / window.innerWidth) * 100,
        y: (clientY / window.innerHeight) * 100,
      };
      lastUpdateRef.current = now;
    }
  }, [delay]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updatePosition]);

  return positionRef;
};
