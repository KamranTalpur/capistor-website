import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-futura text-black font-bold mb-6">
            Electrify Your Vision
          </h1>
          <p className="text-sexyblue/50 text-lg sm:text-2xl md:text-4xl font-futura max-w-2xl mx-auto">
            Your Ideas My Assistance
          </p>
        </motion.div>
      </section>
    </>
  );
}
