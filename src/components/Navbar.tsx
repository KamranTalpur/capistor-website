import { RefObject, useState, useEffect } from "react";

interface NavbarProps {
  sections: {
    home: RefObject<HTMLElement>;
    about: RefObject<HTMLElement>;
    products: RefObject<HTMLElement>;
    services: RefObject<HTMLElement>;
    blog: RefObject<HTMLElement>;
    contact: RefObject<HTMLElement>;
  };
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
    console.log(`Clicked ${section}:`, { section });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      const sectionKeys = Object.keys(sections) as (keyof typeof sections)[];
      let current = "home";

      for (const key of sectionKeys) {
        const section = sections[key].current;
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          current = key;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className="py-6 bg-kindofwhite fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center space-x-6">
        <button
          onClick={() => scrollToSection("home")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "home" ? "font-bold" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "about" ? "font-bold" : ""}`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("products")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "products" ? "font-bold" : ""}`}
        >
          Products
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "services" ? "font-bold" : ""}`}
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("blog")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "blog" ? "font-bold" : ""}`}
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`text-sexyblue font-helvetica hover:text-capistor-200 transition-colors duration-200 ${activeSection === "contact" ? "font-bold" : ""}`}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}