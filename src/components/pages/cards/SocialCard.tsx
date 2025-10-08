import { motion } from "framer-motion";

const SocialCard = () => {
  return (
    <motion.div
      className="max-w-md mx-auto bg-kindofwhite shadow-lg rounded-lg p-6 flex flex-col items-center "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}>
      <div className="mb-4">
        <motion.img
          className="w-32 h-32 rounded-full object-cover border-2 border-capistor-400"
          src="/profilepic/shoaibPic.jpeg"
          alt="Profile Picture"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1, borderColor: "#6C757D" }} // capistor-500
        />
      </div>
      <h2 className="text-2xl font-futura font-semibold text-black mb-4">Connect</h2>
      <div className="flex flex-col items-center space-y-4 mb-4">
        <div className="flex space-x-6">
          <a
            href="https://www.youtube.com/@capistor1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capistor-400 hover:text-capistor-500 transition-colors duration-200">
            <img
              src="https://img.favpng.com/9/20/22/youtube-logo-computer-icons-png-favpng-7BheSpb3uZ6bpSyBCzpYbGkAG.jpg"
              alt="YouTube"
              className="w-8 h-8 object-contain"
            />
          </a>
          <a
            href="https://www.fb.com/shoaib.sl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capistor-400 hover:text-capistor-500 transition-colors duration-200">
            <img
              src="https://www.citypng.com/public/uploads/preview/round-black-facebook-fb-logo-icon-sign-701751695134781upkxjlqwck.png"
              alt="Facebook"
              className="w-8 h-8 object-contain"
            />
          </a>
          <a
            href="https://github.com/manhoosbilli1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capistor-400 hover:text-capistor-500 transition-colors duration-200">
            <img
              src="https://icon2.cleanpng.com/20180530/ywr/kisspng-github-computer-icons-directory-5b0ec64b102792.7107546015276949230662.jpg"
              alt="GitHub"
              className="w-8 h-8 object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaibmustafa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capistor-400 hover:text-capistor-500 transition-colors duration-200">
            <div className="bg-kindofwhite p-1 rounded">
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/986/980/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                alt="LinkedIn"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>
          <a
            href="https://hackaday.io/manhoosbilli1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-capistor-400 hover:text-capistor-500 transition-colors duration-200">
            <div className="bg-kindofwhite p-1 rounded">
              <img
                src="https://images.icon-icons.com/2389/PNG/512/hackaday_logo_icon_145209.png"
                alt="Hackaday"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>
        </div>
        <a
          href="/your-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-capistor-500 text-white font-futura rounded-md hover:bg-capistor-600 transition-colors duration-200">
          View CV
        </a>
      </div>
    </motion.div>
  );
};

export default SocialCard;