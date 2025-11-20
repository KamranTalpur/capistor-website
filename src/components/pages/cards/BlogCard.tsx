import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BlogCardProps {
  title: string;
  text: string;
  imageSrc: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function BlogCard({
  title,
  text,
  imageSrc,
  buttonText = "Read More",
  onClick,
}: BlogCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className="w-full md:h-full bg-kindofwhite rounded-xl border-2 border-capistor-300/20 shadow-lg overflow-hidden flex md:flex-col h-40 sm:flex-row relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={imageSrc}
        alt={title}
        className="md:w-96 md:h-56 w-40 h-40 object-cover"
      />

      <div className="md:p-4 p-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="md:text-2xl text-left text-md font-futura font-bold text-black mb-2 w-72">
            {title}
          </h3>
          <p className="text-left md:w-full w-72 text-sm md:text-xl text-sexyblue/90 font-fransisco font-normal leading-6 sm:leading-8">
            {text}
          </p>
        </div>

        <div className="text-right md:text-center mt-0 md:mt-2 flex justify-end md:justify-start">
          <button
            onClick={onClick}
            className="inline-block py-2 px-6 bg-sexyblue text-kindofwhite rounded-lg font-futura text-base sm:text-lg hover:bg-capistor-600 transition-colors duration-200 md:w-full w-32 text-center"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
