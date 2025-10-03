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
      className="w-full sm:h-48 md:h-full bg-kindofwhite rounded-xl border-2 border-capistor-300/20 shadow-lg overflow-hidden flex md:flex-col sm:flex-row h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, borderColor: "" }}>
      <img
        src={imageSrc}
        alt={title}
        className="md:w-full md:h-56 sm:w-40 sm:h-48 object-cover"
      />
      <div className="p-4 sm:p-6 sm:justify-start flex-1 flex flex-col justify-between">
        <div>
          <h3 className="md:text-2xl text-left sm:text-xl font-futura font-bold text-sexyblue mb-2">
            {title}
          </h3>
          <p className="text-left md:w-full sm:w-72 sm:text-lg text-sexyblue/90 font-fransisco font-normal leading-6 sm:leading-8">
            {text}
          </p>
        </div>
        <button
          onClick={onClick}
          className="md:mt-4 sm:mt-4  inline-block py-2 px-6 bg-sexyblue text-kindofwhite rounded-lg font-futura text-base sm:text-lg hover:bg-capistor-600 transition-colors duration-200 md:w-full sm:w-40 text-center">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}
