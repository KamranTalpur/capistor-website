import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative bg-kindofwhite">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-futura text-black font-bold mb-6">
            Electrify Your Vision
          </h1>
          <p className="text-sexyblue/60 text-lg sm:text-2xl md:text-3xl font-futura max-w-2xl mx-auto">
            Your Idea, Our Expertise.
          </p>
        </motion.div>
      </section>
    </>
  );
}
