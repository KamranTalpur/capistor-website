import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollLogicProps {
  setLogoScale: (scale: number) => void;
  setDisplayText: (text: string) => void;
  setShowDownArrow: (show: boolean) => void;
  setShowBackToTop: (show: boolean) => void;
  setCurrentProduct: (index: number) => void;
}

export const useScrollLogic = ({
  setLogoScale,
  setDisplayText,
  setShowDownArrow,
  setShowBackToTop,
}: UseScrollLogicProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const productsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Reduced for faster scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 0.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const checkElements = setInterval(() => {
      heroRef.current = document.querySelector(
        ".hero-section"
      ) as HTMLElement | null;
      productsRef.current = document.querySelector(
        ".products-section"
      ) as HTMLElement | null;

      if (heroRef.current && productsRef.current) {
        clearInterval(checkElements);

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            const progress = self.progress;
            setLogoScale(1 - progress * 0.3);
            setDisplayText(progress > 0.7 ? "Products" : "We Build Products");
            setShowDownArrow(progress <= 0.1);
          },
        });

        ScrollTrigger.create({
          trigger: productsRef.current,
          start: "top top", // Adjusted to trigger earlier
          end: "bottom bottom",
          onEnter: () => setShowBackToTop(true),
          onLeave: () => setShowBackToTop(false),
          onEnterBack: () => setShowBackToTop(true),
          onLeaveBack: () => setShowBackToTop(false),
        });
      }
    }, 100);

    return () => {
      clearInterval(checkElements);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setLogoScale, setDisplayText, setShowDownArrow, setShowBackToTop]);

  const scrollToProducts = () => {
    lenisRef.current?.scrollTo(productsRef.current || ".products-section", {
      duration: 1.2,
    });
  };

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, { duration: 1.2 });
  };

  return { scrollToProducts, scrollToTop };
};
