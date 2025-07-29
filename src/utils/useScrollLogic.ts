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
    setCurrentProduct
}: UseScrollLogicProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 0.5
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Hero section scroll trigger
        ScrollTrigger.create({
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            onUpdate: (self) => {
                const progress = self.progress;
                setLogoScale(1 - progress * 0.3);
                setDisplayText(progress > 0.7 ? "Products" : "We Build Products");

                // Hide down arrow when scrolling away from hero
                if (progress > 0.1) {
                    setShowDownArrow(false);
                } else {
                    setShowDownArrow(true);
                }
            }
        });

        // Back to top button trigger
        ScrollTrigger.create({
            trigger: ".products-section",
            start: "top center",
            end: "bottom bottom",
            onEnter: () => setShowBackToTop(true),
            onLeave: () => setShowBackToTop(false),
            onEnterBack: () => setShowBackToTop(true),
            onLeaveBack: () => setShowBackToTop(false)
        });

        // Product switching trigger
        ScrollTrigger.create({
            trigger: ".products-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const productIndex = Math.min(Math.floor(progress * 3), 2);
                setCurrentProduct(productIndex);
            }
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [setLogoScale, setDisplayText, setShowDownArrow, setShowBackToTop, setCurrentProduct]);

    const scrollToProducts = () => {
        lenisRef.current?.scrollTo('.products-section', { duration: 2 });
    };

    const scrollToTop = () => {
        lenisRef.current?.scrollTo(0, { duration: 2 });
    };

    return { scrollToProducts, scrollToTop };
};
