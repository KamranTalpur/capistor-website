import { motion } from "framer-motion";
import NavigationArrow from "../ui/NavigationArrow";

interface HeroSectionProps {
    displayText: string;
    logoScale: number;
    showDownArrow: boolean;
    onScrollToProducts: () => void;
}

export default function HeroSection({
    displayText,
    logoScale,
    showDownArrow,
    onScrollToProducts
}: HeroSectionProps) {
    return (
        <section className="hero-section h-screen flex relative z-10">
            {/* Left side - Text */}
            <div className="w-1/2 flex items-center justify-center px-8 lg:px-16">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl lg:text-6xl font-domine font-black text-sexyblue leading-tight"
                    >
                        Capistor
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg md:text-xl text-sexyblue mt-6 font-domine font-bold"
                    >
                        This site is currently under development
                    </motion.p>
                </div>
            </div>

            {/* Right side - Logo with scroll-based scaling */}
            <div className="w-1/2 flex items-center justify-center px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: logoScale, rotateY: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    whileHover={{
                        scale: logoScale * 1.1,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                    }}
                    className="w-64 h-64 lg:w-80 lg:h-80 cursor-pointer"
                >
                    <img
                        src="/logo_svg.svg"
                        alt="Capistor Logo"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Scroll Down Arrow */}
            <NavigationArrow
                direction="down"
                show={showDownArrow}
                onClick={onScrollToProducts}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            />
        </section>
    );
}
