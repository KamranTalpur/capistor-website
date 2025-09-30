import { motion } from "framer-motion";

interface HeroSectionProps {
  displayText: string;
  logoScale: number;
  showDownArrow: boolean;
  onScrollToProducts: () => void;
}

export default function HeroSection({
  displayText,
  logoScale,
}: HeroSectionProps) {
  return (
    <section className="hero-section min-h-screen flex relative z-10 pt-50 pb-16">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center m-80">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: logoScale }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-domine font-black text-sexyblue leading-tight">
            Capistor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-sexyblue mt-6 font-domine font-bold">
            {displayText}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
