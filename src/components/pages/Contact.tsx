import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    console.log("Input changed:", e.target.name, e.target.value); // Debug input
    setFormData((prev: ContactFormData) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = ((e: HandleSubmitEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Debug submission
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.log("Component mounted, formData:", formData); // Debug mount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-kindofwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          className="bg-white rounded-xl border-2 border-capistor-300/20 shadow-lg p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-futura font-bold text-sexyblue text-center mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Contact Us
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-base sm:text-lg font-fransisco text-sexyblue/90 mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-capistor-300/20 rounded-lg text-sexyblue bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base sm:text-lg font-fransisco text-sexyblue/90 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-capistor-300/20 rounded-lg text-sexyblue bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-base sm:text-lg font-fransisco text-sexyblue/90 mb-2">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-capistor-300/20 rounded-lg text-sexyblue bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base sm:text-lg font-fransisco text-sexyblue/90 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-capistor-300/20 rounded-lg text-sexyblue bg-white resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-sexyblue text-kindofwhite rounded-lg font-futura text-lg hover:bg-capistor-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;