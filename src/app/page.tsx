"use client";

import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import {
  SkipLink,
  Navigation,
  HeroSection,
  FluidBackground,
  BackToTop,
  ScrollProgress,
} from "@/components";

// Lazy load below-fold components for better initial load
const WorkSection = lazy(() => import("@/components/WorkSection").then(m => ({ default: m.WorkSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Custom hook for throttled mouse position with RAF
const useThrottledMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);
  const THROTTLE_MS = 50; // ~20fps for background animation (reduced for performance)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastUpdateRef.current < THROTTLE_MS) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      lastUpdateRef.current = now;
    });
  }, []);

  useEffect(() => {
    // Skip mouse tracking on touch devices for better performance
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleMouseMove]);

  return mousePosition;
};

// Custom hook for body scroll lock
const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isLocked]);
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mousePosition = useThrottledMousePosition();

  // Lock scroll when mobile menu is open
  useScrollLock(isMobileMenuOpen);

  // Set loaded state after initial render (for animations)
  useEffect(() => {
    // Using requestAnimationFrame to avoid the eslint warning about setState in effect
    // This is intentional for triggering mount animations
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <ScrollProgress />
      <SkipLink />
      <BackToTop />
      <div className="relative min-h-screen">
        <FluidBackground mousePosition={mousePosition} />

        {/* Content */}
        <div className="relative z-10">
          <Navigation
            isLoaded={isLoaded}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <main id="main-content">
            <HeroSection isLoaded={isLoaded} />
            <Suspense fallback={null}>
              <WorkSection />
              <ServicesSection />
              <AboutSection />
              <TestimonialSection />
              <ContactSection />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
