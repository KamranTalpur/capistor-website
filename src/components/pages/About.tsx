import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-kindofwhite flex items-center justify-center relative z-10">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h1
          className="text-4xl lg:text-5xl text-sexyblue font-domine mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="shoaib-mustafa-794a0215a"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://ae.linkedin.com/in/shoaib-mustafa-794a0215a?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shoaib Mustafa
          </a>
        </div>
      </div>
    </section>
  );
}