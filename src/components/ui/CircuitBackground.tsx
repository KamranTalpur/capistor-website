import { motion } from "framer-motion";

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice">
        {/* Mask to restrict effects to right and left sides */}
        <defs>
          <mask id="leftMask">
            <rect x="0" y="0" width="600" height="800" fill="white" />
            <rect x="600" y="0" width="600" height="800" fill="black" />
          </mask>
          <mask id="rightMask">
            <rect x="0" y="0" width="600" height="800" fill="black" />
            <rect x="600" y="0" width="600" height="800" fill="white" />
          </mask>
        </defs>

        {/* LEFT SIDE */}
        <g mask="url(#leftMask)" opacity="0.5">
          <motion.path
            d="M50,50 Q0,0 100,50 Q150,0 200,50 Q250,0 300,50"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100,100 Q50,50 150,100 Q200,50 250,100 Q300,50 350,100"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.8,
            }}
          />
          <motion.path
            d="M75,75 Q25,25 125,75 Q175,25 225,75 Q275,25 325,75"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 1.6,
            }}
          />
          <motion.path
            d="M125,25 Q75,0 175,25 Q225,0 275,25 Q325,0 375,25"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 2.4,
            }}
          />

          {/* Circuit nodes - only in left area */}
          {[
            { x: 50, y: 50 },
            { x: 0, y: 0 },
            { x: 100, y: 50 },
            { x: 150, y: 0 },
            { x: 200, y: 50 },
            { x: 250, y: 0 },
            { x: 300, y: 50 },
            { x: 100, y: 100 },
            { x: 50, y: 50 },
            { x: 150, y: 100 },
            { x: 200, y: 50 },
            { x: 250, y: 100 },
            { x: 75, y: 75 },
            { x: 25, y: 25 },
            { x: 125, y: 75 },
            { x: 175, y: 25 },
            { x: 225, y: 75 },
            { x: 275, y: 25 },
            { x: 325, y: 75 },
            { x: 125, y: 25 },
            { x: 75, y: 0 },
            { x: 175, y: 25 },
            { x: 225, y: 0 },
            { x: 275, y: 25 },
            { x: 325, y: 0 },
            { x: 375, y: 25 },
          ].map((node, index) => (
            <motion.circle
              key={`left-${index}`}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#343A40"
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0.3, 0.6, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>

        {/* RIGHT SIDE */}
        <g mask="url(#rightMask)" opacity="0.5">
          <motion.path
            d="M700,100 L900,100 L900,200 L1100,200 L1100,400 L1300,400 L1300,300 L1500,300 L1500,500 L1700,500"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M800,300 L1000,300 L1000,500 L1200,500 L1200,600 L1400,600 L1400,400 L1600,400 L1600,650 L1800,650"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.8,
            }}
          />
          <motion.path
            d="M650,150 L850,150 L850,350 L1050,350 L1050,250 L1250,250 L1250,450 L1450,450 L1450,350 L1650,350"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 1.6,
            }}
          />
          <motion.path
            d="M750,50 L950,50 L950,250 L1150,250 L1150,150 L1350,150 L1350,350 L1550,350 L1550,250 L1750,250"
            stroke="#343A40"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 2.4,
            }}
          />

          {/* Circuit nodes - only in logo area */}
          {[
            { x: 700, y: 100 },
            { x: 900, y: 200 },
            { x: 1100, y: 400 },
            { x: 1300, y: 300 },
            { x: 1500, y: 500 },
            { x: 1000, y: 300 },
            { x: 1200, y: 500 },
            { x: 1400, y: 600 },
            { x: 850, y: 150 },
            { x: 1050, y: 350 },
            { x: 1250, y: 250 },
            { x: 1450, y: 450 },
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#343A40"
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0.3, 0.6, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}