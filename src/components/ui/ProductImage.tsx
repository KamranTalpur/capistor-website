import { motion } from "framer-motion";
import { useState } from "react";
import { ProductImage as ProductImageType } from "../../utils/productLoader";
import ThoughtBubble from "../ui/ThoughtBubble";

interface ProductImageProps {
    image: ProductImageType;
    productIndex: number;
    imageIndex: number;
    onWheel: (e: React.WheelEvent) => void;
}

export default function ProductImage({ image, productIndex, imageIndex, onWheel }: ProductImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            key={`${productIndex}-${imageIndex}`}
            className="w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl relative group"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(77, 170, 179, 0.3)",
                transition: { duration: 0.3 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onWheel={onWheel}
        >
            <ThoughtBubble text={image.thought} show={isHovered} />

            {/* Holographic effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sexyblue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{ imageRendering: 'crisp-edges' }}
                onLoad={() => console.log('Image loaded:', image.url)}
                onError={(e) => console.error('Image failed to load:', image.url, e)}
            />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.div>
    );
}
