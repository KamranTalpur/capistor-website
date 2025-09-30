import { useState, useRef } from "react";
import { useScrollLogic } from "../utils/useScrollLogic";
import CircuitBackground from "./ui/CircuitBackground";
import HeroSection from "./sections/HeroSection";
import NavigationArrow from "./ui/NavigationArrow";


export default function Home() {
  const containerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [displayText, setDisplayText] = useState("Capistor");
  const [logoScale, setLogoScale] = useState(1);

  const { scrollToProducts, scrollToTop } = useScrollLogic({
    setLogoScale,
    setDisplayText,
    setShowDownArrow: () => {}, // Unused since down arrow is removed
    setShowBackToTop,
    setCurrentProduct: () => {}, // Placeholder since product logic is in App.tsx
  });

  return (
    <div ref={containerRef} className="bg-kindofwhite relative pt-16">
      <CircuitBackground />
      <HeroSection
        displayText={displayText}
        logoScale={logoScale}
        showDownArrow={false} // Hide down arrow
        onScrollToProducts={scrollToProducts}
      />
      <NavigationArrow
        show={showBackToTop}
        onClick={scrollToTop}
      />
    </div>
  );
}