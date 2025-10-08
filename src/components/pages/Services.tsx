import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Service() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Embedded System Design",
      description:
        "Crafting innovative hardware-software solutions for IoT and automation with precision.",
      image: "/services_images/embedded.jpg",
    },
    {
      title: "PCB Design",
      description:
        "Creating reliable and efficient printed circuit boards tailored to your project needs.",
      image: "/services_images/PCB_Design.jpg",
    },
    {
      title: "Firmware Development",
      description:
        "Developing robust firmware to power embedded devices with optimal performance.",
      image: "/services_images/firmware-development.png",
    },
    {
      title: "CAD Design",
      description:
        "Delivering detailed and accurate 3D models for product prototyping and engineering solutions.",
      image: "/services_images/CAD_Design.jpg",
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-kindofwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <motion.div
            className="text-3xl sm:text-4xl lg:text-5xl font-futura font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-black">Services We Provide</h1>
            <p className="text-sexyblue/50 text-lg sm:text-xl md:text-2xl font-futura max-w-2xl mx-auto">
              Innovative Solutions for Your Needs
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between bg-white p-2 rounded-2xl border-2 border-capistor-300/20 shadow-md hover:shadow-lg transition-all duration-300 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
              >
                <div>
                  <h3 className="text-2xl text-left font-futura font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-left text-lg text-sexyblue/90 font-fransisco leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Image at the bottom */}
                <div className="mt-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
