import { motion } from "framer-motion";

export default function CircuitBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                {/* Mask to restrict effects to right side only */}
                <defs>
                    <mask id="logoMask">
                        <rect x="0" y="0" width="600" height="800" fill="black" />
                        <rect x="600" y="0" width="600" height="800" fill="white" />
                    </mask>
                </defs>
                <g mask="url(#logoMask)" opacity="0.5">
                    <motion.path
                        d="M700,100 L900,100 L900,200 L1100,200 L1100,400 L1300,400 L1300,300 L1500,300 L1500,500 L1700,500"
                        stroke="#4daab3"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M800,300 L1000,300 L1000,500 L1200,500 L1200,600 L1400,600 L1400,400 L1600,400 L1600,650 L1800,650"
                        stroke="#4daab3"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.8 }}
                    />
                    <motion.path
                        d="M650,150 L850,150 L850,350 L1050,350 L1050,250 L1250,250 L1250,450 L1450,450 L1450,350 L1650,350"
                        stroke="#4daab3"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.6 }}
                    />
                    <motion.path
                        d="M750,50 L950,50 L950,250 L1150,250 L1150,150 L1350,150 L1350,350 L1550,350 L1550,250 L1750,250"
                        stroke="#4daab3"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2.4 }}
                    />
                    <motion.path
                        d="M600,400 L800,400 L800,600 L1000,600 L1000,700 L1200,700 L1200,500 L1400,500 L1400,700 L1600,700"
                        stroke="#4daab3"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3.2 }}
                    />
                    {/* Circuit nodes - only in logo area */}
                    {[
                        { x: 700, y: 100 }, { x: 900, y: 200 }, { x: 1100, y: 400 },
                        { x: 1300, y: 300 }, { x: 1500, y: 500 }, { x: 1000, y: 300 },
                        { x: 1200, y: 500 }, { x: 1400, y: 600 }, { x: 850, y: 150 },
                        { x: 1050, y: 350 }, { x: 1250, y: 250 }, { x: 1450, y: 450 }
                    ].map((node, index) => (
                        <motion.circle
                            key={index}
                            cx={node.x}
                            cy={node.y}
                            r="3"
                            fill="#4daab3"
                            initial={{ scale: 0, opacity: 0.3 }}
                            animate={{ scale: [0, 1.2, 1], opacity: [0.3, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
