import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BlogCard from "./cards/BlogCard";

export default function BlogSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogPosts = [
    {
      title: "RGB Laser Projector",
      date: "Oct 07, 2025",
      excerpt:
        "Exploring the engineering challenges and solutions in creating a high-precision RGB laser projection system.",
      image: "/blog_images/RGBLaser.jpg",
    },
    {
      title: "Automatic Incubator",
      date: "Oct 07, 2025",
      excerpt:
        "Designing and implementing automated temperature and humidity control for precision incubation systems.",
      image: "/blog_images/Incubator.jpg",
    },
    {
      title: "Industrial Pneumatic Press Machine",
      date: "Oct 07, 2025",
      excerpt:
        "Building robust pneumatic control systems for industrial pressing applications with safety and efficiency.",
      image: "/blog_images/PressMachine.jpg",
    },
  ];

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl w-full">
        <div className="relative h-screen">
          <div className="flex flex-col h-full justify-center">
            <div className="w-full mt-16 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center text-center">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-futura font-bold mb-6 mt-16 md:mt-4  sm:mb-8 md:mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
                transition={{ duration: 0.6 }}>
                <h1 className="text-black">Blog</h1>
                <p className="text-sexyblue/50 text-lg sm:text-xl md:text-2xl font-futura max-w-2xl mx-auto "></p>
              </motion.div>
              <div className="flex flex-col md:flex-row gap-6 sm:gap-2 md:gap-10">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    text={post.excerpt}
                    imageSrc={post.image}
                    buttonText="Read More"
                    onClick={() => console.log(`Navigate to ${post.title}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
