import { useRef } from "react";
import CircuitBackground from "./ui/CircuitBackground";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-kindofwhite relative pt-16">
      <CircuitBackground />
      <HeroSection />
    </div>
  );
}
