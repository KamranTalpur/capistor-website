import { motion } from "framer-motion";

interface NavigationArrowProps {
    direction: "down" | "up";
    show: boolean;
    onClick: () => void;
    className?: string;
}

export default function NavigationArrow({ direction, show, onClick, className = "" }: NavigationArrowProps) {
    if (!show) return null;

    const isDown = direction === "down";

    return (
        <motion.button
            onClick={onClick}
            className={`z-20 ${className}`}
            initial={{ opacity: 0, y: isDown ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isDown ? -20 : 20 }}
            transition={{ delay: isDown ? 2 : 0, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={`backdrop-blur-sm rounded-full p-3 border ${isDown
                    ? "bg-sexyblue/20 border-sexyblue/30"
                    : "bg-sexyblue/90 border-sexyblue/30 shadow-lg"
                }`}>
                <svg
                    className={`w-6 h-6 ${isDown ? "text-sexyblue animate-bounce" : "text-white animate-bounce"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ transform: isDown ? "none" : "rotate(180deg)" }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isDown
                            ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                            : "M5 10l7-7m0 0l7 7m-7-7v18"
                        }
                    />
                </svg>
            </div>
        </motion.button>
    );
}
